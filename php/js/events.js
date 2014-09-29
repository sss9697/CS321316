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
	
	//save button
	$( "#save-btn" ).button().on( "click", function() 
	{
		processCommand("save");
	});
	
	//save button after name entering
	$( "#save-ok-btn" ).button().on( "click", function() 
	{
		processCommand("saveok");
	});
	
	//load dropdown list changed event
	$("#loadList").on('change', function() 
	{
		processCommand("load", this.value);
	});
	
	//toggle grid
	$( "#toggleGrid-btn" ).button().on( "click", function() 
	{
		processCommand("toggleGrid", this);
	});
	
});