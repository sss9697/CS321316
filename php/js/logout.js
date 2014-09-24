	function logoutAction()
	{
		document.getElementById('logout-btn').style.visibility="hidden";
		document.getElementById('create-user').style.visibility="visible";
		document.getElementById('validate-user').style.visibility="visible";
		document.getElementById('validate-google').style.visibility="visible";
		$('#maindiv').fadeOut(3000);
		//dirty check?? optional so depend on time
	}