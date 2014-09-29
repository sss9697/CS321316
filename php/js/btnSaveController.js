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

function savef()
{
	var commands = compileCommand();
	var saveString = convertCommand(commands);
	alert(uID);
	console.log(saveString);
	
	
}
