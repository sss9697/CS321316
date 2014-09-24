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
						document.getElementById("noAccoutLabel").style.display = "none";
						//validate account here
						var acc = $.parseJSON(account);
						alert(acc.name);
						
						dialog.dialog( "close" );
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