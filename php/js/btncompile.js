function compileCommand()
{
	$('#droppable').children().each(function () 
	{
		var commandType = $(this).attr("id");
		var numberTimes = $("#div > input").val();
		console.log("command is: "+commandType + " " + numberTimes+ " times");
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
	
	compileCommand();
}
