
chrome.runtime.onMessage.addListener(function(msg, sender, sendResponse) {
	document.addEventListener('DOMNodeInserted', function () {
		
		var spans = document.getElementsByTagName('span');
		for(var i = 0; i < spans.length; i++)
		{
			var s = spans[i].innerHTML;
			if(s == "おすすめユーザー" || s == "おすすめトピック")
			{
				var e = spans[i].parentNode.
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
		
		var times = document.getElementsByTagName('time');
		for(var i = 0; i < times.length; i++)
		{
			if(times[i].dateSuccess) continue;
			
			var d = new Date(times[i].dateTime);
			times[i].textContent =
				("0000" + d.getFullYear()).slice(-4)  + "/" +
				("00" + (d.getMonth() + 1)).slice(-2) + "/" +
				("00" + d.getDate()).slice(-2)        + " " +
				("00" + d.getHours()).slice(-2)       + ":" +
				("00" + d.getMinutes()).slice(-2)     + ":" +
				("00" + d.getSeconds()).slice(-2);
			times[i].dateSuccess = true;
		}
	});
});
