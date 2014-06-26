var options = Ti.UI.createWindow({
	backgroundColor: "#333",
	top: 20
});

var welcomeText = Ti.UI.createLabel({
	text: "Hello, Mike!",
	textAlign: "center",
	top: 30,
	font: {fontFamily: "Verdana", fontSize: 42},
	color: "white"
});

user = Ti.UI.createImageView({
	image: "me.jpg",
	borderRadius: 5,
	top: 90,
	height: 220,
});

var profileButton = Ti.UI.createButton({
    title: "My Profile",
    backgroundColor:'white',
    bottom: 80,
    height:45,
    width: "80%",
    borderRadius: 5
});

var profileSettings = function(){
	var goToProfile = require("profile");
};

profileButton.addEventListener("click", profileSettings);

var locationButton = Ti.UI.createButton({
    title: "Location Settings",
    backgroundColor:'white',
    bottom: 20,
    height:45,
    width: "80%",
    borderRadius: 5
});

var locationSettings = function(){
	var goToLocation = require("location");
};

locationButton.addEventListener("click", locationSettings);


options.add(welcomeText, user, profileButton, locationButton);
options.open();
