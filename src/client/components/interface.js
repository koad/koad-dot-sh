
Template.interface.helpers({
	hasUsername() {
		return Session.get('user');
	}
});

Template.interface.events({
  'keypress .input-login'(event) {
		event.stopImmediatePropagation();
		if (event.key === 'Enter') {
			event.preventDefault();
			const command = event.currentTarget.value;
			event.currentTarget.value = "";
			if(command == "guest"){
				Session.set('entries', [{output:GREETING}]);
				Session.set('entity', 'alice');
				Session.set('user', 'guest');
				return 
			} else if(command == "auth"){
				return Router.go('/authorize')
			} else {
				return Meteor.loginWithToken(command);
			};

		}
	}
});
