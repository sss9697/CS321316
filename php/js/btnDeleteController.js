function deleteMovef()
{
	var name = $('#loadList :selected').text();
	
	$.ajax(
	{
		url : "https://php-cs321316.rhcloud.com/index.php/vide/delete_move",
		type : 'POST',
		datatype : "json",
		data : {"Name":name},
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
