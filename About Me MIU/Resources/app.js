var mainWindow = Ti.UI.createWindow({
	title: "Mike Aurin"
});

var navWindow = Ti.UI.iOS.createNavigationWindow({
	window: mainWindow
});

var titleView = Ti.UI.createView({
	height: 50,
	backgroundColor: "black",
	top: 0
});

var border = Ti.UI.createView({
	backgroundColor: "black",
	height: 1,
	top: titleView.height + titleView.top
});

var titleLabel = Ti.UI.createLabel({
	text: "About Me Application",
	font: {fontSize: 24, fontFamily: "TrebuchetMS"},
	top: 10,
	width: "100%",
	textAlign: "center",
	color: "white"
});

var table = Ti.UI.createTableView({
	top: 50
});

var tableSection = Ti.UI.createTableViewSection({

	});

var JSON = require("JSON");

var info = [tableSection];
	
table.setData(info);

mainWindow.add(table);

var getInfo = function (){
	var infoWindow = Ti.UI.createWindow({
	    backgroundImage: "Sand-preview.jpg"
	});

	var infoText = Ti.UI.createLabel({
		text: this.desc,
		font: {fontFamily: "TrebuchetMS", fontSize: 22},
		color: "white",
		top: 30,
		width: "80%"
	});	
	
	
	infoWindow.add(infoText);
	navWindow.openWindow(infoWindow);
};

for(n in JSON.myInfo){

	for(m in JSON.myInfo[n].required){
		var infoRow = Ti.UI.createTableViewRow({
		title: JSON.myInfo[n].required[m].question,
		desc: JSON.myInfo[n].required[m].answer,
	    hasChild: true
	});

	tableSection.add(infoRow);
	infoRow.addEventListener("click", getInfo);
	
	};	
};


titleView.add(titleLabel);
mainWindow.add(titleView, border, table);
navWindow.open(); 
