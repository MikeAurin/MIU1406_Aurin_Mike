
var mainWindow = Ti.UI.createWindow({
	backgroundColor: "#d92332",
	title: "Suggestions"
});

var navWin = Ti.UI.iOS.createNavigationWindow({
	window: mainWin,
	title: "Suggestions"
});

var backButton = Ti.UI.createButton({
	bottom: 0,
	height: 50,
	width: "100%",
	backgroundColor: "#d92332",
	color: "white",
	title: "Back",
	textAlign: "center",
});

var closeNewRelease = function(){
	var goBack = require("info");
	navWin.close();
};

backButton.addEventListener("click", closeNewRelease);

var filler = [
	{title: "Generated Movie", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula malesuada nisl, vitae aliquam odio bibendum nec. Donec diam justo, hendrerit eget lectus sit amet, laoreet vehicula risus. Cras eget elementum odio, id interdum lectus. Curabitur a congue dui, eu elementum purus. Nullam eros arcu, tempus eget varius non, sodales eu metus. Fusce libero turpis, luctus at quam vitae, rhoncus adipiscing felis. Curabitur euismod, nunc rhoncus gravida lobortis, nisl ante eleifend justo, id ullamcorper quam purus id lacus."}, 
	{title: "Generated Movie", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula malesuada nisl, vitae aliquam odio bibendum nec. Donec diam justo, hendrerit eget lectus sit amet, laoreet vehicula risus. Cras eget elementum odio, id interdum lectus. Curabitur a congue dui, eu elementum purus. Nullam eros arcu, tempus eget varius non, sodales eu metus. Fusce libero turpis, luctus at quam vitae, rhoncus adipiscing felis. Curabitur euismod, nunc rhoncus gravida lobortis, nisl ante eleifend justo, id ullamcorper quam purus id lacus."}, 
	{title: "Generated Movie", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula malesuada nisl, vitae aliquam odio bibendum nec. Donec diam justo, hendrerit eget lectus sit amet, laoreet vehicula risus. Cras eget elementum odio, id interdum lectus. Curabitur a congue dui, eu elementum purus. Nullam eros arcu, tempus eget varius non, sodales eu metus. Fusce libero turpis, luctus at quam vitae, rhoncus adipiscing felis. Curabitur euismod, nunc rhoncus gravida lobortis, nisl ante eleifend justo, id ullamcorper quam purus id lacus."}, 
	{title: "Generated Movie", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula malesuada nisl, vitae aliquam odio bibendum nec. Donec diam justo, hendrerit eget lectus sit amet, laoreet vehicula risus. Cras eget elementum odio, id interdum lectus. Curabitur a congue dui, eu elementum purus. Nullam eros arcu, tempus eget varius non, sodales eu metus. Fusce libero turpis, luctus at quam vitae, rhoncus adipiscing felis. Curabitur euismod, nunc rhoncus gravida lobortis, nisl ante eleifend justo, id ullamcorper quam purus id lacus."}, 
	{title: "Generated Movie", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula malesuada nisl, vitae aliquam odio bibendum nec. Donec diam justo, hendrerit eget lectus sit amet, laoreet vehicula risus. Cras eget elementum odio, id interdum lectus. Curabitur a congue dui, eu elementum purus. Nullam eros arcu, tempus eget varius non, sodales eu metus. Fusce libero turpis, luctus at quam vitae, rhoncus adipiscing felis. Curabitur euismod, nunc rhoncus gravida lobortis, nisl ante eleifend justo, id ullamcorper quam purus id lacus."}, 
	{title: "Generated Movie", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula malesuada nisl, vitae aliquam odio bibendum nec. Donec diam justo, hendrerit eget lectus sit amet, laoreet vehicula risus. Cras eget elementum odio, id interdum lectus. Curabitur a congue dui, eu elementum purus. Nullam eros arcu, tempus eget varius non, sodales eu metus. Fusce libero turpis, luctus at quam vitae, rhoncus adipiscing felis. Curabitur euismod, nunc rhoncus gravida lobortis, nisl ante eleifend justo, id ullamcorper quam purus id lacus."}, 
];


var table = Ti.UI.createTableView({
	top: 20
});

if(Ti.Platform.name === "iPhone OS"){
	table.style = Ti.UI.iPhone.TableViewStyle.GROUPED;
}

// Table View Section
var tableSection = Ti.UI.createTableViewSection({
	headerTitle: "Selections based on your viewing history."
});

var getDetail = function(){
	var detailWindow = Ti.UI.createWindow({
		backgroundColor: "#f5f5f5"
	});
	
	var detailTitleView = Ti.UI.createView({
		height: 65,
		backgroundColor: "#fff",
		top: 0
	});
	
	var detailBorder = Ti.UI.createView({
		backgroundColor: "#dbdbdb",
		height: 1,
		top: detailTitleView.height + detailTitleView.top
	});
	
	var detailTitleLabel = Ti.UI.createLabel({
		text: this.title,
		font: {fontSize: 20, fontFamily: "Verdana", fontWeight: "bold"},
		top: 30,
		width: "100%", 
		textAlign: "center"
	});
	
	var detailText = Ti.UI.createLabel({
		text: this.desc,
		font: {fontSize: 14, fontFamily: "Verdana"},
		top : detailBorder.height + detailBorder.top + 40,
		left: 10,
		right: 10
	});
	
	var closeButton = Ti.UI.createLabel({
		backgroundColor: "#333",
		text: " Close Window",
		color: "#fff",
		height: 50,
		font: {fontSize: 12, fontFamily: "Arial"},
		width: "100%",
		bottom: 0,
		textAlign: "center",
		});

	var closeWindow = function(){
		detailWindow.close({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});
	};

	closeButton.addEventListener("click", closeWindow);

	detailTitleView.add(detailTitleLabel);
	detailWindow.add(detailTitleView, detailBorder, detailText, closeButton);
	detailWindow.open({transition: Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT});

};

for(var i=0, j=filler.length; i<j; i++){
	var tableRow = Ti.UI.createTableViewRow({
		title: filler[i].title,
		desc: filler[i].description,
		hasDetail:true
	});
	tableSection.add(tableRow);
	tableRow.addEventListener("click", getDetail);
} 

var movieArray = [tableSection];
table.setData(movieArray);

mainWin.add(table, backButton);
navWin.open();
