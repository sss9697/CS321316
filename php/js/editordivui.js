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
		$(this).find(".added").remove();
		$( "<li class=\"placeholder\"></li>").text("drag command here").appendTo(this);
	});
});