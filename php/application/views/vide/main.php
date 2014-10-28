<html>
	<head>
		<meta charset="utf-8">
		<link rel="stylesheet" href="<?php echo base_url(). "css/3213.css" ?>" type="text/css">
		<link rel="stylesheet" href="//code.jquery.com/ui/1.11.1/themes/smoothness/jquery-ui.css">
		<script src="//code.jquery.com/jquery-1.10.2.js"></script>
		<script src="//code.jquery.com/ui/1.11.1/jquery-ui.js"></script>

		<script src = "https://plus.google.com/js/client:plusone.js"></script>
		
		<script src="<?php echo base_url(). "js/dialogNewUser.js" ?>"></script>
		<script src="<?php echo base_url(). "js/dialogSignin.js" ?>"></script>
		<script src="<?php echo base_url(). "js/oauth_google.js" ?>"></script>
		
		<script src="<?php echo base_url(). "js/viewEditorDiv.js" ?>"></script>
		
		<script src="<?php echo base_url(). "js/controllerLogout.js" ?>"></script>
		<script src="<?php echo base_url(). "js/controllerPlayerDivBackground.js" ?>"></script>
		<script src="<?php echo base_url(). "js/controllerCompile.js" ?>"></script>
		<script src="<?php echo base_url(). "js/controllerCharacterSprite.js" ?>"></script>
		<script src="<?php echo base_url(). "js/controllerPlayerMovement.js" ?>"></script>		
		<script src="<?php echo base_url(). "js/controllerLoadMove.js" ?>"></script>	
		<script src="<?php echo base_url(). "js/controllerSaveMove.js" ?>"></script>		
		<script src="<?php echo base_url(). "js/controllerBinFunction.js" ?>"></script>	
		<script src="<?php echo base_url(). "js/controllerKeypress.js" ?>"></script>
<input type="text" id="keypress">


<script>
document.onkeydown = keydownFunction;
document.onkeyup = keyupFunction;

