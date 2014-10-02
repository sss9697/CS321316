var MULTIPLIER = 50; //used to control how much each movement exactly is
var BOTTOMBOUNDARY = 800 - 50;//50 offset is for the width of the sprite itself
var RIGHTBOUNDARY = 800 - 50;
var TOPBOUNDARY = 0;
var LEFTBOUNDARY = 0;

//control movement of player, because all instructions will be ran before the animation even completes
//it results in the base position to be a constant 0,0 if we were to use sprite.position(). Thus, we will
//manually calculate the position with each iteration of this function outselves to pass to the animation queue.
function movePlayer(move, x, y)
{
	var times = parseInt(move.substring(1));
	var newX = x;
	var newY = y;
	
	switch(move.charAt(0))
	{
		case "U":	newY = y - (times * MULTIPLIER);
		
					if(newY < TOPBOUNDARY)
						newY = TOPBOUNDARY;
						
					$("#sprite").animate({top:newY}, 500);
			break;
			
		case "D": 	newY = y + (times * MULTIPLIER);
		
					if(newY > BOTTOMBOUNDARY)
						newY = BOTTOMBOUNDARY;
		
					$("#sprite").animate({top:newY}, 500);
			break;
			
		case "L":	newX = x - (times * MULTIPLIER);
		
					if(newX < LEFTBOUNDARY)
						newX = LEFTBOUNDARY;
		
					$("#sprite").animate({left:newX}, 500);
			break;
			
		case "R":	newX = x + (times * MULTIPLIER);
		
					if(newX > RIGHTBOUNDARY)
						newX = RIGHTBOUNDARY;
						
					$("#sprite").animate({left:newX}, 500);
			break;
	}
	
	return [newX, newY];
}

function teleportPlayer(move, x, y)
{
	var times = parseInt(move.substring(1));
	var newX = x;
	var newY = y;
	
	switch(move.charAt(0))
	{
		case "X":	newX = (times * MULTIPLIER);						
					$("#sprite").animate({left:newX}, 500);
			break;
			
		case "Y": 	newY = (times * MULTIPLIER);		
					$("#sprite").animate({top:newY}, 500);
			break;
	}
	
	return [newX, newY];
}

//depend on command, pass on to the correct function, note: at this point, there will be no more loops
function executeCommand(moves)
{
	$("#sprite").css({top: 0, left: 0});
	$('#playerdiv').css('background-color', $("#defaultBackgroundList").val());
	var coords = [0,0];
	
	for(i = 0 ; i < moves.length ; i++)
	{
		if (moves[i].charAt(0) == "U" || moves[i].charAt(0) == "D" || moves[i].charAt(0) == "L" || moves[i].charAt(0) == "R")
		{
			coords = movePlayer(moves[i], coords[0], coords[1]);
		}
		else if(moves[i].charAt(0) == "X" || moves[i].charAt(0) == "Y")
		{
			coords = teleportPlayer(moves[i], coords[0], coords[1]);
		}
		else if(moves[i].charAt(0) == "T")
		{
			toggleCharf();
		}
		else if(moves[i].charAt(0) == "B")
		{
			changePlayerBackground(moves[i], i * 500);
		}
		//the other 2 commands goes here
	}
}
