Ti.UI.setBackgroundColor("white");

var mainWin = Ti.UI.createWindow({
	backgroundColor: "#333",
	top: 20
});

var title = Ti.UI.createLabel({
	text: "Utilities",
	textAlign: "center",
	top: 30,
	font: {fontFamily: "Verdana", fontSize: 42},
	color: "white"
});

var image = Ti.UI.createImageView({
	image: "settings.ico",
	top: 70,
	width: "80%"
});

var validLogin = "Mikeaurin@fullsail.edu";
var validPassword = "fullsail";

var userInput = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color:'black',
	hintText: "Username",
	bottom: 150,
	align: "center",
	width: 250,
	height: 40,
	clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ALWAYS
});

var passwordInput = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color:'black',
	hintText: "Password",
	passwordMask: true,
	bottom: 90,
	align: "center",
	width: 250,
	height: 40,
	clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ALWAYS
});

var openButton = Ti.UI.createButton({
	bottom: 0,
	height: 50,
	width: "100%",
	color: "white",
	title: "Login",
	backgroundColor: "black"
});

var verify = function(){
	var i;
	if(i = validLogin){
		var open = require("options");
			}else{
		alert("Incorrect Login");
	}	
};

openButton.addEventListener("click", verify);

mainWin.add(title, image, userInput, passwordInput, openButton);
mainWin.open();
