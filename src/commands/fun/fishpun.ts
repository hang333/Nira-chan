import { MessageEmbed } from 'discord.js';
import { Command, CommandoClient, CommandoMessage } from 'discord.js-commando';

import { doesUserHaveBotpass, isBotspamChannel, isDmChannel, isHomeGuild, isInChannel } from '../../util/checks';
import { allChannels, colour } from '../../config/config.json';
import fishpuns from '../../data/fishpuns.json';

export default class FishpunCommand extends Command {
  constructor(client: CommandoClient) {
    super(client, {
      name: 'fishpun',
      aliases: ['fishypun', 'fishjoke', 'fishyjoke', 'squidpun', 'squiddypun', 'squidjoke', 'squiddyjoke'],
      group: 'fun',
      memberName: 'fishpun',
      description: 'Something seems... *Fishy*.',
    });
  }

  async run(message: CommandoMessage) {
    if (
      isDmChannel(message) ||
      isBotspamChannel(message) ||
      isInChannel(message, allChannels.fishy) ||
      !isHomeGuild(message) ||
      doesUserHaveBotpass(message)
    ) {
      const embed = new MessageEmbed({
        title: 'Mr. Fish says...',
        thumbnail: { url: 'https://raw.githubusercontent.com/anomalilies/Nira-chan/master/Images/Fishy.jpg' },
        description: fishpuns[Math.floor(Math.random() * fishpuns.length)],
        color: colour,
      });

      return await message.channel.send(embed);
    }
  }
}
