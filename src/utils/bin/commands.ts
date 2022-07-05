// List of commands that do not require API calls

import * as bin from './index';
import config from '../../../config.json';

const notAuthorized=`unfortunately, you don't have enough power to do that.`;

export const help = async (args: string[]): Promise<string> => {
  console.log(args)
  if(args && args[0] == '--all') {
    const commands = Object.keys(bin).sort().join(', ');
    return `showing all commands.
\n${commands}\n
[tab]: command line completion.
[ctrl+l]/clear: clear terminal.\n
`;
} else return `showing available guest commands, use command 'help --all' to see all system commands.

about, alice, astro, banner, bob, clear, contact, credits, date, disco, discord, docs, echo, exit, help, live, ls, sponsor, status, version, wallet, weather, whoami.

[tab]: command line completion.
[ctrl+l]/clear: clear terminal.\n`;
};

export const about = async (args: string[]): Promise<string> => {
  
return `koad:lite-v8 v0.0.149
<a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/koad/io-light" target="_blank">github://koad/io-light</a>

An essentials only command prompt for the king while he is away from the kingdom.

guests: for a full featured koad:io experience, consider <a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/koad/io" target="_blank">github://koad/io</a>.

use command 'contact' to display koad's contact information.

`;
};

export const version = async (args: string[]): Promise<string> => {
return `koad:lite-v8 v0.0.149`;
};

export const sponsor = async (args: string[]): Promise<string> => {
  return `thank you for your interest, 

you can support my work by <a class="text-light-blue dark:text-dark-blue underline" href="${config.donate_urls.github}" target="_blank">sponsoring me on github</a> with any amount either one-time or monthly.

alternatively, several choices exist for those who want me to give them unfeathered attention.

# insiders
buffer - have a call with me for an hour > $500 
queue - take my focus for a day > $2500 USD
inturrupt - take me away from my metaverse for an entire week > $10k USD
reboot - make me the king of your kingdom for a month > 100k USD
`;
};

// Typical linux commands
export const echo = async (args: string[]): Promise<string> => {
  return args.join(' ');
};

export const contact = async (args: string[]): Promise<string> => {
  return `
                                 @@@@@@@                         | 
                                @@@@@@@@                         |  koad
                *@@@%           @@@@@@@   *@@@%                  | -----------
              @@@@@@@@@        @@@@@@@& @@@@@@@@@                |  ${config.name}
           *@@@@@@@@@@*        @@@@@@@   @@@@@@@@@@%             |  <u><a class="text-light-blue dark:text-dark-blue underline" href="https://keybase.io/koad/pgp_keys.asc?fingerprint=a07f8cfecbf6b982eedac4f362d5c4866c247e00" target="_blank">pgp:\\\\a07f8cfe:6c247e00</a></u>
         @@@@@@@@@@@          @@@@@@@(     %@@@@@@@@@@           |  Cypherpunk
      *@@@@@@@@@@*           *@@@@@@@         @@@@@@@@@@%        |  Optimist
    @@@@@@@@@@@              @@@@@@@*           %@@@@@@@@@@      | -----------
 *@@@@@@@@@@*               #@@@@@@@               @@@@@@@@@@%   |  CONTACT 
@@@@@@@@@@*                 @@@@@@@                  @@@@@@@@@@& |  <u><a href="https://keybase.io/${config.social.keybase}" target="_blank">keybase.io/${config.social.keybase}</a></u>
  @@@@@@@@@@@              @@@@@@@@               &@@@@@@@@@@    |  <u><a href="https://github.com/${config.social.github}" target="_blank">github.com/${config.social.github}</a></u>
     @@@@@@@@@@*           @@@@@@@              @@@@@@@@@@&      | ﬧ <u><a href="https://matrix.to/#/@matrix:koad.sh" target="_blank">@matrix:koad.sh</a></u>
       @@@@@@@@@@@        @@@@@@@%           %@@@@@@@@@@         | -----------
         *@@@@@@@@@@*    *@@@@@@@          @@@@@@@@@@&           |  DONATE 
            @@@@@@@@@@@  @@@@@@@/       #@@@@@@@@@@              |  <u><a href="${config.donate_urls.github}" target="_blank">${config.donate_urls.github}</a></u>
               @@@@@@@% /@@@@@@@        *@@@@@@@&                | ﴑ <u><a href="bitcoin:bc1qvdwh05qzmp2va220tzzdeaarseqgh9dty5zxaq" target="_blank">bc1qvdwh05qzmp2va220tzzdeaarseqgh9dty5zxaq</a></u>
                 @@@    @@@@@@@            @@@                   | 
                       %@@@@@@@                                  | 
                       @@@@@@@   
`;
};


