function loadf(moves)
{
	var movearray = moves.trim().split(" ");
	var bIndex = 0;
	$( "#editorspace ul" ).empty();
	for( i = 0 ; i < movearray.length ; i++)
	{
		var number = movearray[i].substring(1);
		switch(movearray[i].charAt(0))
		{			
			//up
			case 'U': $( "#editorspace ul" ).append(
						$("<li id=\"moveup\" class=\"item moves\">	<div id=\"movediv\">MOVE UP: <input type=\"number\" name=\"edittxt\" id=\"edittxt\" value=" + number + " max=\"999\" min=\"-999\" /></div></li>"));
				break;
				
			//down
			case 'D': $( "#editorspace ul" ).append(
						$("<li id=\"movedown\" class=\"item moves\">	<div id=\"movediv\">MOVE DOWN: <input type=\"number\" name=\"edittxt\" id=\"edittxt\" value=" + number + " max=\"999\" min=\"-999\" /></div></li>"));
				break;
				
			//left
			case 'L': $( "#editorspace ul" ).append(
						$("<li id=\"moveleft\" class=\"item moves\">	<div id=\"movediv\">MOVE LEFT: <input type=\"number\" name=\"edittxt\" id=\"edittxt\" value=" + number + " max=\"999\" min=\"-999\" /></div></li>"));
				break;
				
			//right
			case 'R': $( "#editorspace ul" ).append(
						$("<li id=\"moveright\" class=\"item moves\">	<div id=\"movediv\">MOVE RIGHT: <input type=\"number\" name=\"edittxt\" id=\"edittxt\" value=" + number + " max=\"999\" min=\"-999\" /></div></li>"));
				break;
				
			//open loop
			case 'O': $( "#editorspace ul" ).append(
						$("<li id=\"moveloopo\" class=\"item loops\">	<div id=\"movediv\">OPEN LOOP</div></li>"));
				break;
				
			//close loop
			case 'C': $( "#editorspace ul" ).append(
						$("<li id=\"moveloopc\" class=\"item loops\">	<div id=\"movediv\">CLOSE LOOP: <input type=\"number\" name=\"edittxt\" id=\"edittxt\" value=" + number + " max=\"999\" min=\"-999\" /></div></li>"));
				break;
			
			//set X
			case 'X': $( "#editorspace ul" ).append(
						$("<li id=\"movesetx\" class=\"item moves\">	<div id=\"movediv\">SET X: <input type=\"number\" name=\"edittxt\" id=\"edittxt\" value=" + number + " max=\"999\" min=\"-999\" /></div></li>")); 
				break;
				
			//set y
			case 'Y': $( "#editorspace ul" ).append(
						$("<li id=\"movesety\" class=\"item moves\">	<div id=\"movediv\">SET Y: <input type=\"number\" name=\"edittxt\" id=\"edittxt\" value=" + number + " max=\"999\" min=\"-999\" /></div></li>"));
				break;			
				
			//change character
			case 'A': $( "#editorspace ul" ).append(
						$("<li id=\"movechangechar\" class=\"item others3\"><select id=\"defaultCharListCom\" class=\"characterSelected\"><option value=\"\" disabled selected>Change char</option><option value=\"1\">Yellow Mouse</option><option value=\"2\">Orange Lizard</option><option value=\"3\">Green Elf</option><option value=\"4\">Blue Turtle</option><option value=\"5\">Larry</option></select></li>"));
						$("#editorspace ul li").last().find("#defaultCharListCom").val(number);
				break;
				
			//change background
			case 'B': $( "#editorspace ul" ).append(
						$("<li id=\"movebackground\" class=\"item others2\"><select id=\loadmovebackgroundlist"+bIndex+\" class=\"backgroundSelectedCom\"><option value=\"\" disabled selected>Background</option><option value=\"#cccccc\" class=\"Grey\">Grey</option><option value=\"#000000\" class=\"Black\">Black</option><option value=\"#ffffff\" class=\"White\">White</option><option value=\"#0000ff\" class=\"Blue\">Blue</option><option value=\"#ff0000\" class=\"Red\">Red</option><option value=\"#00ff00\" class=\"Green\">Green</option><option value=\"#ffff00\" class=\"Yellow\">Yellow</option><option value=\"#00ffff\" class=\"Cyan\">Cyan</option><option value=\"#ff69b4\" class=\"Pink\">Pink</option><option value=\"#c8a2c8\" class=\"Lilac\">Lilac</option></select></li>"));
						var loadId = "#loadmovebackgroundlist"+bIndex;
					  	$(loadId).val(number);
						$(loadId).css('background-color', number);
						$(loadId).on('change', function() 
						{
							processCommand("defaultBackgroundCom", this);
						});
						bIndex++;
				break;
				
			//toggle character
			case 'T': $( "#editorspace ul" ).append(
						$("<li id=\"movechartoggle\" class=\"item others1\">	<div id=\"movediv\">Toggle character</div></li>"));
				break;
				
			//open if
			case '{': $( "#editorspace ul" ).append(
						$("<li id=\"moveifopen\" class=\"item ifs\"><div 		id=\"movediv\">If: <select id=\"moveifopenfirstlist\"> <option value=\"i\">i</option><option value=\"j\">j</option><option value=\"k\">k</option><option value=\"x\">x</option><option value=\"y\">y</option></select><select id=\"moveifopensecondlist\"><option value=\">\">></option><option value=\"<\"><</option><option value=\"=\">=</option><option value=\"!\">!</option></select><input type=\"number\" name=\"edittxt\" id=\"edittxt\" value="+ number.substring(2) +" max=\"999\" min=\"-999\" /></div></li>"));
						$("#editorspace ul li").last().find("#moveifopenfirstlist").val(number.substring(0,1));
						$("#editorspace ul li").last().find("#moveifopensecondlist").val(number.substring(1,2));
				break;
			//close if	
			case '}': $( "#editorspace ul" ).append(
						$("<li id=\"moveifclose\" class=\"item ifs\"><div id=\"movediv\">End If</div></li>"));
				break;
				
			//else
			case '|': $( "#editorspace ul" ).append(
						$("<li id=\"moveifelse\" class=\"item ifs\"><div id=\"movediv\">Else</div></li>"));
				break;
			//variables
			case 'i': 
			case 'j':
			case 'k':$( "#editorspace ul" ).append(
						$("<li id=\"movevariable\" class=\"item\"><div id=\"movediv\"><select id=\"movevariablefirstlist\"><option value=\"i\">i</option><option value=\"j\">j</option><option value=\"k\">k</option></select><select id=\"movevariablesecondlist\"><option value=\"=\">=</option><option value=\"+\">+</option><option value=\"-\">-</option><option value=\"*\">*</option><option value=\"/\">/</option><option value=\"%\">%</option></select><input type=\"number\" name=\"edittxt\" id=\"edittxt\" value="+ number.substring(1) +" max=\"999\" min=\"-999\" /></div></li>"));
					$("#editorspace ul li").last().find("#movevariablefirstlist").val(movearray[i].charAt(0));
					$("#editorspace ul li").last().find("#movevariablesecondlist").val(movearray[i].charAt(1));
				break;
			
			//open while
			case '[': $( "#editorspace ul" ).append(
						$("<li id=\"movewhileopen\" class=\"item whiles\"><div id=\"movediv\">While: <select id=\"movewhileopenfirstlist\"><option value=\"i\">i</option><option value=\"j\">j</option><option value=\"k\">k</option><option value=\"x\">x</option><option value=\"y\">y</option></select><select id=\"movewhileopensecondlist\"><option value=\">\">></option><option value=\"<\"><</option><option value=\"=\">=</option></select><input type=\"number\" name=\"edittxt\" id=\"edittxt\" value="+number.substring(2)+" max=\"999\" min=\"-999\" /></div></li>"));
						$("#editorspace ul li").last().find("#movewhileopenfirstlist").val(number.substring(0,1));
						$("#editorspace ul li").last().find("#movewhileopensecondlist").val(number.substring(1,2));
				break;
			//close while
			case ']': $( "#editorspace ul" ).append(
						$("<li id=\"movewhileclose\" class=\"item whiles\"><div id=\"movediv\">End While</div></li>"));
				break;
			//open for
			case '(': $( "#editorspace ul" ).append(
						$("<li id=\"moveforopen\" class=\"item fors\"><div id=\"movediv\">For: <select id=\"moveforopenfirstlist\"><option value=\"i\">i</option><option value=\"j\">j</option><option value=\"k\">k</option></select>=<input type=\"number\" name=\"edittxt\" id=\"edittxt\" value="+number.substring(1)+" max=\"999\" min=\"-999\" />;<select id=\"moveforopensecondlist\"><option value=\">\">></option><option value=\"<\"><</option><option value=\"=\">=</option></select><input type=\"number\" name=\"edittxt\" id=\"edittxt2\" value="+ movearray[i + 1].substring(2) +" max=\"999\" min=\"-999\" />;<select id=\"moveforopenthirdlist\"><option value=\"+\">+</option><option value=\"-\">-</option><option value=\"*\">*</option><option value=\"/\">/</option><option value=\"%\">%</option></select><input type=\"number\" name=\"edittxt\" id=\"edittxt3\" value="+ movearray[i + 2].substring(2) +" max=\"999\" min=\"-999\" /></div></li>"));
						$("#editorspace ul li").last().find("#moveforopenfirstlist").val(number.substring(0,1));
						$("#editorspace ul li").last().find("#moveforopensecondlist").val(movearray[i + 1].substring(1,2));
						$("#editorspace ul li").last().find("#moveforopenthirdlist").val(movearray[i + 2].substring(1,2));
					i += 2; //skip 2 line as for is 3 lines worth
				break;
			//close for
			case ')': $( "#editorspace ul" ).append(
						$("<li id=\"moveforclose\" class=\"item fors\"><div id=\"movediv\">End For</div></li>"));
				break;
		}
	}
}
