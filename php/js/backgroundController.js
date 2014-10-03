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
	$('select[id^="movebackgroundlist"] option:selected').attr("selected",null);
	$('select[id^="movebackgroundlist"] option[value="' + value.value + '"]').attr("selected","selected");
}

function changePlayerBackground(move, delayTime)
{
	console.log(delayTime);
	
	if(delayTime < 0)
		delayTime = 0;
		
	var value = move.substring(1);
	$('#playerdiv').delay(delayTime).css({opacity: 1.0}).animate({'background-color': value}, 500);
}