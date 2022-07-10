// Bring the user in as a guest, set the greeting and load alice.
Meteor.startup(()=>{
	Session.set('entries', [{output:GREETING}]);
	Session.set("entity", 'alice');
	Session.set("user", 'guest');
});
