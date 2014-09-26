$(function()
{
	$("#logout-btn").button().on("click", function()
	{
		processCommand("logout");
	});
});