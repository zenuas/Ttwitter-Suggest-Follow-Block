
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
	document.addEventListener('DOMNodeInserted', function () {
		var xs = document.getElementsByTagName('span');
		
		for(var i = 0; i < xs.length; i++)
		{
			if(xs[i].innerHTML.endsWith('がフォローしています'))
			{
				xs[i].parentNode.
					parentNode.
					parentNode.
					parentNode.
					parentNode.
					parentNode.
					parentNode.
					parentNode.
					parentNode.style.display = 'none';
			}
		}
	});
});
