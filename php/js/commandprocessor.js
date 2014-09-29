function processCommand(com)
{
	if( com === "logout")
	{
		logoutf();
	}
	
	if( com === "clear")
	{
		clearf();
	}
	
	if( com === "compile")
	{
		compilef();
	}
	
	if(com === "save")
	{
		savef();
	}
}
