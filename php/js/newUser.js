$(function() 
{
	var dialog, form,
	emailRegex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
	name = $( "#name" ),
	email = $( "#email" ),
	password = $( "#password" ),
	allFields = $( [] ).add( name ).add( email ).add( password ),
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
	
	function addUser() 
	{
		var valid = true;
		allFields.removeClass( "ui-state-error" );
		valid = valid && checkLength( name, "username", 3, 16 );
		valid = valid && checkLength( email, "email", 6, 80 );
		valid = valid && checkLength( password, "password", 5, 16 );
		valid = valid && checkRegexp( name, /^[a-z]([0-9a-z_\s])+$/i, "Username may consist of a-z, 0-9, underscores, spaces and must begin with a letter." );
		valid = valid && checkRegexp( email, emailRegex, "eg. ui@jquery.com" );
		valid = valid && checkRegexp( password, /^([0-9a-zA-Z])+$/, "Password field only allow : a-z 0-9" );
		if ( valid ) 
		{
			//Need insert to DB here
			$.ajax(
			{
				url : "https://php-cs321316.rhcloud.com/index.php/vide/insert_account",      //if dont work user base_url()
				type : 'POST',
				datatype : "json",
				data : {"name":name.val(), "email":email.val(), "password":password.val()},
				success : function()
				{
					window.setTimeout(function() {
						 $(".alert").fadeTo(500, 0).slideUp(500, function(){
							  $(this).remove(); 
						 });
					}, 5000);
				},
				error : function(jqXHR, textStatus, errorThrown)
				{
					alert(textStatus + " " + errorThrown + " " + jqXHR);
				}
			});
			
			//hashing password?
			
			dialog.dialog( "close" );
		}
		return valid;
	}
	
	dialog = $( "#newuser-form" ).dialog(
	{
		autoOpen: false,
		height: 400,
		width: 550,
		modal: true,
		buttons: 
		{
			"Create an account": addUser,
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
		addUser();
	});
	$( "#create-user" ).button().on( "click", function() 
	{
	
	dialog.dialog( "open" );
	});
});