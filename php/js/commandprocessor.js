function processCommand(com, param)
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
	
	if(com === "saveok")
	{
		saveok();
	}
	
	if(com === "load")
	{
		loadf(param);
	}
	
	if(com === "toggleGrid")
	{
		toggleGridf(param);
	}
	
	if(com === "toggleChar")
	{
		toggleCharf();
	}
	
	if(com === "deleteMove")
	{
		deleteMovef();
	}
	
	if(com === "defaultBackground")
	{
		defaultBackgroundf(param);
	}
	
	if(com === "defaultBackgroundCom")
	{
		updateBackgroundCom(param)
	}
}
