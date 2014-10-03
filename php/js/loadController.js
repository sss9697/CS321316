function loadf(moves)
{
	var movearray = moves.trim().split(" ");
	
	$( "#editorspace ul" ).empty();
	for( i = 0 ; i < movearray.length ; i++)
	{
		var number = movearray[i].substring(1);
		switch(movearray[i].charAt(0))
		{			
			case 'U': $( "#editorspace ul" ).append(
						$("<li id=\"moveup\" class=\"command\">	<div id=\"movediv\">up: <input type=\"number\" name=\"edittxt\" id=\"edittxt\" value=" + number + " max=\"999\" min=\"-999\" /></div></li>"));
				break;
				
			case 'D': $( "#editorspace ul" ).append(
						$("<li id=\"movedown\" class=\"command\">	<div id=\"movediv\">down: <input type=\"number\" name=\"edittxt\" id=\"edittxt\" value=" + number + " max=\"999\" min=\"-999\" /></div></li>"));
				break;
				
			case 'L': $( "#editorspace ul" ).append(
						$("<li id=\"moveleft\" class=\"command\">	<div id=\"movediv\">left: <input type=\"number\" name=\"edittxt\" id=\"edittxt\" value=" + number + " max=\"999\" min=\"-999\" /></div></li>"));
				break;
				
			case 'R': $( "#editorspace ul" ).append(
						$("<li id=\"moveright\" class=\"command\">	<div id=\"movediv\">right: <input type=\"number\" name=\"edittxt\" id=\"edittxt\" value=" + number + " max=\"999\" min=\"-999\" /></div></li>"));
				break;
				
			case 'O': $( "#editorspace ul" ).append(
						$("<li id=\"moveloopo\" class=\"command\">	<div id=\"movediv\">loop open</div></li>"));
				break;
				
			case 'C': $( "#editorspace ul" ).append(
						$("<li id=\"moveloopc\" class=\"command\">	<div id=\"movediv\">loop close: <input type=\"number\" name=\"edittxt\" id=\"edittxt\" value=" + number + " max=\"999\" min=\"-999\" /></div></li>"));
				break;
			
			case 'X': $( "#editorspace ul" ).append(
						$("<li id=\"movesetx\" class=\"command\">	<div id=\"movediv\">set x: <input type=\"number\" name=\"edittxt\" id=\"edittxt\" value=" + number + " max=\"999\" min=\"-999\" /></div></li>")); 
				break;
				
			case 'Y': $( "#editorspace ul" ).append(
						$("<li id=\"movesety\" class=\"command\">	<div id=\"movediv\">set y: <input type=\"number\" name=\"edittxt\" id=\"edittxt\" value=" + number + " max=\"999\" min=\"-999\" /></div></li>"));
				break;			
				
			case 'A': $( "#editorspace ul" ).append(
						$("<li id=\"movechangechar\" class=\"command\">	<div id=\"movediv\">change char</div></li>"));
						//this one is to be very complicated as it is supposed to be a dropdownlsit
						//need to set selected //use .last(), it should point to the latest item
						//which is this dropdown, then use jquery .val() to add
				break;
				
			case 'B': $( "#editorspace ul" ).append(
						$("<li id=\"movebackground\" class=\"command\"><select id=\"movebackgroundlist\" class=\"backgroundSelectedCom\"><option value=\"\" disabled selected>Background</option><option value=\"#cccccc\" class=\"Grey\">Grey</option><option value=\"#000000\" class=\"Black\">Black</option><option value=\"#ffffff\" class=\"White\">White</option><option value=\"#0000ff\" class=\"Blue\">Blue</option><option value=\"#ff0000\" class=\"Red\">Red</option><option value=\"#00ff00\" class=\"Green\">Green</option><option value=\"#ffff00\" class=\"Yellow\">Yellow</option><option value=\"#00ffff\" class=\"Cyan\">Cyan</option><option value=\"#ff69b4\" class=\"Pink\">Pink</option><option value=\"#c8a2c8\" class=\"Lilac\">Lilac</option></select></li>"));
						var lastChild = $("#editorspace ul li").last();
						alert(lastChild + "   " + lastChild.attr("id"));
						
						//This one is to be very complicated as it is supposed to be a dropdownlist
						//need to set selected //use .last(), it should point to the latest item
						//which is this dropdown, then use jquery .val() to add
				break;
				
			case 'T': $( "#editorspace ul" ).append(
						$("<li id=\"movechartoggle\" class=\"command\">	<div id=\"movediv\">Toggle character</div></li>"));
				break;
		}
	}
}
