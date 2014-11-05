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
					numberTimes = $(this).find(".backgroundSelectedCom").val();
					//change numberTimes into its own value which is color code
				break;
			case "movechangechar": compileString += "A";
					numberTimes = $(this).find("#defaultCharListCom").val();
					//change numberTimes into its own value, which is a number
				break;
			case "moveifopen": compileString += "{";
					numberTimes = $(this).find("#moveifopenfirstlist").val() + $(this).find("#moveifopensecondlist").val() + $(this).find("input").val();
					//first char is variable, 2nd char is boolean comparator, after that all inputs
				break;
			
			case "moveifelse": compileString += "|";
				break;
				
			case "moveifclose": compileString += "}";
				break;
				
			case "movevariable": var tempVar =  $(this).find("#movevariablefirstlist").val();
				if (tempVar == "i")
					compileString += "i";
				else if(tempVar == "j")
					compileString += "j";
				else
					compileString += "k";
					
				numberTimes = $(this).find("#movevariablesecondlist").val()  + $(this).find("input").val();
				//this is for set variable, so first char will be variable name, number times will be value
				break;
			
			case "movewhileopen": compileString += "[";
				numberTimes = $(this).find("#movewhileopenfirstlist").val() + $(this).find("#movewhileopensecondlist").val() + $(this).find("input").val();
				break;
			
			case "movewhileclose": compileString += "]";
				break;
			
			case "moveforopen": compileString += "(";
				compileString += $(this).find("#moveforopenfirstlist").val() + $(this).find("#edittxt").val();
				commands[commands.length] = compileString;
				
				compileString = "(";
				compileString += $(this).find("#moveforopensecondlist").val() + $(this).find("#edittxt2").val();
				commands[commands.length] = compileString;
				
				compileString = "("; 
				numberTimes = $(this).find("#moveforopenthirdlist").val() + $(this).find("#edittxt3").val();
				break;
			
			case "moveforclose": compileString += ")";
				break;
				
			default: compileString += "E";
		}
		
		compileString += numberTimes;
		commands[commands.length] = compileString;
	});
	return commands;
}

