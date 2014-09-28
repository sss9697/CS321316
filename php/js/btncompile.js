//change user input command into an array
function compileCommand()
{
	var commands = [];
	$('#droppable').children().each(function () 
	{
		var compileString = "";
		var commandType = $(this).attr("id");
		var numberTimes = $(this).find("input").val();
		
		if(typeof numberTimes === "undefined")
		{
			numberTimes = 0;
		}
		
		switch(commandType)
		{
			case "moveleft": compileString += "L";
				break;
			case "moveright": compileString += "R";
				break;
			case "moveup": compileString += "U";
				break;
			case "movedown": compileString += "D";
				break;
			case "moveloopo": compileString += "O";
				break;
			case "moveloopc": compileString += "C";
				break;
			case "movesetx": compileString += "X";
				break;
			case "movesety": compileString += "Y";
				break;
			case "movechartoggle": compileString += "T";
				break;
			case "movebackground": compileString += "B";
				break;
			case "movechangechar": compileString += "A";
				break;
			default: compileString += "U";
		}
		
		compileString += numberTimes;
		commands[commands.length] = compileString;
	});
	return commands;
}

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

//validate user input command, the loops
function validateCommand()
{
}

//remove the loop and expand out the commands
function expandCommand()
{
}


function compilef()
{	
	var command = compileCommand();
	console.log(command);
	
	for(i = 0; i < command.length ; i++)
	{
		console.log(command[i]);
	}
	
	var r = convertCommand(command);
	console.log(r);
	//convertCommand(command);
}
