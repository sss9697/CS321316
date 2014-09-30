function toggleCharf()
{
	var cha = $('#sprite');
	if(cha.value == "show")
	{
		$('#sprite').fadeIn(500);
		cha.value = "hide";
	}
	else
	{
		$('#sprite').fadeOut(500);
		cha.value = "show";
	}
	console.log(cha.value);
}
