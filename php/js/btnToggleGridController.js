function toggleGridf(state)
{
console.log(state.value);
	if(state.value == "show")
	{
		$('#playerdiv').css("background-image", "url('../img/smallgrid.png')"); 
		state.value = "hide";
	}
	else
	{
		$('#playerdiv').css("background-image", ""); 
		state.value = "show";
	}
}
