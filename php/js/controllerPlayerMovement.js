var MULTIPLIER = 50; //used to control how much each movement exactly is
var BOTTOMBOUNDARY = 800 - 50;//50 offset is for the width of the sprite itself
var RIGHTBOUNDARY = 800 - 50;
var TOPBOUNDARY = 0;
var LEFTBOUNDARY = 0;

//control movement of player, because all instructions will be ran before the animation even completes
//it results in the base position to be a constant 0,0 if we were to use sprite.position(). Thus, we will
//manually calculate the position with each iteration of this function outselves to pass to the animation queue.
function movePlayer(move, x, y, delayTime)
{
	var times = parseInt(move.substring(1));
	var newX = x;
	var newY = y;
	
	switch(move.charAt(0))
	{
		case "U":	newY = y - (times * MULTIPLIER);
		
					if(newY < TOPBOUNDARY)
						newY = TOPBOUNDARY;
						
					$("#sprite").delay(delayTime).animate({top:newY}, 500);
					$("#sprite2").delay(delayTime).animate({top:newY}, 500);
			break;
			
		case "D": 	newY = y + (times * MULTIPLIER);
		
					if(newY > BOTTOMBOUNDARY)
						newY = BOTTOMBOUNDARY;
		
					$("#sprite").delay(delayTime).animate({top:newY}, 500);
					$("#sprite2").delay(delayTime).animate({top:newY}, 500);
			break;
			
		case "L":	newX = x - (times * MULTIPLIER);
		
					if(newX < LEFTBOUNDARY)
						newX = LEFTBOUNDARY;
		
					$("#sprite").delay(delayTime).animate({left:newX}, 500);
					$("#sprite2").delay(delayTime).animate({left:newX}, 500);
			break;
			
		case "R":	newX = x + (times * MULTIPLIER);
		
					if(newX > RIGHTBOUNDARY)
						newX = RIGHTBOUNDARY;
						
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
	
	for(i = 0 ; i < moves.length ; i++)
	{
		delay += 500;
		charDelay += 500;
		if (moves[i].charAt(0) == "U" || moves[i].charAt(0) == "D" || moves[i].charAt(0) == "L" || moves[i].charAt(0) == "R")
		{
			coords = movePlayer(moves[i], coords[0], coords[1], spriteDelay);
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
			
			changePlayerCommand(moves[i], charDelay, charChangeD);
			spriteDelay += 500;
			charDelay = -500;
			
			charChangeCount += 1;
		}
	}
}
