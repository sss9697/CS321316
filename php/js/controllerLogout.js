
	function logoutf()
	{
		$('#create-user').fadeIn(3000);
		$('#validate-user').fadeIn(3000);
		$('#gConnect').fadeIn(3000);
		$('#logout-btn').fadeOut(3000);
		$('#maindiv').fadeOut(3000);
		//dirty check?? optional so depend on time
		controllerSession.clear();
	}
