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
	
	//compile button
	$( "#compile-btn" ).button().on( "click", function() 
	{
		processCommand("compile");
	});
	
	$( "#save-btn" ).button().on( "click", function() 
	{
		processCommand("save");
	});
	
	$( "#save-ok-btn" ).button().on( "click", function() 
	{
		processCommand("saveok");
	});
	
	
});