var options = Ti.UI.createWindow({
	backgroundColor: "#333",
	top: 20
});
var profileButton = Ti.UI.createButton({
    title: "My Profile",
    backgroundColor:'white',
    top: 40,
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
    top: 100,
    height:45,
    width: "80%",
    borderRadius: 5
});

var locationSettings = function(){
	var goToLocation = require("location");
};

locationButton.addEventListener("click", locationSettings);


var aboutUsButton = Ti.UI.createButton({
    title: "About Us",
    backgroundColor:'white',
    top: 160,
    height:45,
    width: "80%",
    borderRadius: 5
});

var aboutUsSettings = function(){
	var aboutUs = require("aboutUs");
};

aboutUsButton.addEventListener("click", aboutUsSettings);


options.add(profileButton, locationButton, aboutUsButton);
options.open();
