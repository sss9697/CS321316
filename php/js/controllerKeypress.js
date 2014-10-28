$( document ).on( 'keydown', function keydownFunction(e) {
	//if(e.shiftKey)//Shift key is held down
	{
		// toggleFrontf("show");
		if(e.keyCode === 67)//c:compile
			$("#keypress").css('color', "red");
		if(e.keyCode === 76)//l:logout
			$("#keypress").css('color', "green");
		if(e.keyCode === 84)//t:toggle grid
			$("#keypress").css('color', "yellow");
	}
});
  
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