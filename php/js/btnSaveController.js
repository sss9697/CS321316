$(function() 
{
	var dialog, form,
	name = $( "#name" ),
	allFields = $( [] ).add( name ),
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
	
	function saveMove() 
	{
		var valid = true;
		allFields.removeClass( "ui-state-error" );
		valid = valid && checkLength( name, "username", 3, 16 );
		valid = valid && checkRegexp( name, /^[a-z]([0-9a-z_\s])+$/i, "Username may consist of a-z, 0-9, underscores, spaces and must begin with a letter." );
		if ( valid ) 
		{			
			//Insert to DB here
			$.ajax(
			{
				url : "https://php-cs321316.rhcloud.com/index.php/vide/insert_account",
				type : 'POST',
				datatype : "json",
				data : {"name":name.val(), "email":email.val(), "password":hash},
				success : function()
				{
					alert("Account created!!");
				},
				error : function(jqXHR, textStatus, errorThrown)
				{
					alert(textStatus + " " + errorThrown + " " + jqXHR);
				}
			});
			
			dialog.dialog( "close" );
		}
		return valid;
	}
	
	dialog = $( "#save-form" ).dialog(
	{
		autoOpen: false,
		height: 400,
		width: 550,
		modal: true,
		buttons: 
		{
			"Create an account": saveMove,
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
		saveMove();
	});
	function savef2()
	{
		dialog.dialog( "open" );
	}
});

function savef()
{
	savef2();
}