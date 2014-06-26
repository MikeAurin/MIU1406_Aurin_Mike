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
  height: 1150,
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
	hintText: "New Email Address",
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
	passwordMask: true,
	left: 10,
	width: 250,
	height: 40,
	clearButtonMode: Titanium.UI.INPUT_BUTTONMODE_ALWAYS
});

var emailAlert = Ti.UI.createLabel({
	top: 195,
	left: 50,
	font: {fontFamily: "Verdana", fontSize: 12},
	color: "white",
	text: "Email me about product news and updates",
});

var checkBox = Ti.UI.createButton({
    top: 190,
    left: 10,
    width: 30,
    height: 30,
    borderColor: '#white',
    borderWidth: 2,
    borderRadius: 3,
    backgroundColor: '#aaa',
    color: '#fff',
    value: false 
});
 
checkBox.on = function() {
    this.backgroundColor = '#007690';
    this.title='\u2713';
    this.value = true;
};
 
checkBox.off = function() {
    this.backgroundColor = '#aaa';
    this.title='';
    this.value = false;
};
 
checkBox.addEventListener('click', function(e) {
    if(false == e.source.value) {
        e.source.on();
    } else {
        e.source.off();
    }
});

var avatarLabel = Ti.UI.createLabel({
	top: 240,
	left: 10,
	font: {fontFamily: "Verdana", fontSize: 22},
	color: "white",
	text: "Change Avatar",
});

var avatar = Ti.UI.createImageView({
	top: 270,
	left: 10,
	width: 150,
	image: "me.jpg"
});



var aboutMeLabel = Ti.UI.createLabel({
	top: 480,
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
  top: 510,
  width: 300, 
  height : 300,
  color: "black"
});

var schoolLabel = Ti.UI.createLabel({
	top: 840,
	left: 10,
	font: {fontFamily: "Verdana", fontSize: 22},
	color: "white",
	text: "Select Your University",
});

var schools = Ti.UI.createPicker({
  top: 870
});

var data = [];
data[0]=Ti.UI.createPickerRow({title:'Full Sail University'});
data[1]=Ti.UI.createPickerRow({title:'University of Central Florida'});
data[2]=Ti.UI.createPickerRow({title:'Florida State University'});
data[3]=Ti.UI.createPickerRow({title:'University of Miami'});

schools.add(data);
schools.selectionIndicator = true;


schools.setSelectedRow(1); 

var saveButton = Ti.UI.createButton({
	bottom: 0,
	height: 50,
	width: "100%",
	backgroundColor: "black",
	title: "Save Changes",
	color: "white"
});

var saveChanges = function(){
	var confirm = Titanium.UI.createAlertDialog({
        title: 'Confirm Changes',
        message: 'Continue and Save?',
        buttonNames: ['Yes', 'No'],
        cancel: 1
});

confirm.addEventListener('click', function(e){
        if (e.cancel === e.index || e.cancel === true) {
        return false;
        }
        if (e.index === 0){
                profileWindow.close();
        }
});

confirm.show();

};
saveButton.addEventListener("click", saveChanges);


scrollView.add(view, title, userName, password, emailAlert, checkBox, avatarLabel, avatar, aboutMe, aboutMeLabel, schoolLabel, schools);
profileWindow.add(scrollView, saveButton);
profileWindow.open();
