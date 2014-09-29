var MULTIPLIER = 50; //used to control how much each movement exactly is
var BOTTOMBOUNDARY;
var RIGHTBOUNDARY;

//control movement of player, using only left and top
function movePlayer(move, x, y)
{
	var times = parseInt(move.substring(1));
	var newX = x;
	var newY = y;
	
	console.log("x: " + x + " y: " + y);
	switch(move.charAt(0))
	{
		case "U":	newY = y - (times * MULTIPLIER);
					$("#sprite").animate({top:y});
			break;
			
		case "D": 	newY = y + (times * MULTIPLIER);
					$("#sprite").animate({top:y});
			break;
			
		case "L":	newX = x - (times * MULTIPLIER);
					$("#sprite").animate({left:x});
			break;
			
		case "R":	newX = x + (times * MULTIPLIER);
					$("#sprite").animate({left:x});
			break;
	}
	
	return [x,y];
}

//depend on command, pass on to the correct function, note: at this point, there will be no more loops
function executeCommand(moves)
{
	$("#sprite").css({top: 0, left: 0});
	var coords = [0,0];
	
	for(i = 0 ; i < moves.length ; i++)
	{
		if (moves[i].charAt(0) == "U" || moves[i].charAt(0) == "D" || moves[i].charAt(0) == "L" || moves[i].charAt(0) == "R")
		{
			coords = movePlayer(moves[i], coords[0], coords[1]);
		}
		//the other 3 commands goes here
	}
}