export const discord = async (args?: string[]): Promise<string> => {
  window.open('https://discord.gg/Qnhwtqmcb2', '_blank'); // ...I'm sorry
  return `opened invite to koad's discord channel in browser window `;
};

export const matrix = async (args?: string[]): Promise<string> => {
  window.open('https://matrix.to/#/#live:koad.sh', '_blank'); // ...I'm sorry
  return `opened invite to koad's live matrix space in browser window `;
};

export const sudo = async (args?: string[]): Promise<string> => {
  window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank'); // ...I'm sorry
  return `Permission denied: with little power comes... no responsibility? `;
};

export const status = async (args?: string[]): Promise<string> => {
  window.open('https://status.koad.sh', 'koadplayer'); // ...I'm sorry
  return `opened 'status.koad.sh' in browser window`;
};

export const disco = async (args?: string[]): Promise<string> => {
  window.open('https://player.koad.sh', 'koadplayer'); // ...I'm sorry
  return `opened 'player.koad.sh' in browser window`;
};

export const docs = async (args?: string[]): Promise<string> => {
  window.open('https://book.koad.sh', 'koadplayer'); // ...I'm sorry
  return `opened 'book.koad.sh' in browser window`;
};

export const live = async (args?: string[]): Promise<string> => {
  window.open('https://live.koad.sh', 'koadlive'); // ...I'm sorry
  return `opened 'live.koad.sh' in browser window`;
};

export const wallet = async (args?: string[]): Promise<string> => {
  window.open('https://ecoincore.com', 'ecoincore'); // ...I'm sorry
  return `opened 'ecoincore.com' in browser window`;
};

export const directory = async (args?: string[]): Promise<string> => {
  window.open('https://canadaecoin.directory', 'indieexpress'); // ...I'm sorry
  return `opened indie express via example 'canadaecoin.directory' in browser window`;
};

export const banner = (args?: string[]): string => {
  return `
oooo                                  .o8               oooo        
'888                                 "888               '888        
 888  oooo   .ooooo.   .oooo.    .oooo888       .oooo.o  888 .oo.   
 888 .8P'   d88' '88b 'P  )88b  d88' '888      d88(  "8  888P"Y88b  
 888888.    888   888  .oP"888  888   888      '"Y88b.   888   888  
 888 '88b.  888   888 d8(  888  888   888  .o. o.  )88b  888   888  
o888o o888o 'Y8bod8P' 'Y888""8o 'Y8bod88P" Y8P 8""888P' o888o o888o 
..    .-.. --- ...- .    -.-- --- ..- 

Type 'help' to see the list of commands.
`;
};

export const credits = (args?: string[]): string => {
  return `
build using the gifts from the following...

 <u><a href="https://github.com/Cveinnt/LiveTerm">Cveinnt's LiveTerm</a></u>
 <u>which is based on <a href="https://github.com/m4tt72/terminal">M4TT72's awesome Terminal</a></u>
 <u><a href="https://linuxfoundation.org/">open source software</a>; sharing is caring!</u>
`;
};

export const whoami = async (args: string[]): Promise<string> => {
  return `${config.ps1_username}`;
};