//validate user input command, the loops, if OPEN, check +1, if close Check -1, at the end must be 0
//At anytime if check <0, return error
//0 = ok, 1 = too much open, 2 = too much close, 3 = close before open
function validateCommand(input, type)
{
	var check = 0;
	var elseCheck = 0;
	var open;
	var close; 
	
	switch(type)
	{
		case 0:	open = "O";	close = "C"; break;
		case 1:	open = "{";	close = "}"; break;
		case 2:	open = "[";	close = "]"; break;
		case 3:	open = "(";	close = ")"; break;
	}
	
	for(i = 0; i < input.length ; i++)
	{
		if(input[i].charAt(0) == open)
		{
			check += 1;
		}
		if(input[i].charAt(0) == close)
		{
			if(close == ")")
				check -= 3;
			else
				check -= 1;
		}
		
		if(type == 1)
		{
			if(input[i].charAt(0) == "|")
			{
				if(check == 0) //else before if
					return [4, i+1];
			}
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

function validateVariables(input)
{
	var checkI = 0;
	var checkJ = 0;
	var checkK = 0;
	
	for(i = 0; i < input.length ; i++)
	{
		if(checkI == 1 && checkJ == 1 && checkK == 1)
		{
			break;
		}
		
		//check if variables has been initialized
		if(input[i].charAt(0) == "i")
		{
			if(input[i].charAt(1) == "=")
			{
				checkI = 1;
			}
			else
			{
				if(checkI == 0)
					return [1, i];
			}
		}
		else if(input[i].charAt(0) == "j")
		{
			if(input[i].charAt(1) == "=")
			{
				checkJ = 1;
			}
			else
			{
				if(checkJ == 0)
					return [2, i];
			}
		}
		else if(input[i].charAt(0) == "k")
		{
			if(input[i].charAt(1) == "=")
			{
				checkK = 1;
			}
			else
			{
				if(checkK == 0)
					return [3, i];
			}
		}
		
		//check if variables are used, variables also have to be declared before it is used
		else if(input[i].charAt(0) == "{" || input[i].charAt(0) == "[" || input[i].charAt(0) == "U" || input[i].charAt(0) == "D" || input[i].charAt(0) == "L" || input[i].charAt(0) == "R")
		{
			if(input[i].charAt(1) == "i")
			{
				if(checkI == 0)
					return [1, i];
			}
			if(input[i].charAt(1) == "j")
			{
				if(checkJ == 0)
					return [2, i];
			}
			if(input[i].charAt(1) == "k")
			{
				if(checkK == 0)
					return [3, i];
			}
		}
	}
	return [0,0];
	//if variables are used and not init, return error, else all ok
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
			
			//check for t = 0, if t == 0, do a forever loop
			if( t == 0 )
			{
				for ( j = 0 ; j < 1 ; j++)
				{
					tempOutput[tempOutput.length] = "F0";
					for( k = 0 ; k < temp.length; k++)
					{
						tempOutput[tempOutput.length] = temp[k];
					}
					tempOutput[tempOutput.length] = "F1";
				}
			}
			else
			{
				for ( j = 0 ; j < t ; j++)
				{
					for( k = 0 ; k < temp.length; k++)
					{
						tempOutput[tempOutput.length] = temp[k];
					}
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
	
	var check = validateCommand(command, 0);
	
	if(check[0] == 1)
		alert("Too much \"OPEN LOOP\" command");
	else if(check[0] == 2)
		alert("Too much \"CLOSE LOOP\" command, remove it at line number " + check[1]);
	else if (check[0] == 3)
		alert("\"CLOSE LOOP\" before \"OPEN LOOP\" at line number " + check[1]);
	else
	{
		check = validateCommand(command, 1);
	
		if(check[0] == 1)
			alert("Too much \"IF OPEN\" command");
		else if(check[0] == 2)
			alert("Too much \"END IF\" command, remove it at line number " + check[1]);
		else if (check[0] == 3)
			alert("\"END IF\" before \"IF OPEN\" at line number " + check[1]);
		else if(check[0] == 4)
			alert("\"ELSE\" before \"IF OPEN\" at line number " + check[1]);
		else
		{
			check = validateVariables(command);
	
			if(check[0] == 1)
				alert("Variable 'i' used before declaration at line number " + check[1]);
			else if(check[0] == 2)
				alert("Variable 'j' used before declaration at line number " + check[1]);
			else if (check[0] == 3)
				alert("Variable 'k' used before declaration at line number " + check[1]);
			else
			{
				check = validateCommand(command, 2);
	
				if(check[0] == 1)
					alert("Too much \"WHILE OPEN\" commands");
				else if(check[0] == 2)
					alert("Too much \"END WHILE\" commands, remove it at line number" + check[1]);
				else if (check[0] == 3)
					alert("\"END WHILE\" before \"WHILE OPEN\" at line number " + check[1]);
				else
				{
					check = validateCommand(command, 3);
	
					if(check[0] == 1)
						alert("Too much \"FOR OPEN\" commands");
					else if(check[0] == 2)
						alert("Too much \"END FOR\" commands, remove it at line number" + check[1]);
					else if (check[0] == 3)
						alert("\"END FOR\" before \"FOR OPEN\" at line number " + check[1]);
					else
					{
						var expanded = expandCommand(command, 0);
						
						console.log(expanded.length);
						takeSS(); // Initial position
						executeCommand(expanded);
						window.setTimeout(takeSS,500);
						window.setTimeout(takeSS,1000);
						window.setTimeout(takeSS,1500);
					}
				}
			}
		}
	}
}

function takeSS() {
	html2canvas($("#playerdiv"), {
		onrendered: function(canvas) {
			theCanvas = canvas;
			document.body.appendChild(canvas);

			canvas.toBlob(function(blob) {
   				saveAs(blob, "Dashboard.png"); 
            });
		}
});
}
