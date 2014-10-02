function updateBackground(value)
{
	$('#playerdiv').css('background-color', value);
	$('.backgroundSelected').css('background-color', value);
}

function defaultBackgroundf(value)
{
	$.ajax(
	{
		url : "https://php-cs321316.rhcloud.com/index.php/vide/update_background",
		type : 'POST',
		datatype : "json",
		data : {"PID":uID, "DefaultBackground":value},
		success : function()
		{
			updateBackground(value);
		},
		error : function(jqXHR, textStatus, errorThrown)
		{
			alert(textStatus + " " + errorThrown + " " + jqXHR);
		}
	});
}

function defaultBackgroundCom(value)
{
	$(value).css('background-color', value.value);
}

function changePlayerBackground(move)
{
	console.log(move);
	var value = parseInt(move.substring(1));
	$('#playerdiv').css('background-color', value);
}