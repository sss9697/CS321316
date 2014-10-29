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
			var state=document.getElementById("toggleGrid-btn").value;
			if(state.value == "show")
			{
				$('#playerdiv').css("background-image", "url('../img/grid.png')"); 
				// state.value = "hide";
				document.getElementById("toggleGrid-btn").value = "hide";
			}
			else
			{
				$('#playerdiv').css("background-image", ""); 
				// state.value = "show";
				document.getElementById("toggleGrid-btn").value = "show";
			}
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