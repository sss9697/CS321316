$( document ).on( 'keydown', function ( e ) 
{
    if ( e.keyCode === 27 ) { // ESC
        $( '#saveDiv' ).hide();
    }
});

//convert array into string for DB Storage
function convertCommand(input)
{
	var returnString = "";
	
	for(i = 0; i < input.length ; i++)
	{
		returnString += input[i] + " ";
	}
	
	return returnString;
}

function saveMove(moveset)
{
	$.ajax(
	{
		url : "https://php-cs321316.rhcloud.com/index.php/vide/insert_move",
		type : 'POST',
		datatype : "json",
		data : {"ID":uID, "moveset":moveset},
		success : function()
		{
			alert("Account created!!");
		},
		error : function(jqXHR, textStatus, errorThrown)
		{
			alert(textStatus + " " + errorThrown + " " + jqXHR);
		}
	});
}

function saveok()
{
	if ($("#savename").val().length > 0) 
	{
		$("saveDivErr").hide();
		alert("SAVENAME: " + $("#savename").val());
	}
	else
	{
		$("saveDivErr").show();
	}
}

function savef()
{
	var commands = compileCommand();
	var saveString = convertCommand(commands);
	
	if(saveString.charAt(0) == "E")
	{
		alert("Move list is empty");
		$('#saveDiv').hide();
	}
	else
	{
		$('#saveDiv').fadeIn(500);
	}
	//alert(uID);
	//console.log(saveString);
}
