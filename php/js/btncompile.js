function compileCommand()
{
	//at this point of time, even if the moveset is invalid, we just compile it as this function may be used to save to DB.
	//the validity check will be done at another part
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
		
		compileString += numberTimes + " ";
		//console.log("command is: "+commandType + " " + numberTimes+ " times");
		return compileString;
	});
}

function compilef()
{
	//this following functions are just for testing
	//this function is suppose to call compilecommand which will compile the command to a string or array and return
	//then it will call the expand command then the player window to execute the commands
	//similarly, the save button should call compilecommand then call its DB function to post.
	
	//after compile command, we will have an expand command function
	//expand command will remove all loops and expand them into multiple instance of instructions
	//Whether it should change up5 to up1 up1 up1 up1 up1 is still to be determined
	//expand should also change left-5 to right5 or down-7 to up7
	var numberofcommand = $("#droppable").children().length;
	var test = $("#droppable > li > div > input").val();
	var test2 = $("#droppable > li").attr("id");
	
	var test3 = $("#droppable > li:eq(1) > div > input").val();
	var test4 = $("#droppable > li").eq(1).attr("id");
	
	//alert("First command is: "+test2 + " " + test+ " times");
	//alert("Second command is: "+test4 + " " + test3+ " times");
	
	var command = compileCommand();
	console.log(command);
}
