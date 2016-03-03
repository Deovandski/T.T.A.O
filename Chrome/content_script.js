// Content Script is executed in every page....
chrome.storage.sync.get("canReplace", function(data) {
	if (!chrome.runtime.error) {
		if (data.canReplace) {
			//console.log("T.T.A.O. is active! Walking starts now...");
			walk(document.body);
		}
		else {
			//console.log("T.T.A.O. is idle");
		}
	}
	else {
		console.log("Something terrible happened which caused TTAO to stop working...");
	}
});

// Most of the following code has been extracted from http://is.gd/mwZp7E
function walk(node) {
	var child, next;
	if (node.tagName.toLowerCase() == 'input' || node.tagName.toLowerCase() == 'textarea'
	    || node.classList.indexOf('ace_editor') > -1) {
		return;
	}
	switch ( node.nodeType ) {
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) {
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}
function handleText(textNode) {
	var v = textNode.nodeValue;

	v = v.replace("Donald Trump", "Annoying Orange");
	v = v.replace("donald Trump", "Annoying Orange");
	v = v.replace("Donald trump", "Annoying Orange");
	v = v.replace("donald trump", "Annoying Orange");
	v = v.replace("DONALD J. TRUMP", "Annoying Orange");
	v = v.replace("Donald J. Trump", "Annoying Orange");
	v = v.replace("Make America Great Again!", "Make America Orange Again!");
	v = v.replace("trump", "annoying orange");
	v = v.replace("Trump", "Annoying orange");

	textNode.nodeValue = v;
}



