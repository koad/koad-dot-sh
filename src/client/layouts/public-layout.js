
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
