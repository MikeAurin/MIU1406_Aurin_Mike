var profileWindow = Ti.UI.createWindow({
	top: 20,
	backgroundColor: "#333"
});

var scrollView = Ti.UI.createScrollView({
  contentWidth: 'auto%',
  contentHeight: 'auto',
  showVerticalScrollIndicator: true,
  showHorizontalScrollIndicator: true,
  height: '100%',
  width: '100%'
});

var view = Ti.UI.createView({
  backgroundColor:'#333',
  borderRadius: 10,
  top: 0,
  height: 2000,
  width: 1000
});

var title = Ti.UI.createLabel({
	top: 10,
	font: {fontFamily: "Verdana", fontSize: 30},
	color: "white",
	text: "Update Your Profile"
});

var userName = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color:'black',
	hintText: "New Username",
	top: 70,
	left: 10,
	width: 250,
	height: 40,
	clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ALWAYS
});

var password = Ti.UI.createTextField({
	borderStyle: Ti.UI.INPUT_BORDERSTYLE_ROUNDED,
	color:'black',
	hintText: "New Password",
	top: 130,
	left: 10,
	width: 250,
	height: 40,
	clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ALWAYS
});

var avatarLabel = Ti.UI.createLabel({
	top: 190,
	left: 10,
	font: {fontFamily: "Verdana", fontSize: 22},
	color: "white",
	text: "Change Avatar",
});

var avatar = Ti.UI.createImageView({
	top: 220,
	left: 10,
	width: 150,
	image: "me.jpg"
});

var saveButton = Ti.UI.createButton({
	bottom: 0,
	height: 50,
	width: "100%",
	backgroundColor: "black",
	title: "Save Changes",
	color: "white"
});

var aboutMeLabel = Ti.UI.createLabel({
	top: 430,
	left: 10,
	font: {fontFamily: "Verdana", fontSize: 22},
	color: "white",
	text: "Update Bio",
});

var aboutMe = Ti.UI.createTextArea({
  hintText: "Tell",
  font: {fontSize: 20, fontFamily: "Verdana"},
  textAlign: 'left',
  borderRadius: 3,
  top: 460,
  width: 300, 
  height : 300,
  color: "black"
});

var genderLabel = Ti.UI.createLabel({
	top: 780,
	left: 10,
	font: {fontFamily: "Verdana", fontSize: 22},
	color: "white",
	text: "Gender",
});

var gender = Ti.UI.createPicker({
  	top: 810,
  	height: 60,
 	left: 10,
 	width: 300
});

var data = [];
data[0]=Ti.UI.createPickerRow({title:'Male'});
data[1]=Ti.UI.createPickerRow({title:'Female'});


gender.add(data);
gender.selectionIndicator = true;

var saveChanges = function(){
	var options = require("options");
};

saveButton.addEventListener("click", saveChanges);

scrollView.add(view, title, userName, password, avatarLabel, avatar, aboutMe, aboutMeLabel, genderLabel, gender);
profileWindow.add(scrollView, saveButton);
profileWindow.open();
