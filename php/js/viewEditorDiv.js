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
			if($( this ).find( "#movebackgroundlist" ).attr("id") == "movebackgroundlist"){
				$( this ).find( "#movebackgroundlist" ).attr("id", "newmovebackgroundlist"+bIndex);
				var newId = "#newmovebackgroundlist"+bIndex;
				var rgb = (ui.draggable).clone().find("#movebackgroundlist").css( "background-color" );
				console.log("a"+rgb+"a");
				var newColor = rgb2hex(rgb);
				$(newId).val(newColor);
				$(newId).on('change', function() 
				{
					processCommand("defaultBackgroundCom", this);
				});
				bIndex++;
			}
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