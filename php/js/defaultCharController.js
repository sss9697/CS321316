function changePlayerCommand(move, delayTime)
{
	var value = move.substring(1);
	$("#sprite").attr("src","img/"+value+".gif");
	$("#sprite").delay(delayTime).fadeIn(500);
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
