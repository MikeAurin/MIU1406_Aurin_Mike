Titanium.UI.setBackgroundColor('white');

var mainWin = Ti.UI.createWindow({
	backgroundColor: "#d92332"
});

var logo = Ti.UI.createLabel({
	backgroundImage: "redbox.png",
	top: 50,
	height: 120,
	width: "90%"
});

var header = Ti.UI.createLabel({
	text: "Streaming and Rental Service",
	font: {fontFamily: "Verdana", fontSize: 18},
	color: "white",
	top: 160,
	align: "center"
});

var logIn = Ti.UI.createButton({
	width: "60%",
	bottom: 10,
	height: 50,
	title: "Log In",
	borderRadius: 6,
	color: "d92332",
	font: {fontFamily: "Verdana", fontSize: 22},
	backgroundColor: "white"
});

var signUp = Ti.UI.createButton({
	width: "60%",
	bottom: 80,
	height: 50,
	title: " Sign Up",
	borderRadius: 6,
	color: "d92332",
	font: {fontFamily: "Verdana", fontSize: 22},
	backgroundColor: "white"
});

var openApp = function(){
	var launch = require('info');
};

signUp.addEventListener("click", openApp);
logIn.addEventListener("click", openApp);

mainWin.add(logo, header, logIn, signUp);
mainWin.open();