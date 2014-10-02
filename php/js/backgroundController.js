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
			$('.backgroundSelected').css('background-color', value);
			$('#playerdiv').css('background-color', value);
		},
		error : function(jqXHR, textStatus, errorThrown)
		{
			alert(textStatus + " " + errorThrown + " " + jqXHR);
		}
	});
}
