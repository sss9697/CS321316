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
		toggleCharf(0);
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
		defaultBackgroundCom(param);
	}
	
	if(com === "defaultChar")
	{
		defaultCharf(param);
	}
}
