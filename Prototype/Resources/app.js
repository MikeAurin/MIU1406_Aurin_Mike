Titanium.UI.setBackgroundColor('#000');

var tabGroup = Titanium.UI.createTabGroup();

var win1 = Titanium.UI.createWindow({  
    title:'New Releases',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'New Releases',
    window:win1
});

var label1 = Titanium.UI.createLabel({
	color:'#999',
	text:'New Releases',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});

win1.add(label1);

var win2 = Titanium.UI.createWindow({  
    title:'Recommendations',
    backgroundColor:'#fff',
    url: "data.js",
});
var tab2 = Titanium.UI.createTab({  
    icon:'KS_nav_ui.png',
    title:'Recommendations',
    window:win2
});

var label2 = Titanium.UI.createLabel({
	color:'#999',
	text:'Recommendations',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto',
	
});

win2.add(label2);

var win3 = Ti.UI.createWindow({
	title: "My Picks",
	backgroundColor: "#fff"
});

var tab3 =Ti.UI.createTab({
	title: "My Picks",
	icon:'KS_nav_ui.png',
	window: win3
});

var label3= Ti.UI.createLabel({
	color:'#999',
	text:'My Picks',
	font:{fontSize:20,fontFamily:'Helvetica Neue'},
	textAlign:'center',
	width:'auto'
});
	
win3.add(label3);

tabGroup.addTab(tab1);  
tabGroup.addTab(tab2); 
tabGroup.addTab(tab3); 


// open tab group
tabGroup.open();
