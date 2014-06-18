var rentWindow = Ti.UI.createWindow({
	backgroundColor: "#d92332"
});

var thanks = Ti.UI.createLabel({
	font: {fontFamily: "Verdana", fontSize: 22, fontWeight: "bold"},
	text: "Thank you!",
	color: "white",
	textAlign: "center",
	top: 80
});

var confirm = Ti.UI.createLabel({
	font: {fontFamily: "Verdana", fontSize: 18},
	text: "Your rental will arrive at your address soon.",
	color: "white",
	textAlign: "center",
	top: 110
});

var backButton = Ti.UI.createButton({
	bottom: 0,
	backgroundColor: "white",
	color: "#d92332",
	title: "Back",
	textAlign: "center",
	height: 50,
	width: "100%"
});

var closeWindow = function(){
	rentWindow.close({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
};

backButton.addEventListener("click", closeWindow);

rentWindow.add(thanks, confirm, backButton);
rentWindow.open();
