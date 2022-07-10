
// if mr.user doesnt have anything highlighted, then bring focus back to the input prompt.
Template.PublicLayout.events({
	'click .btn-focus-on-prompt'(event) {

		var highlightedText = "";
		if (typeof window.getSelection != "undefined") {
			highlightedText = window.getSelection().toString();
		} else if (typeof document.selection != "undefined" && document.selection.type == "Text") {
			highlightedText = document.selection.createRange().text;
		};

		if(highlightedText === "") document.getElementById("prompt").focus();

	}
});


// we attach to the window's events directly to override the browser's natural functions.
window.addEventListener("keydown", (e) => {

	// ensure we are scrolled down with the prompt visable
	document.querySelector(".interface-container").scrollTo(0, document.querySelector(".interface-container").scrollHeight);

	// ensure we are focused within the prompt
	document.getElementById("prompt").focus();

	// 114
	if (e.keyCode === 114 ) {
		e.preventDefault();
	}

	// ctrl-f
	// prevent the site from being seachable via ctrl-f
	if (e.ctrlKey && e.keyCode === 70) {
		e.preventDefault();
	}

	// ctrl-l
	// prevent focusing the location bar via ctrl-l, and clear the shell
	if (e.ctrlKey && e.keyCode === 76) {
		e.preventDefault();
		Session.set('entries', null);
		document.getElementById("prompt").value = "";
	}

	// tab
	// complete the command if there is only one command option left
	if (e.key === 'Tab') {
		e.preventDefault();
		let input = e.target.value;
		if(input) {

			const allCommands = ['clear', ...Object.keys(commands)];
			const result = allCommands.filter((entry) => {
				if(entry.startsWith(input)) return true;
			});

			if (result.length === 1)  document.getElementById("prompt").value = `${result[0]} `;

		};
	};

});
