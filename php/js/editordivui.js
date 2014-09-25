$(function() 
{
	$( "#movelist" ).accordion(
	{
		heightStyle: "content"
	});
	$( "li", "#movelist" ).draggable(
	{
		appendTo: "body",
		helper: "clone",
		revert: "invalid",
		cursor: "move"
	});
	
	$( "#editorspace ul" ).droppable(
	{
		activeClass: "ui-state-default",
		hoverClass: "ui-state-hover",
		accept: ":not(.ui-sortable-helper)",
		drop: function( event, ui ) 
		{
			$( this ).find( ".placeholder" ).remove();
			//$( "<li class=\"added\" id=\"added\" ></li>" ).text( ui.draggable.text() ).appendTo( this );
			$(this).append($(ui.helper).clone());
		}
	});
	
	$( "#clear-btn" ).button().on( "click", function() 
	{
		$("#editorspace ul").find(".added").remove();
		$( "<li class=\"placeholder\"></li>").text("drag command here").appendTo("#editorspace ul");
	});
});