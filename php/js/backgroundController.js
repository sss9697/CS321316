function updateBackground(value, param)
{
	if(param)
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
			updateBackground(this.value, true);
		},
		error : function(jqXHR, textStatus, errorThrown)
		{
			alert(textStatus + " " + errorThrown + " " + jqXHR);
		}
	});
}
