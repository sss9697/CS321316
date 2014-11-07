var MULTIPLIER = 50; //used to control how much each movement exactly is
var BOTTOMBOUNDARY = 800 - 50;//50 offset is for the width of the sprite itself
var RIGHTBOUNDARY = 800 - 50;
var TOPBOUNDARY = 0;
var LEFTBOUNDARY = 0;

//control movement of player, because all instructions will be ran before the animation even completes
//it results in the base position to be a constant 0,0 if we were to use sprite.position(). Thus, we will
//manually calculate the position with each iteration of this function outselves to pass to the animation queue.
function movePlayer(move, x, y, delayTime, val)
{
	var times;
	var newX = x;
	var newY = y;
	if(val == 10000)
		times = parseInt(move.substring(1));
	else
		times = val;
	
	switch(move.charAt(0))
	{
		case "U":	newY = y - (times * MULTIPLIER);
		
					if(newY < TOPBOUNDARY)
						newY = TOPBOUNDARY;
						
					if(newY > BOTTOMBOUNDARY)
						newY = BOTTOMBOUNDARY;
						
					$("#sprite").delay(delayTime).animate({top:newY}, 500);
					$("#sprite2").delay(delayTime).animate({top:newY}, 500);
			break;
			
		case "D": 	newY = y + (times * MULTIPLIER);
		
					if(newY > BOTTOMBOUNDARY)
						newY = BOTTOMBOUNDARY;
						
					if(newY < TOPBOUNDARY)
						newY = TOPBOUNDARY;
		
					$("#sprite").delay(delayTime).animate({top:newY}, 500);
					$("#sprite2").delay(delayTime).animate({top:newY}, 500);
			break;
			
		case "L":	newX = x - (times * MULTIPLIER);
		
					if(newX < LEFTBOUNDARY)
						newX = LEFTBOUNDARY;
						
					if(newX > RIGHTBOUNDARY)
						newX = RIGHTBOUNDARY;
		
					$("#sprite").delay(delayTime).animate({left:newX}, 500);
					$("#sprite2").delay(delayTime).animate({left:newX}, 500);
			break;
			
		case "R":	newX = x + (times * MULTIPLIER);
		
					if(newX > RIGHTBOUNDARY)
						newX = RIGHTBOUNDARY;
						
					if(newX < LEFTBOUNDARY)
						newX = LEFTBOUNDARY;
						
					$("#sprite").delay(delayTime).animate({left:newX}, 500);
					$("#sprite2").delay(delayTime).animate({left:newX}, 500);
			break;
	}
	
	return [newX, newY];
}

