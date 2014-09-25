$(function() 
{
	$( "#movelist" ).accordion(
	{
		heightStyle: "content"
	});
	$( "#movelist li" ).draggable(
	{
		appendTo: "body",
		helper: "clone"
	});
	$( "#editorspace ul" ).droppable(
	{
		activeClass: "ui-state-default",
		hoverClass: "ui-state-hover",
		accept: ":not(.ui-sortable-helper)",
		drop: function( event, ui ) 
		{
			$( this ).find( ".placeholder" ).remove();
			$( "<li class=\"added\" id=\"added\" ></li>" ).text( ui.draggable.text() ).appendTo( this );
		}
	});
	
	$( "#clear-btn" ).button().on( "click", function() 
	{
		$("#editorspace ul").find(".added").remove();
		$( "<li class=\"placeholder\"></li>").text("drag command here").appendTo("#editorspace ul");
	});
	
	$("#edittxt").keypress(function (e)
	{
		if(e.which != 8 && e.which != 0 && e.which != 45 && (e.which < 48 || e.which > 57))
		{
			$("#errmsg").html("Digits Only").show().fadeOut("slow");
		}
	});
});