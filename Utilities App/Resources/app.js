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

var openButton = Ti.UI.createButton({
	bottom: 0,
	height: 50,
	width: "100%",
	color: "white",
	title: "Open",
	backgroundColor: "black"
});

mainWin.add(title, image, openButton);
mainWin.open();