function changePlayerCommand(move, delayTime, flag)
{
	var value = move.substring(1);
	
	if(flag == 0)
	{
		$("#sprite").delay(delayTime).fadeOut(500);
		$("#sprite2").attr("src","img/"+value+".gif");
		$("#sprite2").delay(delayTime + 500).fadeIn(0);
	}
	else
	{
		$("#sprite2").delay(delayTime).fadeOut(500);
		$("#sprite").attr("src","img/"+value+".gif");
		$("#sprite").delay(delayTime + 500).fadeIn(0);
	}

	//$('#playerdiv').delay(delayTime).css({opacity: 1.0}).animate({'background-color': value}, 500);
}
function defaultCharf(value)
{
	$.ajax(
	{
		url : "https://php-cs321316.rhcloud.com/index.php/vide/update_character",
		type : 'POST',
		datatype : "json",
		data : {"PID":uID, "DefaultCharacter":value},
		success : function()
		{
			$("#placeholderSprite").attr("src","img/"+value+".gif");
			$("#sprite").attr("src","img/"+value+".gif");
		},
		error : function(jqXHR, textStatus, errorThrown)
		{
			alert(textStatus + " " + errorThrown + " " + jqXHR);
		}
	});
}
