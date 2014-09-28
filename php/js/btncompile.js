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

//validate user input command, the loops, if OPEN, check +1, if close Check -1, at the end must be 0
//At anytime if check <0, return error
//0 = ok, 1 = too much open, 2 = too much close, 3 = close before open
function validateCommand(input)
{
	var check = 0;
	
	for(i = 0; i < input.length ; i++)
	{
		if(input[i].charAt(0) == "O")
		{
			check += 1;
		}
		if(input[i].charAt(0) == "C")
		{
			check -= 1;
		}
		
		if(check < 0 && i < input.length -1)
		{
			return 3;
		}
	}
	
	if(check > 0)
		return 1;
	else if(check < 0)
		return 2;
	else
		return 0;	
}

//remove the loop and expand out the commands
function expandCommand()
{
}


function compilef()
{	
	var command = compileCommand();
	console.log(command);
	
	var check = validateCommand(command);
	
	if(check == 0)
		alert("OK Commands");
	else if(check == 1)
		alert("Too much open brackets");
	else if(check == 2)
		alert("Too much close brackets");
	else
		alert("Closed bracket before open brackets");
}
