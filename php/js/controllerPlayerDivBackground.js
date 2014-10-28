function updateBackground(value)
{
	$('#playerdiv').css('background-color', value);
	$('.backgroundSelected').css('background-color', value);
	if(value == "#000000" || value == "#0000ff"){
		$('.backgroundSelected').css('color', "#ffffff");
	}
	else{
		$('.backgroundSelected').css('color', "#000000");
	}
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
	if(value.value == "#000000" || value.value == "#0000ff"){
		$(value).css('color', "#ffffff");
	}
	else{
		$(value).css('color', "#000000");
	}
	//$('select[id^="movebackgroundlist"] option:selected').attr("selected",null);
	//$('select[id^="movebackgroundlist"] option[value="' + value.value + '"]').attr("selected","selected");
	//$(value).val(value.value);
	//the above works but the value is not read into the compile and the text dont change
}

function changePlayerBackground(move, delayTime)
{
	console.log(delayTime);
	
	if(delayTime < 0)
		delayTime = 0;
		
	var value = move.substring(1);
	$('#playerdiv').delay(delayTime).css({opacity: 1.0}).animate({'background-color': value}, 500);
}

function toggleGridf(state)
{
	if(state.value == "show")
	{
		$('#playerdiv').css("background-image", "url('../img/grid.png')"); 
		state.value = "hide";
	}
	else
	{
		$('#playerdiv').css("background-image", ""); 
		state.value = "show";
	}
}

function rgb2hex(rgb) {
    if ((/^#[0-9A-F]{6}$/i.test(rgb)) || rgb == null || rgb == "") return rgb;

    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}