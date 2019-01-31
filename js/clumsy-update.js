$(document).ready(function(){
	var githubAPI = "https://api.github.com/repos/loikein/loikein.github.io/commits?page=1&per_page=1";
	$("time.timeago").timeago();
	$.get(githubAPI, function(commit) {
		// console.log( commit);
		// console.log( "Time: " + commit[0].commit.committer.date );
		// console.log( "Message: " + commit[0].commit.message );
		// console.log( "URL: " + commit[0].html_url );
		$('#last-update').append( ': ' + ($.timeago(commit[0].commit.committer.date)));
		$('#last-update').after( 
			 '<div class="clumsy-update"><a href="' + commit[0].html_url + '" target="_blank">'
			+ '<pre>' + commit[0].commit.message + '</pre>'
			+ '</a></div>'
		);
	});
});