
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
	document.addEventListener('DOMNodeInserted', function () {
		var xs = document.getElementsByTagName('span');
		
		for(var i = 0; i < xs.length; i++)
		{
			var s = xs[i].innerHTML;
			if(s == "おすすめユーザー" || s == "おすすめトピック")
			{
				var e = xs[i].parentNode.
					parentNode.
					parentNode.
					parentNode.
					parentNode;
				e.style.display = 'none';
				var nexte = e.nextElementSibling;
				while((nexte && "innerText" in nexte ? nexte.innerText : "") != "")
				{
					nexte.style.display = 'none';
					nexte = nexte.nextElementSibling;
				}
			}
		}
	});
});