function keydownFunction() {
var key = ( window.event ) ? event.keyCode : e.keyCode;
document.getElementById("keypress").value="pressed";
if(event.shiftKey){
if(key == 67)//c:compile
    document.getElementById("keypress").style.backgroundColor = "red";
if(key == 76)//l:logout
    document.getElementById("keypress").style.backgroundColor = "green";
if(key == 84)//t:toggle grid
    document.getElementById("keypress").style.backgroundColor = "yellow";
if(key == 80)//p:play
    document.getElementById("keypress").style.backgroundColor = "cyan";
}
}
</script>		
		
		<script src="<?php echo base_url(). "js/commandprocessor.js" ?>"></script>
		<script src="<?php echo base_url(). "js/events.js" ?>"></script>

		
		<script src="<?php echo base_url(). "js/controllerSession.js" ?>"></script>
		<script src="<?php echo base_url(). "js/json-serialization.js" ?>"></script>
		<title>Visual IDE Group 16</title>
		
		<div id="newuser-form" title="Create new user">
			<p class="validateTips">All form fields are required.</p>
			<form>
				<fieldset>
					<label for="name">Name:   </label>
					<input type="text" name="name" id="name" value="" class="text ui-widget-content ui-corner-all"><br>
					<label for="email">Email:  </label>
					<input type="text" name="email" id="email" value="" class="text ui-widget-content ui-corner-all"><br>
					<label for="password">Password:</label>
					<input type="password" name="password" id="password" value="" class="text ui-widget-content ui-corner-all"><br>
					<!-- Allow form submission with keyboard without duplicating the dialog button -->
					<input type="submit" tabindex="-1" style="position:absolute; top:-1000px">
				</fieldset>
			</form>
		</div>
		
		<div id="signin-form" title="Sign in">
			<p class="validateTips">All form fields are required.</p>
			<form>
				<fieldset>
					<label for="email">Email:  </label>
					<input type="text" name="email" id="email" value="" class="text ui-widget-content ui-corner-all"><br>
					<label for="password">Password:</label>
					<input type="password" name="password" id="password" value="" class="text ui-widget-content ui-corner-all"><br>
					<label id="noAccoutLabel" class="errorMsg">Email/Password is wrong<br /></label>
					<!-- Allow form submission with keyboard without duplicating the dialog button -->
					<input type="submit" tabindex="-1" style="position:absolute; top:-1000px">
				</fieldset>
			</form>
		</div>
		<div id="login-page-image">
			<img src="img/1.gif" width="50" height="50">
			<img src="img/2.gif" width="50" height="50">
			<img src="img/3.gif" width="50" height="50">
			<img src="img/4.gif" width="50" height="50">
			<img src="img/5.gif" width="50" height="50">
		</div>
		<div id="login-page-controls">
			<button id="create-user">New user</button> 
			<button id="validate-user">Sign in</button> 
			<br/><br/>
			<div id="gConnect" class="button">
				<button class="g-signin"
				  data-scope="email"
				  data-clientid="177325121472-1rgfp4ninj9t32d6pb1v68vm8cb7avie.apps.googleusercontent.com"
				  data-callback="onSignInCallback"
				  data-theme="dark"
				  data-cookiepolicy="single_host_origin">
				</button>
			</div>
		</div>
		
		<button id="logout-btn" type="button">Logout</button>
		
		<div id="maindiv">
			<div id="header">
				<label id="welcomelabel"></label>
			</div>
			<div id="editordiv">
				<div id="movecontainer">
					<h1 class="ui-widget-header">Commands</h1>
					<div id="movelist">
						<h2><a href="#">Moves</a></h2>
						<div>
							<ul id="drag-elements">
								<li id="moveleft" class="command">
									<div id="movediv">
										MOVE LEFT: <input type="number" name="edittxt" id="edittxt" value="1" max="999" min="-999" />
									</div>
								</li>
								<li id="moveright" class="command">
									<div id="movediv">
										MOVE RIGHT: <input type="number" name="edittxt" id="edittxt" value="1" max="999" min="-999" />
									</div>
								</li>
								<li id="moveup" class="command">
									<div id="movediv">
										MOVE UP: <input type="number" name="edittxt" id="edittxt" value="1" max="999" min="-999" />
									</div>
								</li>
								<li id="movedown" class="command">
									<div id="movediv">
										MOVE DOWN: <input type="number" name="edittxt" id="edittxt" value="1" max="999" min="-999" />
									</div>
								</li>
								<li id="movesetx" class="command">
									<div id="movediv">
										SET X: <input type="number" name="edittxt" id="edittxt" value="1" max="999" min="-999" />
									</div>
								</li>
								<li id="movesety" class="command">
									<div id="movediv">
										SET Y: <input type="number" name="edittxt" id="edittxt" value="1" max="999" min="-999" />
									</div>
								</li>
							</ul>
						</div>
						<h2><a href="#">Loops, variables & conditions</a></h2>
						<div>
							<ul id="drag-elements">
								<li id="moveloopo" class="command">
									<div id="movediv">
										OPEN LOOP
									</div>
								</li>
								<li id="moveloopc" class="command">
									<div id="movediv">
										CLOSE LOOP: <input type="number" name="edittxt" id="edittxt" value="1" max="999" min="-999" />
									</div>
								</li>
								
								<li id="moveifopen" class="command">
									<div id="movediv">
										If: <select id="moveifopenfirstlist">
										  <option value="i">i</option>
										  <option value="j">j</option>
										  <option value="k">k</option>
										  <option value="x">x</option>
										  <option value="y">y</option>
										</select>
										
										<select id="moveifopensecondlist">
										  <option value=">">></option>
										  <option value="<"><</option>
										  <option value="=">=</option>
										  <option value="!">!</option>
										</select>
										
										<input type="number" name="edittxt" id="edittxt" value="1" max="999" min="-999" />
									</div>
								</li>
								
								<li id="moveifclose" class="command">
									<div id="movediv">
										End If 
									</div>
								</li>
								
								<li id="movewhileopen" class="command">
									<div id="movediv">
										While: <select id="movewhileopenfirstlist">
										  <option value="i">i</option>
										  <option value="j">j</option>
										  <option value="k">k</option>
										  <option value="x">x</option>
										  <option value="y">y</option>
										</select>
										
										<select id="movewhileopensecondlist">
										  <option value=">">></option>
										  <option value="<"><</option>
										  <option value="=">=</option>
										  <option value="!">!</option>
										</select>
										
										<input type="number" name="edittxt" id="edittxt" value="1" max="999" min="-999" />
									</div>
								</li>
								
								<li id="movewhileclose" class="command">
									<div id="movediv">
										End While 
									</div>
								</li>
								
								<li id="moveforopen" class="command">
									<div id="movediv">
										For: <select id="moveforopenfirstlist">
										  <option value="i">i</option>
										  <option value="j">j</option>
										  <option value="k">k</option>
										</select>
										=																			
										<input type="number" name="edittxt" id="edittxt" value="1" max="999" min="-999" />
										;
										
										<select id="moveforopensecondlist">
										  <option value=">">></option>
										  <option value="<"><</option>
										  <option value="=">=</option>
										  <option value="!">!</option>
										</select>				
										
										<input type="number" name="edittxt" id="edittxt2" value="1" max="999" min="-999" />
										;
										<select id="moveforopenthirdlist">
										  <option value="+">+</option>
										  <option value="-">-</option>
										  <option value="*">*</option>
										  <option value="/">/</option>
										  <option value="%">%</option>
										</select>				
										
										<input type="number" name="edittxt" id="edittxt3" value="1" max="999" min="-999" />
										
									</div>
								</li>
								
								<li id="moveforclose" class="command">
									<div id="movediv">
										End For 
									</div>
								</li>
								
								<li id="movevariable" class="command">
									<div id="movediv">
										<select id="movevariablefirstlist">
										  <option value="i">i</option>
										  <option value="j">j</option>
										  <option value="k">k</option>
										</select>
										
										<select id="movevariablesecondlist">
										  <option value="=">=</option>
										  <option value="+">+</option>
										  <option value="-">-</option>
										  <option value="*">*</option>
										  <option value="/">/</option>
										  <option value="%">%</option>
										</select>
										
										<input type="number" name="edittxt" id="edittxt" value="1" max="999" min="-999" />
										
									</div>
								</li>
							</ul>
						</div>
						<h2><a href="#">Other commands</a></h2>
						<div>
							<ul id="drag-elements">
								<li id="movechartoggle" class="command">
									<div id="movediv">
										TOGGLE CHARACTER
									</div>
								</li>
								<li id="movebackground" class="command">
									<select id="movebackgroundlist" class="backgroundSelectedCom">
										  <option value="" disabled selected>Background</option>
										  <option value="#cccccc" class="Grey">Grey</option>
										  <option value="#000000" class="Black">Black</option>
										  <option value="#ffffff" class="White">White</option>
										  <option value="#0000ff" class="Blue">Blue</option>
										  <option value="#ff0000" class="Red">Red</option>
										  <option value="#00ff00" class="Green">Green</option>
										  <option value="#ffff00" class="Yellow">Yellow</option>
										  <option value="#00ffff" class="Cyan">Cyan</option>
										  <option value="#ff69b4" class="Pink">Pink</option>
										  <option value="#c8a2c8" class="Lilac">Lilac</option>
									</select>
								</li>
								<li id="movechangechar" class="command">
									<select id="defaultCharListCom" class="characterSelected">
										<option value="" disabled selected>Change char</option>
										<option value="1">Yellow Mouse</option>
										<option value="2">Orange Lizard</option>
										<option value="3">Green Elf</option>
										<option value="4">Blue Turtle</option>
										<option value="5">Larry</option>
									</select>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<div id="editorspace">
					<h1 class="ui-widget-header">Editor</h1>
					<div class="ui-widget-content">
						<ul id="droppable">
							<div class="placeholder">drag command here</div>
						</ul>
					</div>
				
					<div id="editorcontrol" align="center">
						<div id="saveDiv" style="display: none;">
							<label>Save Name:</label><input type="text" placeholder="esc to hide me" id="savename"></input><button id="save-ok-btn">Save</button>
						</div>
						<button id="clear-btn">Clear</button>&nbsp;&nbsp;&nbsp;
						<button id="save-btn">Save</button>&nbsp;&nbsp;&nbsp;
						
						<select id="loadList">
						  <option value="" disabled selected>Load</option>
						</select>&nbsp;&nbsp;&nbsp;					
						<button id="delete-btn">Delete</button>
					</div>
				</div>
			</div>

			<div id="playerdiv">
				 <img src= "<?php echo base_url(). "img/1.gif" ?> " height="50" width="50" id="sprite" value="hide"> 
				 <img src= "<?php echo base_url(). "img/1.gif" ?> " height="50" width="50" id="sprite2" value="hide" style="display: none;"> 
			</div>
			<div id="controldiv">
				<button id="compile-btn">Compile</button>&nbsp;&nbsp;&nbsp;
				<button id="toggleGrid-btn" value="show">Toggle Grid</button>&nbsp;&nbsp;&nbsp;
				<button id="toggleChar-btn" value="hide">Toggle Character</button>&nbsp;&nbsp;&nbsp;
				
				<select id="defaultBackgroundList" class="backgroundSelected">
					  <option value="" disabled selected>Change default background</option>
					  <option value="#cccccc" class="Grey">Grey</option>
					  <option value="#000000" class="Black">Black</option>
					  <option value="#ffffff" class="White">White</option>
					  <option value="#0000ff" class="Blue">Blue</option>
					  <option value="#ff0000" class="Red">Red</option>
					  <option value="#00ff00" class="Green">Green</option>
					  <option value="#ffff00" class="Yellow">Yellow</option>
					  <option value="#00ffff" class="Cyan">Cyan</option>
					  <option value="#ff69b4" class="Pink">Pink</option>
					  <option value="#c8a2c8" class="Lilac">Lilac</option>
				</select>&nbsp;&nbsp;&nbsp;
				
				<select id="defaultCharList" class="characterSelected">
					<option value="" disabled selected>Change default char</option>
					<option value="1"> Yellow Mouse</option>
					<option value="2">Orange Lizard</option>
					<option value="3">Green Elf</option>
					<option value="4">Blue Turtle</option>
					<option value="5">Larry</option>
				</select>
				<img src= "<?php echo base_url(). "img/1.gif" ?> " height="35" width="35" id="placeholderSprite">
			</div>		
		</div>
	</head>
</html>