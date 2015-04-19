function getCurrentUrl(callback) {
	var queryInfo = {
		active: true,
		currentWindow: true
	};

	chrome.tabs.query(queryInfo, function(tabs){
		var tab = tabs[0];
		var url = tab.url;

		callback(url);
	});

}

function renderStatus(statusText) {
  document.getElementById('currenturl').textContent = statusText;
}

document.addEventListener('DOMContentLoaded', function() { 
	getCurrentUrl( 
			function(url){
				renderStatus('The current url is: ' + url);
			}
		);
	
	}
); 
