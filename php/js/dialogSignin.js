var uID;
$(function() 
{
	var dialog, form,
	emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
	email = $( "#email" ),
	password = $( "#password" ),
	allFields = $( [] ).add( email ).add( password ),
	tips = $( ".validateTips" );

	function updateTips( t ) 
	{
		tips
		.text( t )
		.addClass( "ui-state-highlight" );
		setTimeout(function() 
			{
			tips.removeClass( "ui-state-highlight", 1500 );
			}, 500 );
	}
	
	function checkLength( o, n, min, max ) 
	{
		if ( o.val().length > max || o.val().length < min ) 
		{
			o.addClass( "ui-state-error" );
			updateTips( "Length of " + n + " must be between " +
			min + " and " + max + "." );
			return false;
		} 
		else 
		{
			return true;
		}
	}
	
	function checkRegexp( o, regexp, n ) 
	{
		if ( !( regexp.test( o.val() ) ) ) 
		{
			o.addClass( "ui-state-error" );
			updateTips( n );
			return false;
		} 
		else 
		{
			return true;
		}
	}
	
	function loadList()
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
	
	function validateUser() 
	{
		var valid = true;
		allFields.removeClass( "ui-state-error" );
		valid = valid && checkLength( email, "email", 6, 80 );
		valid = valid && checkLength( password, "password", 5, 16 );
		valid = valid && checkRegexp( email, emailRegex, "eg. ui@jquery.com" );
		valid = valid && checkRegexp( password, /^([0-9a-zA-Z])+$/, "Password field only allow : a-z 0-9" );
		if ( valid ) 
		{
			//hashing password
			var hash = 0, i, chr, len;
			for(i=0, len = password.val().length; i< len; i++)
			{
				chr = password.val().charCodeAt(i);
				hash = ((hash << 5) - hash) + chr;
				hash |= 0;
			}
			
			//Need to validate with DB here
			$.ajax(
			{
				url : "https://php-cs321316.rhcloud.com/index.php/vide/get_account",
				type : 'POST',
				datatype : "json",
				data : {"email":email.val()},
				success : function(account)
				{
					if($.isEmptyObject(account))
					{
						document.getElementById("noAccoutLabel").style.display = "inline";
					}
					else
					{
						if(hash != account[0].Password)
						{
							document.getElementById("noAccoutLabel").style.display = "inline";
						}
						else
						{
							//logged in, switch panel visibility
							uID = account[0].ID;
							dialog.dialog( "close" );
							document.getElementById('welcomelabel').innerHTML = 'Welcome '+ account[0].Name;
							$('#defaultBackgroundList').val(account[0].DefaultBackground);
							$('#defaultBackgroundList').css('background-color', account[0].DefaultBackground);
							
							$('#defaultCharList').val(account[0].DefaultChar);
							$("#placeholderSprite").attr("src","img/"+account[0].DefaultChar+".gif");
							$("#sprite").attr("src","img/"+account[0].DefaultChar+".gif");
							
							$('#playerdiv').css('background-color', account[0].DefaultBackground);
							$('#create-user').fadeOut(3000);
							$('#validate-user').fadeOut(3000);
							$('#gConnect').fadeOut(3000);
							$('#logout-btn').hide().fadeIn(3000);
							$('#maindiv').hide().fadeIn(3000);
							loadList();
						}
					}
				},
				error : function(jqXHR, textStatus, errorThrown)
				{
					alert(textStatus + " " + errorThrown + " " + jqXHR);
				}
			});
			
			//dialog.dialog( "close" );
		}
		return valid;
	}
	
	dialog = $( "#signin-form" ).dialog(
	{
		autoOpen: false,
		height: 400,
		width: 550,
		modal: true,
		buttons: 
		{
			"Sign in": validateUser,
			Cancel: function() 
			{
				dialog.dialog( "close" );
			}
		},
		close: function() 
		{
			form[ 0 ].reset();
			allFields.removeClass( "ui-state-error" );
		}
	});
	
	form = dialog.find( "form" ).on( "submit", function( event ) 
	{
		event.preventDefault();
		validateUser();
	});
	$( "#validate-user" ).button().on( "click", function() 
	{
	
		dialog.dialog( "open" );
	});
});