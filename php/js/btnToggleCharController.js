function toggleCharf(delayTime)
{
	var cha = $('#sprite');

	if(cha.attr("value") == "show")
	{
		cha.delay(delayTime).fadeIn(500);
		cha.attr("value", "hide");
	}
	else
	{
		cha.delay(delayTime).fadeOut(500);
		cha.attr("value", "show");
	}
}
