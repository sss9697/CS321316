  
function keydownFunction() {
 
  
	if(event.shiftKey)//Shift key is held down
	{
		// toggleFrontf("show");
		if(event.keyCode == 67)//c:compile
			compileCommand();
		if(event.keyCode == 76)//l:logout
			logoutf();
		if(event.keyCode == 84)//t:toggle grid
			toggleGridf(this);
	}
}

function keyupFunction() {
	// toggleFrontf("hide");
	
}

function toggleFrontf(state)
{
	if(state.value == "show")
	{
		$('#playerdiv').css("background-image", "url('../img/front.gif')"); 
		state.value = "hide";
	}
	else
	{
		$('#playerdiv').css("background-image", ""); 
		state.value = "show";
	}
}