function compilef()
{
	//this following functions are just for testing
	//this function is suppose to call compilecommand which will compile the command to a string or array and return
	//then it will call the expand command then the player window to execute the commands
	//similarly, the save button should call compilecommand then call its DB function to post.
	
	//after compile command, we will have an expand command function
	//expand command will remove all loops and expand them into multiple instance of instructions
	//Whether it should change up5 to up1 up1 up1 up1 up1 is still to be determined
	var numberofcommand = $("#droppable").children().length;
	var test = $("#droppable > input").val();
	var test2 = $("#droppable > li").attr("id");
	
	alert("First command is: "+test2 + " " + test+ " times");
}