export const ls = async (args: string[]): Promise<string> => {

  if(args && args[0]){
    return `
drwxr-xr-x 131 guest        guest           4096 Jun 17 13:22  .
drwxr-xr-x   3 root         root            4096 Mar 17  2021  ..
drwxrwxr-x  26 guest        guest           4096 Jun 10 15:49  .alice/
drwxrwxr-x  24 guest        guest           4096 Jun  8 16:08  .astro/
drwxrwxr-x  17 guest        guest           4096 May 28 22:06  .bob/
drwxrwxr-x  19 guest        guest           4096 May 30 13:19  .koad-io/
`;
  } else return `
.alice     .astro      .bob        .koad-io
`;
};

export const date = async (args: string[]): Promise<string> => {
  return new Date().toString();
};


// TODO: make this stuff work
export const exit = async (args: string[]): Promise<string> => {
  // window.loggedInUser=null;
  return `Where did you want to go?
  `;
};

export const alice = async (args?: string[]): Promise<string> => {
  // window.entity = 'alice'
  return `
alice is onboard, her enviroment loaded and is ready for action.
  `;
};

export const astro = async (args?: string[]): Promise<string> => {
  // window.entity = 'astro'
  return `
astro is onboard, it's enviroment loaded and is ready for action.
  `;
};

export const bob = async (args?: string[]): Promise<string> => {
  // window.entity = 'bob'
  return `
bob is onboard, his enviroment loaded and is ready for action.
  `;
};

