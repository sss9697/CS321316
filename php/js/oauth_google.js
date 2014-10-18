function onSignInCallback(resp) {
	gapi.client.load('plus', 'v1', apiClientLoaded);
}

/**
* Sets up an API call after the Google API client loads.
*/
function apiClientLoaded() {
	gapi.client.plus.people.get({userId: 'me'}).execute(handleEmailResponse);
}

function signInProc(account)
{
	document.getElementById('welcomelabel').innerHTML = 'Welcome '+ account[0].Name;
	$('#defaultBackgroundList').val(account[0].DefaultBackground);
	$('#defaultBackgroundList').css('background-color', account[0].DefaultBackground);
							
	$('#defaultCharList').val(account[0].DefaultChar);
	$("#placeholderSprite").attr("src","img/"+account[0].DefaultChar+".gif");
	$("#sprite").attr("src","img/"+account[0].DefaultChar+".gif");
							
	$('#playerdiv').css('background-color', account[0].DefaultBackground);
	$('#create-user').fadeOut(500);
	$('#validate-user').fadeOut(500);
	$('#gConnect').fadeOut(500);
	$('#login-page-image').fadeOut(500);
	$('#login-page-controls').fadeOut(500);
	$('#logout-btn').hide().fadeIn(500);
	$('#maindiv').hide().fadeIn(500);
}

function gLoadList()
	{
		$.ajax(
			{
				url : "https://php-cs321316.rhcloud.com/index.php/vide/get_move",
				type : 'POST',
				datatype : "json",
				data : {"PID":uID},
				success : function(moves)
				{
					for( v = 0 ; v < moves.length ; v ++)
					{
						$("#loadList").append($('<option>').text(moves[v].Name).attr('value', moves[v].Moveset));
					}
				},
				error : function(jqXHR, textStatus, errorThrown)
				{
					alert(textStatus + " " + errorThrown + " " + jqXHR);
				}
			});
	}

function localDBAccCheckSure(email) {
	
	$.ajax(
			{
				url : "https://php-cs321316.rhcloud.com/index.php/vide/google_check",
				type : 'POST',
				datatype : "json",
				data : {"Email":email},
				success : function(res)
				{
					uID = res[0].ID;
					signInProc(res);
					gLoadList();
				},
				error : function(jqXHR, textStatus, errorThrown)
				{
					alert(textStatus + " " + errorThrown + " " + jqXHR);
				}
			});
}	
	
function createLocalDBAcc(email, name) {
	$.ajax(
			{
				url : "https://php-cs321316.rhcloud.com/index.php/vide/google_signup",
				type : 'POST',
				datatype : "json",
				data : {"Email":email, "Name":name},
				success : function(res)
				{
					//query again to get uID
					localDBAccCheckSure(email);
				},
				error : function(jqXHR, textStatus, errorThrown)
				{
					alert(textStatus + " " + errorThrown + " " + jqXHR);
				}
			});
}

function localDBAccCheck(email, name) {
	
	$.ajax(
			{
				url : "https://php-cs321316.rhcloud.com/index.php/vide/google_check",
				type : 'POST',
				datatype : "json",
				data : {"Email":email},
				success : function(res)
				{
					if($.isEmptyObject(res))
					{
						//dont exist, we create a new user for it
						createLocalDBAcc(email, name);
					}
					else
					{
						uID = res[0].ID;
						signInProc(res);
						gLoadList();
					}
				},
				error : function(jqXHR, textStatus, errorThrown)
				{
					alert(textStatus + " " + errorThrown + " " + jqXHR);
				}
			});
}
/**
* Response callback for when the API client receives a response.
*
* @param resp The API response object with the user email and profile information.
*/
function handleEmailResponse(resp) {
	var primaryEmail, displayName;
	
	for (var i=0; i < resp.emails.length; i++) 
	{
		if (resp.emails[i].type === 'account') primaryEmail = resp.emails[i].value;
	}
	
	displayName = resp.displayName;
	localDBAccCheck(primaryEmail, displayName);
}