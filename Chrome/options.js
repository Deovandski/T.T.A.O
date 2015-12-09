// Load options from Storage and set canReplace to the checkbox.

// JS and HTML hookup upon window load.
window.onload = function(){
	chrome.storage.sync.get(function(data) {
			if (!chrome.runtime.error) {
				document.getElementById('canReplaceToggle').checked = data.canReplace;
				console.log("Load complete! with checked as " + data.canReplace);
			}
			else {
				// Runtime Error....
				console.log('Runtime error on options loading...');
			}
		});
	document.getElementById('canReplaceToggle').addEventListener('click', storeOptions);
}


// Set options to Storage upon user interaction with the checkbox.
function storeOptions() {
	chrome.storage.sync.set({'canReplace': document.getElementById('canReplaceToggle').checked}, function() {
		if (chrome.runtime.error) {
			console.log("Runtime error on option saving.");
		}
		else {
			console.log("Option Saved");
		}
	});
}