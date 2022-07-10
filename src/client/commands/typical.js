
commands["ls"] = function(args){
  if(args && args[0]){
    return `total 220
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

commands["help"] = function(args){
  console.log(args)
  if(args && args[0] == '--all') {
    return `showing all commands.
\n${Object.keys(commands).sort().join(', ')}\n
[tab]: command line completion.
[ctrl+l]/clear: clear terminal.\n
`;
} else return GUEST_HELP;
};

// Typical linux commands
commands["echo"] = function(args){
  return args.join(' ');
};

commands["whoami"] = function(args){
  return Session.get('user');
};
