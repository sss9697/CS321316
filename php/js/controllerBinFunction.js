function deleteMovef()
{
	var name = $('#loadList :selected').text();
	
	$.ajax(
	{
		url : "https://php-cs321316.rhcloud.com/index.php/vide/delete_move",
		type : 'POST',
		datatype : "json",
		data : {"PID":uID, "Name":name},
		success : function()
		{
			alert(name+ " Deleted");
			$("#loadList :selected").remove();
		},
		error : function(jqXHR, textStatus, errorThrown)
		{
			alert(textStatus + " " + errorThrown + " " + jqXHR);
		}
	});
}

function clearf()
{
	$("#editorspace ul").empty();
	$( "<div class=\"placeholder\"></div>").text("drag command here").appendTo("#editorspace ul");
}
