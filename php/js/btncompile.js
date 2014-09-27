function compilef()
{
	var numberofcommand = $("#droppable").children().length;
	var test = $("#droppable").children().get(0).tagName;
	var test2 = test.children.get(0).tagName;
	alert(test + " " + test2);
}