// TODO: Some things are too immature to share.
export const knock = async (args: string[]): Promise<string> => { return notAuthorized; };
export const telnet = async (args: string[]): Promise<string> => { return notAuthorized; };
export const mount = async (args: string[]): Promise<string> => { return notAuthorized; };
export const ssh = async (args: string[]): Promise<string> => { return notAuthorized; };
export const cd = async (args: string[]): Promise<string> => { return notAuthorized; };
export const absorb = async (args: string[]): Promise<string> => { return notAuthorized; };
export const branch = async (args: string[]): Promise<string> => { return notAuthorized; };
export const checkout = async (args: string[]): Promise<string> => { return notAuthorized; };
export const decrypt = async (args: string[]): Promise<string> => { return notAuthorized; };
export const drop = async (args: string[]): Promise<string> => { return notAuthorized; };
export const find = async (args: string[]): Promise<string> => { return notAuthorized; };
export const learn = async (args: string[]): Promise<string> => { return notAuthorized; };
export const manage = async (args: string[]): Promise<string> => { return notAuthorized; };
export const open = async (args: string[]): Promise<string> => { return notAuthorized; };
export const push = async (args: string[]): Promise<string> => { return notAuthorized; };
export const restore = async (args: string[]): Promise<string> => { return notAuthorized; };
export const shortlog = async (args: string[]): Promise<string> => { return notAuthorized; };
export const start = async (args: string[]): Promise<string> => { return notAuthorized; };
export const verify = async (args: string[]): Promise<string> => { return notAuthorized; };
export const add = async (args: string[]): Promise<string> => { return notAuthorized; };
export const browse = async (args: string[]): Promise<string> => { return notAuthorized; };
export const clone = async (args: string[]): Promise<string> => { return notAuthorized; };
export const deploy = async (args: string[]): Promise<string> => { return notAuthorized; };
export const edit = async (args: string[]): Promise<string> => { return notAuthorized; };
export const follow = async (args: string[]): Promise<string> => { return notAuthorized; };
export const init = async (args: string[]): Promise<string> => { return notAuthorized; };
export const list = async (args: string[]): Promise<string> => { return notAuthorized; };
export const manpage = async (args: string[]): Promise<string> => { return notAuthorized; };
export const play = async (args: string[]): Promise<string> => { return notAuthorized; };
export const rekey = async (args: string[]): Promise<string> => { return notAuthorized; };
export const revoke = async (args: string[]): Promise<string> => { return notAuthorized; };
export const show = async (args: string[]): Promise<string> => { return notAuthorized; };
export const stash = async (args: string[]): Promise<string> => { return notAuthorized; };
export const tag = async (args: string[]): Promise<string> => { return notAuthorized; };
export const track = async (args: string[]): Promise<string> => { return notAuthorized; };
export const watch = async (args: string[]): Promise<string> => { return notAuthorized; };
export const archive = async (args: string[]): Promise<string> => { return notAuthorized; };
export const build = async (args: string[]): Promise<string> => { return notAuthorized; };
export const commit = async (args: string[]): Promise<string> => { return notAuthorized; };
export const destroy = async (args: string[]): Promise<string> => { return notAuthorized; };
export const encrypt = async (args: string[]): Promise<string> => { return notAuthorized; };
export const forge = async (args: string[]): Promise<string> => { return notAuthorized; };
export const inspect = async (args: string[]): Promise<string> => { return notAuthorized; };
export const locate = async (args: string[]): Promise<string> => { return notAuthorized; };
export const merge = async (args: string[]): Promise<string> => { return notAuthorized; };
export const pop = async (args: string[]): Promise<string> => { return notAuthorized; };
export const rebase = async (args: string[]): Promise<string> => { return notAuthorized; };
export const reset = async (args: string[]): Promise<string> => { return notAuthorized; };
export const rm = async (args: string[]): Promise<string> => { return notAuthorized; };
export const sign = async (args: string[]): Promise<string> => { return notAuthorized; };
export const tail = async (args: string[]): Promise<string> => { return notAuthorized; };
export const update = async (args: string[]): Promise<string> => { return notAuthorized; };
export const backup = async (args: string[]): Promise<string> => { return notAuthorized; };
export const detatch = async (args: string[]): Promise<string> => { return notAuthorized; };
export const enroll = async (args: string[]): Promise<string> => { return notAuthorized; };
export const generate = async (args: string[]): Promise<string> => { return notAuthorized; };
export const install = async (args: string[]): Promise<string> => { return notAuthorized; };
export const lock = async (args: string[]): Promise<string> => { return notAuthorized; };
export const mv = async (args: string[]): Promise<string> => { return notAuthorized; };
export const probe = async (args: string[]): Promise<string> => { return notAuthorized; };
export const reboot = async (args: string[]): Promise<string> => { return notAuthorized; };
export const resize = async (args: string[]): Promise<string> => { return notAuthorized; };
export const send = async (args: string[]): Promise<string> => { return notAuthorized; };
export const spawn = async (args: string[]): Promise<string> => { return notAuthorized; };
export const stop = async (args: string[]): Promise<string> => { return notAuthorized; };
export const test = async (args: string[]): Promise<string> => { return notAuthorized; };
export const upgrade = async (args: string[]): Promise<string> => { return notAuthorized; };
export const whoareyou = async (args: string[]): Promise<string> => { return notAuthorized; };
export const blame = async (args: string[]): Promise<string> => { return notAuthorized; };
export const check = async (args: string[]): Promise<string> => { return notAuthorized; };
export const create = async (args: string[]): Promise<string> => { return notAuthorized; };
export const diff = async (args: string[]): Promise<string> => { return notAuthorized; };
export const git = async (args: string[]): Promise<string> => { return notAuthorized; };
export const launch = async (args: string[]): Promise<string> => { return notAuthorized; };
export const log = async (args: string[]): Promise<string> => { return notAuthorized; };
export const notes = async (args: string[]): Promise<string> => { return notAuthorized; };
export const pull = async (args: string[]): Promise<string> => { return notAuthorized; };
export const receive = async (args: string[]): Promise<string> => { return notAuthorized; };
export const restart = async (args: string[]): Promise<string> => { return notAuthorized; };
export const shell = async (args: string[]): Promise<string> => { return notAuthorized; };
export const store = async (args: string[]): Promise<string> => { return notAuthorized; };
export const tldr = async (args: string[]): Promise<string> => { return notAuthorized; };
export const upload = async (args: string[]): Promise<string> => { return notAuthorized; };
export const whois = async (args: string[]): Promise<string> => { return notAuthorized; };
