$(document).ready(function(){
	$("a").click(function (event) {
	    event.preventDefault();
	    window.location = $(this).attr("href");
	});	
});