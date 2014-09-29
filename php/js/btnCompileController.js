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
			return [3, i+1];
		}
	}
	
	if(check > 0)
		return [1, 0];
	else if(check < 0)
		return [2, input.length];
	else
		return [0,0];	
}

//remove the loop and expand out the commands
//this is a recursive function that will open a new instance of itself everytime a loop open is found
//the new instance will then add its own set of commands into its own output
//on loop close, the function will loop through and expand the array, once return
//the loop open function will carry on and add what is returned into its original array, as well as forwarding its i value to the latest
function expandCommand(input, start)
{

	var temp = [];
	for(i = start ; i < input.length ; i ++)
	{
		if(input[i].charAt(0) == "O")
		{
			var temp2 = expandCommand(input, i + 1); 
			for ( j = 0 ; j < temp2.length - 1 ; j++)
			{
				temp[temp.length] = temp2[j];
			}
			
			var newPosition = temp2[temp2.length - 1];
			temp2.splice(-1);
			i = newPosition;
		}
		
		else if(input[i].charAt(0) == "C")
		{
			var newInput = input[i].substring(1);
			var t = parseInt(newInput)
			var tempOutput = [];
			
			for ( j = 0 ; j < t ; j++)
			{
				for( k = 0 ; k < temp.length; k++)
				{
					tempOutput[tempOutput.length] = temp[k];
				}
			}
			tempOutput[tempOutput.length] = i;
			return tempOutput;
		}
		else
		{
			temp[temp.length] = input[i];
		}
		
	}
	return temp;
}

function compilef()
{	
	var command = compileCommand();
	console.log(command);
	
	var check = validateCommand(command);
	
	if(check[0] == 1)
	{
		alert("Too much open brackets, remove one of them");
	}
	else if(check[0] == 2)
	{
		alert("Too much close brackets, remove it at line number " + check[1]);
	}
	else if (check[0] == 3)
	{
		alert("Closed bracket before open brackets at line number " + check[1]);
	}
	else
	{
		var expanded = expandCommand(command, 0);
		console.log(expanded);
		alert(expanded);
	}
}
