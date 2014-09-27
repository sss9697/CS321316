function compilef()
{
	//this following functions are just for testing
	//this function is suppose to call compilecommand which will compile the command to a string or array and return
	//then it will call the player window to execute the commands
	//similarly, the save button should call compilecommand then call its DB function to post.
	
	var numberofcommand = $("#droppable").children().length;
	var test2 = $("#droppable > input").attr("id");
	var test2 = $("#droppable > li").attr("id");
	
	alert("First command is: "+test2 + " " + test+ " times");
}
