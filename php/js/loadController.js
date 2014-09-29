function loadf(moves)
{
	var movearray = moves.trim().split(" ");
	
	$( "#editorspace ul" ).empty();
	for( i = 0 ; i < movearray.length ; i++)
	{
		switch(movearray[i].charAt(0))
		{
			case 'U': $( "#editorspace ul" ).append(
						$("<li id=\"moveup\" class=\"command\">	<div id=\"movediv\">up: <input type=\"number\" name=\"edittxt\" id=\"edittxt\" value=\"1\" max=\"999\" min=\"-999\" /></div></li>"));
				break;
			case 'D': 
				break;
			case 'L': 
				break;
			case 'R': 
				break;
			case 'O': 
				break;
			case 'C': 
				break;
			case 'A': 
				break;
			case 'B': 
				break;
			case 'T': 
				break;
		}
	}
	alert(movearray);
}
