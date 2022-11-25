const config=Meteor.settings.public;

if(!config) return;

NOT_AUTHORIZED=`unfortunately, you don't have enough power to do that.`;
COMMAND_NOT_FOUND=`command not found`;
LOGIN_PROMPT=`login`;
KOAD_IO_LIGHT_VERSION=`koad:io-light v0.0.161`


DEVELOPER_CREDITS=`
build using the gifts from the following...

 <u><a href="https://github.com/Cveinnt/LiveTerm">Cveinnt's LiveTerm</a></u>
 <u>which is based on <a href="https://github.com/m4tt72/terminal">M4TT72's awesome Terminal</a></u>
 <u><a href="https://linuxfoundation.org/">open source software</a>; sharing is caring!</u>
`;


GUEST_HELP=`showing available guest commands, use command 'help --all' to see all system commands.

about, banner, contact, credits, disco, exit, help, hire, live, sponsor, status, version, whoami.

[tab]: command line completion.
[ctrl+l]/clear: clear terminal.
`;


SPONSORSHIPS=`thank you for your interest, 

you can support my work by <a class="text-light-blue dark:text-dark-blue underline" href="${config.tip_jar.github}" target="_blank">sponsoring me on github</a> with any amount either one-time or monthly.

alternatively, for those who want me to give them unfettered attention this is the ballpark.

# insiders
buffer - have a call with me for an hour > $500 
queue - take my focus for a day > $2500 USD
interrupt - take me away from my metaverse for an entire week > $10k USD
reboot - make me the king of your kingdom for a month > 100k USD
`;


ABOUT_KOAD_IO_LIGHT=`
${KOAD_IO_LIGHT_VERSION}
<a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/koad/io-light" target="_blank">github://koad/io-light</a>

An essentials only command prompt for the king while he is away from the kingdom.

guests: for a full featured koad:io experience, consider <a class="text-light-blue dark:text-dark-blue underline" href="https://github.com/koad/io" target="_blank">github://koad/io</a>.

use command 'contact' to display koad's contact information.
`;


BANNER=`
oooo                                  .o8              oooo        
'888                                 "888              '888        
 888  oooo   .ooooo.   .ooooo.   .oooo888      .oooo.o  888 .oo.   
 888 .8P'   d88' '88b 'P  )88b  d88' '888     d88(  "8  888P"Y88b  
 888888.    888   888  .oP"888  888   888     '"Y88b.   888   888  
 888 '88b.  888   888 d8(  888  888   888 .o. o.  )88b  888   888  
o888o o888o 'Y8bod8P' 'Y888""8o 'Y8bod88P Y8P 8""888P' o888o o888o 
..    .-.. --- ...- .    -.-- --- ..- 
`;

GREETING=`${BANNER}

Type 'help' to see the list of commands.`;


LOGIN_BANNER=`${BANNER}

enter "auth" to bring forward the session authenticator interface,
enter "guest" to take a test drive in guest-mode, 
or, enter a stamped login token.

`;


CONTACT_CARD=`
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
         *@@@@@@@@@@*    *@@@@@@@          @@@@@@@@@@&           |  TIP JAR 
            @@@@@@@@@@@  @@@@@@@/       #@@@@@@@@@@              |  <u><a href="${config.tip_jar.github}" target="_blank">${config.tip_jar.github}</a></u>
               @@@@@@@% /@@@@@@@        *@@@@@@@&                | ﴑ <u><a href="https://btc.ecoincore.com/address/bc1qvdwh05qzmp2va220tzzdeaarseqgh9dty5zxaq" target="_blank">Bitcoin - bc1qvdwh05qzmp2va220tzzdeaarseqgh9dty5zxaq</a></u>
                 @@@    @@@@@@@            @@@                   | Ł <u><a href="https://ltc.ecoincore.com/address/LZ9ThKdpyQoBoCcnSeytiXVZ7BJZ6aUgDw" target="_blank">Litecoin - LZ9ThKdpyQoBoCcnSeytiXVZ7BJZ6aUgDw</a></u>
                       %@@@@@@@                                  | Ð <u><a href="https://doge.ecoincore.com/address/DRtawKXMGyynB5Lr5uStHJNUA4dvQWtiWe" target="_blank">Dogecoin - DRtawKXMGyynB5Lr5uStHJNUA4dvQWtiWe</a></u>
                       @@@@@@@                                   | ε <u><a href="https://cdn.ecoincore.com/address/CduFQRWgT757NGcLbUJeL731RNZmz7PkCo" target="_blank">Canada eCoin - CduFQRWgT757NGcLbUJeL731RNZmz7PkCo</a></u>
`;


Template.registerHelper('LOGIN_BANNER', () => {
	return LOGIN_BANNER;	
});

Template.registerHelper('LOGIN_PROMPT', () => {
	return LOGIN_PROMPT;	
});