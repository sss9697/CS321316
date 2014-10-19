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
	
	var bIndex = 0;
	$( "#editorspace ul" ).droppable(
	{
		activeClass: "ui-state-default",
		hoverClass: "ui-state-hover",
		accept: ".command",
		drop: function( event, ui ) 
		{			
			$( this ).find( ".placeholder" ).remove();
			//$( "<li class=\"added\" id=\"added\" ></li>" ).text( ui.draggable.text() ).appendTo( this );
			$(this).append($(ui.draggable).clone());
			$( this ).find( "#movebackgroundlist" ).attr("id", "newmovebackgroundlist"+bIndex);
			var test = "#newmovebackgroundlist"+bIndex;
			console.log((ui.draggable).clone());
			console.log((ui.draggable).clone().find("#movebackgroundlist"));
			console.log((ui.draggable).clone().find("#movebackgroundlist").val());
			$(test).on('change', function() 
			{
				processCommand("defaultBackgroundCom", this);
			});
			bIndex++;
			$("#editorspace .command").addClass("item");
			$(".item").removeClass("ui-draggable command");
	
		}
	});
	
	var sortableIn = 0;
	$("#editorspace ul" ).sortable(
	{
		placeholder: "ui-state-highlight",
		receive: function(event, ui)
		{
			sortableIn = 1;
		},
		over: function(event, ui)
		{
			sortableIn = 1;
		},
		out: function(event, ui)
		{
			sortableIn = 0;
		},
		beforeStop: function(event, ui)
		{
			if(sortableIn ==0)
			{
				ui.item.remove();
			}
		}
	});
});