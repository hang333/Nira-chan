import { oneLine, stripIndent } from 'common-tags';
import { MessageEmbed } from 'discord.js';

import { colour } from '../../config/config.json';

export const livesAndPerformances1 = new MessageEmbed({
  title: 'Lives and Performances',
  description: "If you missed a live show, here's your chance to catch-up!",
  color: colour,
  author: {
    name: stripIndent`
      All content courtesy of our wonderful Stans!
      Please keep links solely to the server to recognise their efforts.
    `,
  },
  footer: {
    text: stripIndent`
      Please be aware that the majority of ZUTOMAYO's lives use strobe effects and other intense, flashing lights.
      If you have photosensitive epilepsy, or any other conditions that cause sensitivity to light, please take caution before viewing!
    `,
  },
  fields: [
    {
      name: 'YAKI YAKI YANKEE TOUR',
      value: stripIndent`
        **[Download Link](https://drive.google.com/file/d/1fAc7Xm5LEFmbfa_XfQjuCAGxno_G5rj_/view)**
        Audio-only: [MP3](https://drive.google.com/drive/folders/16y9-5tgqFG2VO6Lferwy27z0YZ4Q002x?usp=sharing)
      `,
    },
    {
      name: 'NHK SONGS Live',
      value: '**[Download Link](https://drive.google.com/file/d/1NlYxYusY3C-Rqsi4hOezOL7MrtZjoYH7/)**',
    },
    {
      name: 'Mini Twin Piano Live',
      value: stripIndent`
        **[Download Link](https://drive.google.com/file/d/1NlYxYusY3C-Rqsi4hOezOL7MrtZjoYH7/)**
        Audio-only: [MP3](https://drive.google.com/drive/folders/1JZ7uxGaRl_j3c05LBFFxSfyunL6-zZzk)
      `,
    },
    {
      name: 'JAPAN ONLINE FESTIVAL 2020',
      value: stripIndent`
        **[Download Link](https://mega.nz/file/WyAgiBZB#YYzZJcW28dW7QutFYsb4JjViCq_OUldN9-hD2XctQZc)**
        Audio-only: [MP3](https://drive.google.com/drive/folders/1IibXSwEOAnxVDOm_oRfEcWd08YejLgL0)
      `,
    },
    {
      name: 'Online Live NIWA TO NIRA',
      value: oneLine`
        **[Download Link](https://mega.nz/file/abQnHQpZ#JB1sN4qVS9MCHCGUw0Mz0mzJdEbOopu3N8h41bC5RSk)**
        ([Mirror](https://drive.google.com/file/d/1yDwELl6mAggdViqajabl1QOO6NMspHYl/view?usp=sharing))
        Audio-only: [MP3](https://drive.google.com/drive/folders/1Qs9uNdTLwi7rrMey9y4OFSoN6m-sgaSm?usp=sharing)
      `,
    },
    {
      name: 'Midnight Forever Live from YouTube Space Tokyo',
      value: oneLine`
        **[YouTube Link](https://youtu.be/PwVFxexqenE)**
        ([Mirror 1](https://mega.nz/file/LeBGwABR#ev4H4Ha9pKXaytiCg7fXH_30rzoeN6147ys22h7P90s)|
        [Mirror 2](https://drive.google.com/file/d/1-cv5b44qK_vWnPo-tgAYybuB_6CjuNpb/view?usp=sharing))\n
        Audio-only: [MP3](https://drive.google.com/drive/folders/1Z0FW3ygYTzIortW18LhHkqZfQ67DmJnD?usp=sharing)
      `,
    },
    {
      name: 'Bathroom Twin Piano Live',
      value: oneLine`
        **[Download Link](https://mega.nz/file/fGw1ATgY#s0CporJqz0MHK7QAH1NhS1pQAjk72R-WXqqFMiSd_rk)**
        ([Mirror](https://drive.google.com/file/d/1UHbhdbDBPe2IDLW7utznj1PegJoEiHDg/view?usp=sharing))\n
        Audio-only: [MP3](https://drive.google.com/drive/folders/1uHT69XHUNTSCLCk4qb8x7rTYDks8NCld?usp=sharing)
      `,
    },
    {
      name: 'FUJI ROCK FESTIVAL 2019',
      value: oneLine`
        **[Download Link](https://mega.nz/file/rXQB0arY#O5IoHE1kre58krNLoO_qKQ3TcNc1xKa12hr_vqx87oM)**
        ([Mirror](https://drive.google.com/file/d/1awTe-vcZrqK5gJWmM0SgDjQgL057CNsW/view?usp=sharing))\n
        Audio-only: [MP3](https://drive.google.com/drive/folders/1wsBOIe4zt8RYKyY5e9-TZ4kdCkcJBVeL?usp=sharing)
      `,
    },
    {
      name: 'ACAね Before ZUTOMAYO in 2017',
      value: '**[Download Link](https://mega.nz/file/nepkHapA#IFHNIUGdDif17297t8sVfwaYYifvoEotU3ogWl8aVaM)**',
    },
  ],
});

export const livesAndPerformances2 = new MessageEmbed({
  title: 'Scans',
  color: colour,
  fields: [
    {
      name: 'Hisohiso Banashi: Band Score',
      value: oneLine`
        **[Download Link](https://drive.google.com/drive/folders/1iyKuqs4dfOoYcRAlKvAnbgWCVU_DK5En?usp=sharing)**
        ([Mirror](https://drive.google.com/drive/folders/1vkVTM5w-ftEit4f138YSqpE7NamEc9r4?usp=sharing))
      `,
    },
    {
      name: 'Hisohiso Banashi: Limited Edition Booklet',
      value: oneLine`
        **[Download Link](https://drive.google.com/drive/folders/16Qljz7LZk2rOAA9vZNRkBjZv7f5KwQJm?usp=sharing)**
        ([Mirror](https://drive.google.com/drive/folders/1IZeEG3gJuHpDTZbLD2z9ph_nx8dB5ese?usp=sharing))
      `,
    },
    {
      name: 'Hogaraka na Hifutote Fufuku: Limited Edition Booklet',
      value: oneLine`
        **[Download Link](https://drive.google.com/drive/folders/1VzqAAmpBZ96iMiO3dcw9HnhbErng985u?usp=sharing)**
        ([Mirror](https://drive.google.com/drive/folders/18WlEyI6q1FPvkrZf8oCVUIkb0Lh8zDv8?usp=sharing))
      `,
    },
  ],
});

export const livesAndPerformances3 = new MessageEmbed({
  title: 'Music',
  color: colour,
  description:
    "**[Master Link](https://mega.nz/folder/tVlygDAK#nmpjhwIuSFI9FvWCQ8qUyg)**\nEvery non-streaming song of ZUTOMAYO/ACAね's put together into a master folder on MEGA.",
  fields: [
    { name: 'Official Instrumentals', value: '**[Download Link](https://piapro.jp/zutomayo)**' },
    {
      name: "ACAね's Song Covers",
      value:
        '**[Download Link](https://drive.google.com/drive/folders/1k6SJ4cH4CGEbbIIA-jIw2t47ebUi-dwl?usp=sharing)**',
    },
    {
      name: 'ZUTOMAYO Complete Playlist',
      value: '**[Spotify Link](https://open.spotify.com/playlist/4LzgxjNXi3YgYHje06rQDr?si=cRIvxONUSICOenB5EJjVgQ)**',
    },
  ],
});
