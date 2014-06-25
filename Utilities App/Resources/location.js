var locationPage = Ti.UI.createWindow({
	backgroundColor: "#333",
	top: 20
});

var checkbox = Ti.UI.createButton({
    title: '',
    top: 10,
    right: 10,
    width: 30,
    height: 30,
    borderColor: '#666',
    borderWidth: 2,
    borderRadius: 3,
    backgroundColor: '#aaa',
    backgroundImage: 'none',
    color: '#fff',
    font:{fontSize: 25, fontWeight: 'bold'},
    value: false //value is a custom property in this casehere.
});
 
//Attach some simple on/off actions
checkbox.on = function() {
    this.backgroundColor = '#007690';
    this.title='\u2713';
    this.value = true;
};
 
checkbox.off = function() {
    this.backgroundColor = '#aaa';
    this.title='';
    this.value = false;
};
 
checkbox.addEventListener('click', function(e) {
    if(false == e.source.value) {
        e.source.on();
    } else {
        e.source.off();
    }
});

var picker = Ti.UI.createPicker({
  top:200
});

var data = [];
data[0]=Ti.UI.createPickerRow({title:'University of Central Florida'});
data[1]=Ti.UI.createPickerRow({title:'Full Sail University'});
data[2]=Ti.UI.createPickerRow({title:'Florida State University'});
data[3]=Ti.UI.createPickerRow({title:'University of Miami'});

picker.add(data);
picker.selectionIndicator = true;



// must be after picker has been displayed
picker.setSelectedRow(0, 2, false); // select Mangos

locationPage.add(checkbox);
locationPage.open();