function teleportPlayer(move, x, y, delayTime)
{
	var times = parseInt(move.substring(1));
	var newX = x;
	var newY = y;
	
	switch(move.charAt(0))
	{
		case "X":	newX = (times * MULTIPLIER);						
					$("#sprite").delay(delayTime).animate({left:newX}, 500);
					$("#sprite2").delay(delayTime).animate({left:newX}, 500);
			break;
			
		case "Y": 	newY = (times * MULTIPLIER);		
					$("#sprite").delay(delayTime).animate({top:newY}, 500);
					$("#sprite2").delay(delayTime).animate({top:newY}, 500);
			break;
	}
	
	return [newX, newY];
}
function resetPlayerWindow()
{
	$("#sprite").clearQueue();
	$('#sprite2').clearQueue();
	$('#playerdiv').clearQueue();
	
	$("#sprite").stop();
	$("#sprite2").stop();
	$('#playerdiv').stop();
	
	$("#sprite").css({top: 0, left: 0});
	$("#sprite2").css({top: 0, left: 0});
	
	$("#sprite").attr("src","img/"+$("#defaultCharList").val()+".gif");
	$('#playerdiv').css('background-color', $("#defaultBackgroundList").val());
	
	$("#sprite").show();
	$("#sprite2").hide();
}
//depend on command, pass on to the correct function, note: at this point, there will be no more loops
function executeCommand(moves)
{
	resetPlayerWindow();
	var coords = [0,0];
	var delay = -500;
	var spriteDelay = 0;
	var charDelay = -500;
	var charChangeCount = 0;
	var foreverloopIndex = 0;
	var loopIndex = [];
	var loopStatus = [];
	var curLoop = -1;
	var loopCount = 0;
	var varI = 0;
	var varJ = 0;
	var varK = 0;
	var curIf = -1;
	var ifStatus = [];
	var elseCount = [];
	var ignoreIf = 0;
	var firstFor = 0;
	var captureChecked = $('#chkBoxCapture').prop('checked');
	var screenshot_multipler = 0;
	
	for(i = 0 ; i < moves.length ; i++)
	{
		if(captureChecked)
		{
			window.setTimeout(takeSS,250 * screenshot_multipler++);
			window.setTimeout(takeSS,250 * screenshot_multipler++);
		}

		if(ignoreIf != 0)
		{
			if(moves[i].charAt(0) == "}")
				ignoreIf -= 1;
		}
		else if(ifStatus[curIf] == 1) //if miss, we do else
		{
			if(moves[i].charAt(0) == "{")
			{
				ignoreIf += 1;
			}
			if(moves[i].charAt(0) == "|" && elseCount[curIf] == 0)
			{
				ifStatus[curIf] = 0;
				elseCount[curIf] = 1;
			}
			if(moves[i].charAt(0) == "}")
			{
				elseCount[curIf] = "";
				ifStatus[curIf] = "";
				curIf -= 1;
			}
		}
		else if(loopStatus[curLoop] == 1) //1 = break out of loop
		{
			if(moves[i].charAt(0) == "]" || moves[i].charAt(0) == ")")
			{
				loopStatus[curLoop] = "";
				loopIndex[curLoop] = "";
				curLoop -= 1;
			}
		}
		else
		{
			delay += 500;
			charDelay += 500;
			if (moves[i].charAt(0) == "U" || moves[i].charAt(0) == "D" || moves[i].charAt(0) == "L" || moves[i].charAt(0) == "R")
			{
				var value = 10000; //a number that is impossible to set manually
				if(moves[i].charAt(1) == "i")
					value = varI;
				else if(moves[i].charAt(1) == "j")
					value = varJ;
				else if(moves[i].charAt(1) == "k")
					value = varK;
					
				coords = movePlayer(moves[i], coords[0], coords[1], spriteDelay, value);
				spriteDelay = 0;
			}
			else if(moves[i].charAt(0) == "X" || moves[i].charAt(0) == "Y")
			{
				coords = teleportPlayer(moves[i], coords[0], coords[1], spriteDelay);
				spriteDelay = 0;
			}
			else if(moves[i].charAt(0) == "T")
			{
				toggleCharf(spriteDelay);
				spriteDelay = 0;
			}
			else if(moves[i].charAt(0) == "B")
			{
				changePlayerBackground(moves[i], delay);
				spriteDelay += 500;
				delay = -500;
			}
			else if(moves[i].charAt(0) == "A")
			{
				var charChangeD = charChangeCount % 2;
				
				changePlayerCommand(moves[i], spriteDelay, charChangeD);
				spriteDelay += 500;
				charDelay = -500;
				
				charChangeCount += 1;
			}
			else if(moves[i].charAt(0) == "F") //forever loop
			{
				delay -= 500;
				charDelay -= 500;
				var foreverIndex = parseInt(moves[i].substring(1));
				if(foreverIndex == 0)
				{
					foreverloopIndex = i;
				}
				else
				{
					loopCount = loopCount + 1;
					if(loopCount != 999)
						i = foreverloopIndex - 1;
				}
			}
			else if(moves[i].charAt(0) == "i")
			{
				delay -= 500;
				charDelay -= 500;
				var value = parseInt(moves[i].substring(2));
				switch(moves[i].charAt(1))
				{
					case "=" : varI = value; break;
					case "+" : varI += value; break;
					case "-" : varI -= value; break;
					case "*" : varI *= value; break;
					case "/" : varI /= value; break;
					case "%" : varI %= value; break;
				}
			}
			else if(moves[i].charAt(0) == "j")
			{
				delay -= 500;
				charDelay -= 500;
				var value = parseInt(moves[i].substring(2));
				switch(moves[i].charAt(1))
				{
					case "=" : varJ = value; break;
					case "+" : varJ += value; break;
					case "-" : varJ -= value; break;
					case "*" : varJ *= value; break;
					case "/" : varJ /= value; break;
					case "%" : varJ %= value; break;
				}
			}
			else if(moves[i].charAt(0) == "k")
			{
				delay -= 500;
				charDelay -= 500;
				var value = parseInt(moves[i].substring(2));
				switch(moves[i].charAt(1))
				{
					case "=" : varK = value; break;
					case "+" : varK += value; break;
					case "-" : varK -= value; break;
					case "*" : varK *= value; break;
					case "/" : varK /= value; break;
					case "%" : varK %= value; break;
				}
			}
			else if(moves[i].charAt(0) == "{") //if open
			{
				delay -= 500;
				charDelay -= 500;
				
				curIf += 1;
				ifStatus[curIf] = 0;
				elseCount[curIf] = 0;
				
				var value = parseInt(moves[i].substring(3));
				var varX = coords[0] / MULTIPLIER;
				var varY = coords[1] / MULTIPLIER;
				
				switch(moves[i].charAt(2))
				{
					case "=":	
						switch(moves[i].charAt(1))
						{
							case "i": if(!(varI == value))	ifStatus[curIf] = 1;	break;
							case "j": if(!(varJ == value))	ifStatus[curIf] = 1;	break;
							case "k": if(!(varK == value))	ifStatus[curIf] = 1;	break;
							case "x": if(!(varX == value))	ifStatus[curIf] = 1;	break;
							case "y": if(!(varY == value))	ifStatus[curIf] = 1;	break;
						}						
						break;
					case "<":
						switch(moves[i].charAt(1))
						{
							case "i": if(!(varI < value))	ifStatus[curIf] = 1;	break;
							case "j": if(!(varJ < value))	ifStatus[curIf] = 1;	break;
							case "k": if(!(varK < value))	ifStatus[curIf] = 1;	break;
							case "x": if(!(varX < value))	ifStatus[curIf] = 1;	break;
							case "y": if(!(varY < value))	ifStatus[curIf] = 1;	break;
						}	
						break;
					case ">":
						switch(moves[i].charAt(1))
						{
							case "i": if(!(varI > value))	ifStatus[curIf] = 1;	break;
							case "j": if(!(varJ > value))	ifStatus[curIf] = 1;	break;
							case "k": if(!(varK > value))	ifStatus[curIf] = 1;	break;
							case "x": if(!(varX > value))	ifStatus[curIf] = 1;	break;
							case "y": if(!(varY > value))	ifStatus[curIf] = 1;	break;
						}
						break;
					case "!":
						switch(moves[i].charAt(1))
						{
							case "i": if(!(varI != value))	ifStatus[curIf] = 1;	break;
							case "j": if(!(varJ != value))	ifStatus[curIf] = 1;	break;
							case "k": if(!(varK != value))	ifStatus[curIf] = 1;	break;
							case "x": if(!(varX != value))	ifStatus[curIf] = 1;	break;
							case "y": if(!(varY != value))	ifStatus[curIf] = 1;	break;
						}
						break;
				}
			}
			else if(moves[i].charAt(0) == "}") //if close
			{
				delay -= 500;
				charDelay -= 500;
				ifStatus[curIf] = "";
				elseCount[curIf] = "";
				curIf -= 1;
			}
			else if(moves[i].charAt(0) == "|" && elseCount[curIf] == 0) //else
			{
				delay -= 500;
				charDelay -= 500;
				ifStatus[curIf] = 1; //skip else
				elseCount[curIf] = 1;
			}
			else if(moves[i].charAt(0) == "[") //while open
			{
				delay -= 500;
				charDelay -= 500;
				//loop detected, increase curLoop and add this index to loopIndex
				curLoop += 1;
				loopIndex[curLoop] = i - 1;
				loopStatus[curLoop] = 0; 
				
				var value = parseInt(moves[i].substring(3));
				var varX = coords[0] / MULTIPLIER;
				var varY = coords[1] / MULTIPLIER;
				
				switch(moves[i].charAt(2))
				{
					case "=":	
						switch(moves[i].charAt(1))
						{
							case "i": if(!(varI == value))	loopStatus[curLoop] = 1;	break;
							case "j": if(!(varJ == value))	loopStatus[curLoop] = 1;	break;
							case "k": if(!(varK == value))	loopStatus[curLoop] = 1;	break;
							case "x": if(!(varX == value))	loopStatus[curLoop] = 1;	break;
							case "y": if(!(varY == value))	loopStatus[curLoop] = 1;	break;
						}						
						break;
					case "<":
						switch(moves[i].charAt(1))
						{
							case "i": if(!(varI < value))	loopStatus[curLoop] = 1;	break;
							case "j": if(!(varJ < value))	loopStatus[curLoop] = 1;	break;
							case "k": if(!(varK < value))	loopStatus[curLoop] = 1;	break;
							case "x": if(!(varX < value))	loopStatus[curLoop] = 1;	break;
							case "y": if(!(varY < value))	loopStatus[curLoop] = 1;	break;
						}	
						break;
					case ">":
						switch(moves[i].charAt(1))
						{
							case "i": if(!(varI > value))	loopStatus[curLoop] = 1;	break;
							case "j": if(!(varJ > value))	loopStatus[curLoop] = 1;	break;
							case "k": if(!(varK > value))	loopStatus[curLoop] = 1;	break;
							case "x": if(!(varX > value))	loopStatus[curLoop] = 1;	break;
							case "y": if(!(varY > value))	loopStatus[curLoop] = 1;	break;
						}
						break;
					case "!":
						switch(moves[i].charAt(1))
						{
							case "i": if(!(varI != value))	loopStatus[curLoop] = 1;	break;
							case "j": if(!(varJ != value))	loopStatus[curLoop] = 1;	break;
							case "k": if(!(varK != value))	loopStatus[curLoop] = 1;	break;
							case "x": if(!(varX != value))	loopStatus[curLoop] = 1;	break;
							case "y": if(!(varY != value))	loopStatus[curLoop] = 1;	break;
						}
						break;
				}
			}
			else if(moves[i].charAt(0) == "]" || moves[i].charAt(0) == ")")
			{
				delay -= 500;
				charDelay -= 500;
				i = loopIndex[curLoop];
				curLoop -= 1;
			}
			else if(moves[i].charAt(0) == "(") //for open
			{
				//first command of a first loop is to init the variable
				if(moves[i].charAt(1) == "i" || moves[i].charAt(1) == "j" || moves[i].charAt(1) == "k")
				{
					if(moves[i].charAt(1) == "i")
						varI = (parseInt(moves[i].substring(2)));
					if(moves[i].charAt(1) == "j")
						varJ = (parseInt(moves[i].substring(2)));
					if(moves[i].charAt(1) == "k")
						varK = (parseInt(moves[i].substring(2)));
					firstFor = 1;
				}
				else
				{
					delay -= 500;
					charDelay -= 500;
					//loop detected, increase curLoop and add this index to loopIndex
					curLoop += 1;
					loopIndex[curLoop] = i - 1;
					loopStatus[curLoop] = 0; 
					
					var value = parseInt(moves[i].substring(2)); //this is the comparatorValue
					var AddValue = parseInt(moves[i+1].substring(2)); //this is the to operate value
					var varX = coords[0] / MULTIPLIER;
					var varY = coords[1] / MULTIPLIER;
					
					if(firstFor != 1) //signify the first time running the loop
					{
						switch(moves[i + 1].charAt(1)) //switch the operator 
						{
							case "+":	
								switch(moves[i - 1].charAt(1)) //switch the variable
								{
									case "i": varI = varI + AddValue;	break;
									case "j": varJ = varJ + AddValue;	break;
									case "k": varK = varK + AddValue;	break;
								}						
								break;
							case "-":
								switch(moves[i - 1].charAt(1))
								{
									case "i": varI = varI - AddValue;	break;
									case "j": varJ = varJ - AddValue;	break;
									case "k": varK = varK - AddValue;	break;
								}	
								break;
							case "*":
								switch(moves[i - 1].charAt(1))
								{
									case "i": varI = varI * AddValue;	break;
									case "j": varJ = varJ * AddValue;	break;
									case "k": varK = varK * AddValue;	break;
								}
								break;
							case "/":
								switch(moves[i - 1].charAt(1))
								{
									case "i": varI = varI * AddValue;	break;
									case "j": varJ = varJ * AddValue;	break;
									case "k": varK = varK * AddValue;	break;
								}
								break;
							case "%":
								switch(moves[i - 1].charAt(1))
								{
									case "i": varI = varI % AddValue;	break;
									case "j": varJ = varJ % AddValue;	break;
									case "k": varK = varK % AddValue;	break;
								}
								break;
						}
					}
					
					switch(moves[i].charAt(1)) //switch the comparator
					{
						case "=":	
							switch(moves[i - 1].charAt(1))
							{
								case "i": if(!(varI == value))	loopStatus[curLoop] = 1;	break;
								case "j": if(!(varJ == value))	loopStatus[curLoop] = 1;	break;
								case "k": if(!(varK == value))	loopStatus[curLoop] = 1;	break;
							}						
							break;
						case "<":
							switch(moves[i - 1].charAt(1))
							{
								case "i": if(!(varI < value))	loopStatus[curLoop] = 1;	break;
								case "j": if(!(varJ < value))	loopStatus[curLoop] = 1;	break;
								case "k": if(!(varK < value))	loopStatus[curLoop] = 1;	break;
							}	
							break;
						case ">":
							switch(moves[i - 1].charAt(1))
							{
								case "i": if(!(varI > value))	loopStatus[curLoop] = 1;	break;
								case "j": if(!(varJ > value))	loopStatus[curLoop] = 1;	break;
								case "k": if(!(varK > value))	loopStatus[curLoop] = 1;	break;
							}
							break;
						case "!":
							switch(moves[i - 1].charAt(1))
							{
								case "i": if(!(varI != value))	loopStatus[curLoop] = 1;	break;
								case "j": if(!(varJ != value))	loopStatus[curLoop] = 1;	break;
								case "k": if(!(varK != value))	loopStatus[curLoop] = 1;	break;
							}
							break;
					}
					firstFor = 0;
					i += 1; //skip one move as it is the operator
				}
			}
		}
	}

}


