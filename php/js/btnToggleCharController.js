$(document).ready(function () {
	function toggleCharf()
	{
		var cha = $('#sprite');
		if(cha.value == "show")
		{
			cha.fadeIn(500);
			cha.value = "hide";
		}
		else
		{
			cha.fadeOut(500);
			cha.value = "show";
		}
	}
}
