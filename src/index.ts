// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import fs from 'fs';
import path from 'path';

import { ClientEvents } from 'discord.js';
import { CommandoClient } from 'discord.js-commando';
import { updateChannelTitleJob } from './jobs/updateChannelTitle';
import { prefix, members } from './config/config.json';
import { initHandlers } from './handler/initHandlers';

(async () => {
  // Commando
  const client = new CommandoClient({
    owner: members.currentOwner,
    commandPrefix: prefix,
    disableMentions: 'everyone',
    partials: ['REACTION', 'MESSAGE'],
  });

  // Events
  const eventFolderPath = __dirname + '/events/';

  fs.readdir(eventFolderPath, async (err, files) => {
    if (err) return console.error(err);
    for (const file of files) {
      const event = await import(eventFolderPath + file);
      const eventName = file.split('.')[0];
      client.on(<keyof ClientEvents>eventName, event.default.bind(null, client));
    }
  });

  client.registry
    .registerGroups([
      ['fun', 'Fun'],
      ['fishy', 'Fishy'],
      ['misc', 'Miscellaneous'],
      ['data', 'Data Settings'],
      ['dev', 'Developer Commands'],
      ['server', 'Server-Specific'],
      ['util', 'Utility'],
      ['commands', 'Command Debug'],
    ])
    .registerDefaultTypes()
    .registerDefaultCommands({
      unknownCommand: false,
      help: false,
    })
    .registerCommandsIn({
      filter: /^([^.].*)\.(js|ts)$/,
      dirname: path.join(__dirname, './commands'),
    });

  await initHandlers();

  // Start
  await client.login(process.env.CLIENT_TOKEN);

  // Jobs
  (await updateChannelTitleJob(client)).start();
})();
