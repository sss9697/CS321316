var MULTIPLIER = 50; //used to control how much each movement exactly is
var BOTTOMBOUNDARY;
var RIGHTBOUNDARY;

//control movement of player, using only left and top
function movePlayer(move)
{
	var times = parseInt(move.substring(1));
	var curPosition = $("#sprite").position();
	var newPosition;
	
	switch(move.charAt(0))
	{
		case "U":	newPosition = curPosition.top - (times * MULTIPLIER);
					$("#sprite").animate({top:newPosition}, function()
					{
						$("#sprite").css({top:newPosition});
					});
			break;
			
		case "D": 	newPosition = curPosition.top + (times * MULTIPLIER);
					$("#sprite").animate({top:newPosition}, function()
					{
						$("#sprite").css({top:newPosition});
					});
			break;
			
		case "L":	newPosition = curPosition.left - (times * MULTIPLIER);
					$("#sprite").animate({left:newPosition}, function()
					{
						$("#sprite").css({left:newPosition});
					});
			break;
			
		case "R":	newPosition = curPosition.left + (times * MULTIPLIER);
					$("#sprite").animate({left:newPosition}, function()
					{
						$("#sprite").css({left:newPosition});
					});
			break;
	}
}

//depend on command, pass on to the correct function, note: at this point, there will be no more loops
function executeCommand(moves)
{
	$("#sprite").animate({left:'0px', top:'0px'}, 'fast', function()
	{
		$("#sprite").css({top: 0, left: 0});
	});
	
	for(i = 0 ; i < moves.length ; i++)
	{
		if (moves[i].charAt(0) == "U" || moves[i].charAt(0) == "D" || moves[i].charAt(0) == "L" || moves[i].charAt(0) == "R")
		{
			movePlayer(moves[i]);
		}
		//the other 3 commands goes here
	}
}
