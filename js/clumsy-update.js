$(document).ready(function(){
	function insertAfter(el, referenceNode) {referenceNode.parentNode.insertBefore(el, referenceNode.nextSibling);}
	var githubAPI = "https://api.github.com/repos/loikein/loikein.github.io/commits?page=1&per_page=1";
	var lastUpdateTitle = document.getElementById("last-update").children[0];
	$.get(githubAPI, function(commit) {
		lastUpdateTitle.append( ': ' + ($.timeago(commit[0].commit.committer.date)));
		var updateMes = document.createElement('div');
		updateMes.className = 'clumsy-update';
		updateMes.innerHTML = '<a href="' + commit[0].html_url + '" target="_blank">'+ '<pre>' + commit[0].commit.message + '</pre>'+ '</a>';
		insertAfter(updateMes, lastUpdateTitle);
	});
});
