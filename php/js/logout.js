$(function()
{
	function logoutAction()
	{
		document.getElementById('logout-btn').style.visibility="none";
		document.getElementById('create-user').style.visibility="visible";
		document.getElementById('validate-user').style.visibility="visible";
		document.getElementById('validate-google').style.visibility="visible";
		
		//dirty check?? optional so depend on time
	}
});