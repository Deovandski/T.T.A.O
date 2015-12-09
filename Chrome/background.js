// Chrome Initial Setup to safeguard extension from undefined issues.
chrome.runtime.onInstalled.addListener(function() {
	chrome.storage.sync.set({'canReplace': true}, function() {
		if (chrome.runtime.error) {
			console.log("Runtime error on initial startup setup.");
		}
		else {
			console.log("Startup Settings Saved");
		}
	});
});