
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
	document.addEventListener('DOMNodeInserted', function () {
		var xs = document.getElementsByTagName('span');
		
		for(var i = 0; i < xs.length; i++)
		{
			var s = xs[i].innerHTML;
			if(s.endsWith('がフォローしています') ||
				s.endsWith('がフォロー'))
			{
				xs[i].parentNode.
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
