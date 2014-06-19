
var mainWin = Ti.UI.createWindow({
	backgroundColor: "#d92332",
	title: "New Releases",
});

var navWin = Ti.UI.iOS.createNavigationWindow({
	window: mainWin
});

var backButton = Ti.UI.createButton({
	bottom: 0,
	height: 50,
	width: "100%",
	backgroundColor: "white",
	color: "#d92332",
	title: "Back",
	textAlign: "center",
});

var newReleaseImages = Ti.UI.createImageView({
	image: "images/placeholder.jpg",
	left: 10,
	align: "center",
	top: 70,
	bottom: 50
});

var closeNewRelease = function(){
	var goBack = require("info");
	navWin.close();
};

backButton.addEventListener("click", closeNewRelease);

navWin.add(backButton, newReleaseImages);

navWin.open();


