function toggleCharf()
{
	var cha = $('#sprite');

	if(cha.attr("value") == "show")
	{
		cha.fadeIn(500);
		cha.attr("value", "hide");
	}
	else
	{
		cha.fadeOut(500);
		cha.attr("value", "show");
	}
}
