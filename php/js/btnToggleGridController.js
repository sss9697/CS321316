function toggleGridf(state)
{
	if(state.value == "show")
	{
		$('#divID').css("background-image", "url('../img/smallgrid.png')"); 
		state.value = "hide";
	}
	else
	{
		$('#divID').css("background-image", ""); 
		state.value = "show";
	}
}
