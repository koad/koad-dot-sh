let lastCommandIndex = 0;

Template.Prompt.helpers({
	timestamp(date){
	if(!date){
		date = new Date();
		tick1s.depend();
	}
	let stamp = "";
	let dateToStamp = new Date(date);
	stamp = stamp + dateToStamp.getFullYear()
	stamp = stamp + ":" + ('0' + Number(dateToStamp.getMonth()+1)).slice(-2);
	stamp = stamp + ":" + ('0' + Number(dateToStamp.getDate())).slice(-2);
	stamp = stamp + ":" + ('0' + Number(dateToStamp.getHours())).slice(-2);
	stamp = stamp + ":" + ('0' + Number(dateToStamp.getMinutes())).slice(-2);
	stamp = stamp + ":" + ('0' + Number(dateToStamp.getSeconds())).slice(-2);
	return stamp;
	}
});

Template.Prompt.onRendered(function () {

	// ensure we are scrolled down with the prompt visable
	document.querySelector(".interface-container").scrollTo(0, document.querySelector(".interface-container").scrollHeight);

	// ensure we are focused within the prompt
	document.getElementById("prompt").focus();
	
});


Template.input.helpers({
	environment() {
		return {
			username: "guest",
			hostname: "wonderland",
			entity:   Session.get("entity"),
			location: "~"
		};
	},
	timestamp(date){
		if(!date){
			date = new Date();
			tick1s.depend();
		}
		let stamp = "";
		let dateToStamp = new Date(date);
		stamp = stamp + dateToStamp.getFullYear()
		stamp = stamp + ":" + ('0' + Number(dateToStamp.getMonth()+1)).slice(-2);
		stamp = stamp + ":" + ('0' + Number(dateToStamp.getDate())).slice(-2);
		stamp = stamp + ":" + ('0' + Number(dateToStamp.getHours())).slice(-2);
		stamp = stamp + ":" + ('0' + Number(dateToStamp.getMinutes())).slice(-2);
		stamp = stamp + ":" + ('0' + Number(dateToStamp.getSeconds())).slice(-2);
		return stamp;
	}
});

lastCommandIndex = 0;
Template.input.events({
  'click .toggle-binary'() {
  },
  'keypress .command-input': async function(event) {

		event.stopImmediatePropagation();

    // if (event.key === 'ArrowUp') {
    //   event.preventDefault();
    //   if (!commands.length) {
    //     return;
    //   }
    //   lastCommandIndex = lastCommandIndex + 1;
    //   if (index <= commands.length) {
    //     setLastCommandIndex(index);
    //     setCommand(commands[commands.length - index]);
    //   }
    // }

    // if (event.key === 'ArrowDown') {
    //   event.preventDefault();
    //   if (!commands.length) {
    //     return;
    //   }
    //   lastCommandIndex = lastCommandIndex - 1;
    //   if (index > 0) {
    //     setLastCommandIndex(index);
    //     setCommand(commands[commands.length - index]);
    //   } else {
    //     setLastCommandIndex(0);
    //     setCommand('');
    //   }
    // }

		if (event.key === 'Enter') {
			event.preventDefault();
			console.log('Enter');

			const unparsed = event.currentTarget.value;
			const args = unparsed.split(' ');
			const command = args.shift();

			let state;
			let entity = Session.get('entity');
			let history = Session.get('entries');
			let user = Session.get('user');
			let output = `${command}: ${COMMAND_NOT_FOUND}`

			event.currentTarget.value = "";

			if(command == "exit"){
				Session.set('entries', null);
				Session.set('entity', null);
				Session.set('user', null);
				return;
			} else if(command == "clear"){
				return Session.set('entries', null);
			} else if(command == ""){
				state = {
					icon: '❯',
					class: 'green'
				}
				output = ""
			} else if(commands[command]){
				state = {
					icon: '❯',
					class: 'green'
				}
				output = await commands[command](args);
			} else state = {
				icon: '✖',
				class: 'red'
			};

			if(!history) history = []
			Session.set('entries', [...history, {
				time: new Date(),
				command: unparsed,
				location: '~',
				username: user,
				hostname: 'wonderland',
				entity, state, output
			}]);

		}
	},
});
