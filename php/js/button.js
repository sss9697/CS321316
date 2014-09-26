$(function()
{
	//logout button
	$("#logout-btn").button().on("click", function()
	{
		processCommand("logout");
	});
	
	//clear button
	$( "#clear-btn" ).button().on( "click", function() 
	{
		processCommand("clear");
	});
});