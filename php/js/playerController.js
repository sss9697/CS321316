var MULTIPLIER = 50; //used to control how much each movement exactly is

//control movement of player, using only left and top
function movePlayer(move)
{
	var times = parseInt(move.substring(1));
	var curPosition = $("#sprite").position();
	
	switch(move.charAt(0))
	{
		case "U":
			break;
			
		case "D": 	var newDown = curPosition.top + (times * MULTIPLIER);
					console.log(newDown);
					$("#sprite").animate({top:'250px'});
			break;
			
		case "L":
			break;
			
		case "R":
			break;
	}
}

//depend on command, pass on to the correct function, note: at this point, there will be no more loops
function executeCommand(moves)
{
	for(i = 0 ; i < moves.length ; i++)
	{
		if (moves[i].charAt(0) == "U" || moves[i].charAt(0) == "D" || moves[i].charAt(0) == "L" || moves[i].charAt(0) == "R")
		{
			movePlayer(moves[i]);
		}
		//the other 3 commands goes here
	}
}
