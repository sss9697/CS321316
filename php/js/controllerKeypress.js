$( document ).on( 'keydown', function keydownFunction(e) {
	if(e.shiftKey)//Shift key is held down
	{
		// toggleFrontf("show");
		if(e.keyCode === 67)//c:compile
		{
			compilef();
		}
		if(e.keyCode === 76)//l:logout
		{
			logoutf();
		}
		if(e.keyCode === 84)//t:toggle grid
		{
			toggleGridf(("#toggleGrid-btn").val());
		}
	}
});
$( document ).on( 'keyup', function keyupFunction(e) {  
	// toggleFrontf("hide");
	
});

function toggleFrontf(state)
{
	if(state.value == "show")
	{
		var img = document.getElementById('myImageId');
		img.style.visibility = 'visible';
	}
	else
	{
		var img = document.getElementById('myImageId');
		img.style.visibility = 'hidden';
	}
}