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

function savef()
{
	var commands = compileCommand();
	var saveString = convertCommand(commands);
	
	$('#saveDiv').fadeIn(500);
	//alert(uID);
	//console.log(saveString);
	
	
}
