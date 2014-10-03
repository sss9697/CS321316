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
	
	//delete button
	$( "#delete-btn" ).button().on( "click", function() 
	{
		processCommand("deleteMove");
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
	
	//defaultBackground dropdown list changed event
	$("#defaultBackgroundList").on('change', function() 
	{
		processCommand("defaultBackground", this.value);
	});

	//toggle grid
	$( "#toggleGrid-btn" ).button().on( "click", function() 
	{
		processCommand("toggleGrid", this);
	});
	
	//toggle char
	$( "#toggleChar-btn" ).button().on( "click", function() 
	{
		processCommand("toggleChar");
	});
	
	//defaultBackground dropdown list changed event
	$("#movebackgroundlist").on('change', function() 
	{
		processCommand("defaultBackgroundCom", this);
	});
	
	//defaultCharacter dropdown list changed event
	$("#defaultCharList").on('change', function() 
	{
		processCommand("defaultChar", this);
	});
});