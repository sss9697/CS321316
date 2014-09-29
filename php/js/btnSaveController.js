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

function updateList()
{
	$.ajax(
	{
		url : "https://php-cs321316.rhcloud.com/index.php/vide/get_move",
		type : 'POST',
		datatype : "json",
		data : {"PID":uID},
		success : function(moves)
		{
			for( v = 0 ; v < moves.length ; v ++)
			{
				$("#loadList").append($('<option>').text(moves[v].Name).attr('value', moves[v].Moveset));
			}
		},
		error : function(jqXHR, textStatus, errorThrown)
		{
			alert(textStatus + " " + errorThrown + " " + jqXHR);
		}
	});
}

function saveMove()
{
	var commands = compileCommand();
	var saveString = convertCommand(commands);
	$.ajax(
	{
		url : "https://php-cs321316.rhcloud.com/index.php/vide/insert_move",
		type : 'POST',
		datatype : "json",
		data : {"PID":uID, "Name":$("#savename").val(), "Moveset":saveString},
		success : function()
		{
			alert($("#savename").val()+ " Saved");
			updateList();
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
		$('#saveDiv').hide();
		saveMove();
	}
	else
	{
		alert("A name is required to save");
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
