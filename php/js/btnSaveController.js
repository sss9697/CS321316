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
	name = $("#name");
	
	
}

dialog = $( "#save-form" ).dialog(
	{
		autoOpen: false,
		height: 250,
		width: 550,
		modal: true,
		buttons: 
		{
			"Save moves": addUser,
			Cancel: function() 
			{
			dialog.dialog( "close" );
			}
		},
		close: function() 
		{
			form[ 0 ].reset();
			allFields.removeClass( "ui-state-error" );
		}
	});

form = dialog.find( "form" ).on( "submit", function( event ) 
{
	event.preventDefault();
	saveMove();
});

function savef()
{
	var commands = compileCommand();
	var saveString = convertCommand(commands);
	
	
	alert(uID);
	console.log(saveString);
	
	
}
