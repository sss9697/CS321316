	function logoutAction()
	{
		document.getElementById('create-user').style.visibility="visible";
		document.getElementById('validate-user').style.visibility="visible";
		document.getElementById('validate-google').style.visibility="visible";
		$('#logout-btn').fadeOut(3000);
		$('#maindiv').fadeOut(3000);
		//dirty check?? optional so depend on time
	}