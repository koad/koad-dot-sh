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

Template.input.events({
	'click .toggle-binary'() {
	},
	'keypress .command-input': async function(event) {

		event.stopImmediatePropagation();

		if (event.key === 'Enter') {
			event.preventDefault();

			const unparsed = event.currentTarget.value;
			const args = unparsed.split(' ');
			const command = args.shift();

			let state;
			let entity = Session.get('entity');
			let history = Session.get('entries');
			let user = Session.get('user');
			let output = `${command}: ${COMMAND_NOT_FOUND}`

			event.currentTarget.value = "";
			lastCommandIndex = 0;

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
				command: unparsed.trim(),
				location: '~',
				username: user,
				hostname: 'wonderland',
				entity, state, output
			}]);

		}
	},
});

// we attach to the window's events directly to override the browser's natural functions.
window.addEventListener("keydown", (e) => {

	// ensure we are scrolled down with the prompt visable
	document.querySelector(".interface-container").scrollTo(0, document.querySelector(".interface-container").scrollHeight);

	// ensure we are focused within the prompt
	document.getElementById("prompt").focus();

	// 114
	if (event.keyCode === 114 ) {
		event.preventDefault();
	}

	// ctrl-f
	// prevent the site from being seachable via ctrl-f
	if (event.ctrlKey && e.keyCode === 70) {
		event.preventDefault();
	}

	// ctrl-l
	// prevent focusing the location bar via ctrl-l, and clear the shell
	if (event.ctrlKey && e.keyCode === 76) {
		event.preventDefault();
		Session.set('entries', null);
		document.getElementById("prompt").value = "";
	}

	// tab
	// complete the command if there is only one command option left
	if (event.key === 'Tab') {
		event.preventDefault();
		let input = e.target.value;
		if(input) {

			const allCommands = ['clear', 'exit', ...Object.keys(commands)];
			const result = allCommands.filter((entry) => {
				if(entry.startsWith(input)) return true;
			});

			if (result.length === 1)  document.getElementById("prompt").value = `${result[0]} `;

			// TODO:  if many results: find the most amount of matching chars and return that
		};
	};

	if (event.key === 'ArrowUp') {
		event.preventDefault();
		let history = Session.get('entries');
		if (!history.length || history.length == lastCommandIndex + 1  ) return;
		lastCommandIndex = lastCommandIndex + 1;
		document.getElementById("prompt").value = `${history[history.length - lastCommandIndex].command}`;
	}

	if (event.key === 'ArrowDown') {
		event.preventDefault();
		let history = Session.get('entries');
		if (lastCommandIndex > 0) lastCommandIndex = lastCommandIndex - 1;
		if (lastCommandIndex > 0) {
			document.getElementById("prompt").value = `${history[history.length - lastCommandIndex].command}`;
		} else document.getElementById("prompt").value = ``;
	}

});
