
commands["alice"] = function(args){
  Session.set("entity", 'alice');
  return `alice is onboard, dis environment loaded and is ready for action.`;
};

commands["astro"] = function(args){
  Session.set("entity", 'astro');
  return `astro is onboard, it's environment loaded and is ready for action.`;
};

commands["bob"] = function(args){
  Session.set("entity", 'bob');
  return `bob is onboard, her environment loaded and is ready for action.`;
};
