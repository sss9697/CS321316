//change user input command into a set of string command, used for DB as well as processing
function compileCommand()
{
	var compileString = "";
	$('#droppable').children().each(function () 
	{
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
		
		compileString += numberTimes + ",";
	});
	compileString.slice(0,-1);
	return compileString;
}

//convert string command into array (Might be optional)
function convertCommand(input)
{
	var jsonTemp = "["+input+"]";
	
	console.log("JSONTEMP: " + jsonTemp);
	var output = JSON.parse(jsonTemp);
	
	console.log(output[0]);
	console.log(output[1]);
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
	
	convertCommand(command);
}
