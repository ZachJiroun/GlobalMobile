var w = Titanium.UI.currentWindow; // get current window

// VERTICAL VIEW
var v = Ti.UI.createView({
	layout:'vertical',
	backgroundColor:'#800000'
});
w.add(v);

// BACK BUTTON
var backButton = Ti.UI.createButton({
	title:'Back',
	color: '#ffcd00',
	left:'2%',
	top:'5%'
});
v.add(backButton);
	//closes the map window
backButton.addEventListener('click', function(e) {
	w.close(); // close window
});

// MAP IMAGE
var mapImage = Ti.UI.createImageView({
	image:'/images/World-Map.png',
	width:'100%',
});
v.add(mapImage);

//LIST VIEW FOR NATIONS
var listView = Ti.UI.createListView({top:'10%'});
var sections = [];

//created seperate list sections based on continent and added nations under the properties sections
//pushed everything into an array so that way at the end i can just set this array equal to the listView.sections property
var africa = Ti.UI.createListSection({ headerTitle: 'Africa'});
var africaData = [
    {properties: { title: 'Algeria', id: 0}},
   	{properties: { title: 'Egypt', id: 1}},
    {properties: { title: 'Ethiopia', id: 2}},
    {properties: { title: 'Niger', id: 3}},
    {properties: { title: 'Nigeria', id: 4}},
    {properties: { title: 'Somalia', id: 5}},
    {properties: { title: 'South Africa', id: 6}},
];
africa.setItems(africaData);
sections.push(africa);

var asia = Ti.UI.createListSection({ headerTitle: 'Asia'});
var asiaData = [
	{properties: { title: 'China', id: 7}},
   	{properties: { title: 'India', id: 8}},
   	{properties: { title: 'Indonesia', id: 9}},
   	{properties: { title: 'Japan', id: 10}},
   	{properties: { title: 'Malaysia', id: 11}},
   	{properties: { title: 'Pakistan', id: 12}},
   	{properties: { title: 'Philippines', id: 13}},
];
asia.setItems(asiaData);
sections.push(asia);

var australia = Ti.UI.createListSection({ headerTitle: 'Australia'});
var australiaData = [
	{properties: { title: 'Australia', id: 14}},
   	{properties: { title: 'New Zealand', id: 15}},
];
australia.setItems(australiaData);
sections.push(australia);

var centralAmerica = Ti.UI.createListSection({ headerTitle: 'Central America and the Antiles'});
var centralAmericaData = [
	{properties: { title: 'Bahamas', id: 16}},
    {properties: { title: 'Costa Rica', id: 17}},
    {properties: { title: 'Cuba', id: 18}},
    {properties: { title: 'Dominican Republic', id: 19}},
    {properties: { title: 'El Salvador', id: 20}},
    {properties: { title: 'Guatemala', id: 21}},
    {properties: { title: 'Honduras', id: 22}},
    {properties: { title: 'Panama', id: 23}},
];
centralAmerica.setItems(centralAmericaData);
sections.push(centralAmerica);

var europe = Ti.UI.createListSection({ headerTitle: 'Europe'});
var europeData = [
	{properties: { title: 'England', id: 24}},
    {properties: { title: 'France', id: 25}},
    {properties: { title: 'Germany', id: 26}},
    {properties: { title: 'Hungary', id: 27}},
    {properties: { title: 'Italy', id: 28}},
    {properties: { title: 'Russia', id: 29}},
    {properties: { title: 'Turkey', id: 30}},
];
europe.setItems(europeData);
sections.push(europe);

var northAmerica = Ti.UI.createListSection({ headerTitle: 'North America'});
var northAmericaData = [
	{properties: { title: 'Canada', id: 31}},
    {properties: { title: 'Mexico', id: 32}},
    {properties: { title: 'United States of America', id: 33}},
];
northAmerica.setItems(northAmericaData);
sections.push(northAmerica);

var southAmerica = Ti.UI.createListSection({ headerTitle: 'South America'});
var southAmericaData = [
    {properties: { title: 'Argentina', id: 34}},
    {properties: { title: 'Bolivia', id: 35}},
    {properties: { title: 'Brazil', id: 36}},
   	{properties: { title: 'Chile', id: 37}},
    {properties: { title: 'Ecuador', id: 38}},
    {properties: { title: 'Paraguay', id: 39}},
    {properties: { title: 'Uruguay', id: 40}},
];
southAmerica.setItems(southAmericaData);
sections.push(southAmerica);
	
listView.sections = sections;
	
listView.addEventListener('itemclick', function(e){
    var item = e.section.getItemAt(e.itemIndex);
     
    //TAB GROUP VIEW
    //need these windows for the tab group view	
    var infoWin = Ti.UI.createWindow({
    	backgroundColor:'#800000',
    	title: 'Global Information!',
    	navBarHidden:true,
    	top:'4%'
    });
    	
    var factsWin = Ti.UI.createWindow({
    	backgroundColor:'White',
    	title: 'Nation Facts!',
    	navBarHidden:true,
    	top:'4%'
    });
    	
    var studentsWin = Ti.UI.createWindow({
    	backgroundColor:'#800000',
    	title: 'Student Visitors!',
    	navBarHidden:true,
    	top:'4%'
    });
     	
    var tabGroup = Ti.UI.createTabGroup();
    	
    var infoTab = Ti.UI.createTab({
    	title: 'Global Info',
    	icon: '/KS_nav_ui.png',
    	window: infoWin
    });
    	
    var factsTab = Ti.UI.createTab({
		title: 'Facts',
    	icon: '/KS_nav_ui.png',
    	window: factsWin
    });
    	
    var studentsTab = Ti.UI.createTab({
    	title: 'Students',
    	icon: '/KS_nav_ui.png',
    	window: studentsWin
    });
    	
    tabGroup.addTab(infoTab);
    tabGroup.addTab(factsTab);
    //tabGroup.addTab(studentsTab);
    tabGroup.open();
    
    //TAB GROUP BACK BUTTON	   
    var tabGroupBack = Ti.UI.createButton({
		title:'Back',
		color: '#ffcd00',
		left:'2%',
		top:'5%'
	});

	tabGroupBack.addEventListener('click', function(e){
		tabGroup.close();
	});

 	tabGroup.add(tabGroupBack);
	 		
	//This will be the flag of the country
	//All flag images were taken from http://www.sciencekids.co.nz/pictures/flags.html
	var imageName = '/images/' + item.properties.id + '.jpg';
	var flagImage = Ti.UI.createImageView({
		image: imageName,
		width: '100%',
		height:'auto'
	});
		
	//This will supply information on the page from the World Health Organization links wil vary depending on nation but is linked to the WHO website
	var linkInfo = ['dza', 'egy', 'eth', 'ner', 'nga', 'som', 'zaf', 'chn', 'ind', 'idn', 'jpn', 'mys', 'pak', 'phl', 'aus', 'nzl', 'bhs', 'cri', 'cub', 'dom',
		 'slv', 'gtm', 'hnd', 'pan', 'gbr', 'fra', 'deu', 'hun', 'ita', 'rus', 'tur', 'can', 'mex', 'usa', 'arg', 'bol', 'bra', 'chl', 'ecu', 'pry', 'ury'];

	//creates a view to display the link on the linkWin page
	var linkView = Ti.UI.createView({
		backgroundColor: 'White'
	});
		
	var link = 'http://www.who.int/countries/'+ linkInfo[item.properties.id] +'/en/';
	var webview = Titanium.UI.createWebView({url: link});
	linkView.add(webview);
	factsWin.add(linkView);
	
	// vertical view
	var vert = Ti.UI.createView({
		layout:'vertical',
		backgroundGradient: {
        	type: 'linear',
        	startPoint: { x: '50%', y: '0%' },
        	endPoint: { x: '50%', y: '100%' },
        	colors: [ { color: '#800000', offset: 0.0}, { color: '#ffcd00', offset: 0.25 }]
        },
	});
	infoWin.add(vert);

	//This will be a new view which will have information about globalization specfic to that country
	var picView = Ti.UI.createView({
		width:'100%',
		height:'30%',
		backgroundColor: 'transparent'
	});
	vert.add(picView);
	picView.add(flagImage);
	
	var blurbView = Ti.UI.createScrollView({
		width:'100%',
		height:'auto',
		scrollType:'vertical',
		showVerticalScrollIndicator:true,
	});
		
	var textFileName = "/images/" + item.properties.id + ".txt";
	file = Ti.Filesystem.getFile(Ti.Filesystem.resourcesDirectory, textFileName);
	var blob = file.read();
	var readText = blob.text;
	
	var blurbText = Ti.UI.createLabel({
		backgroundColor:'transparent',
		color: 'black',
		left:'5%',
		right:'5%',
		font: {fontSize:18},
		textAlign: 'left',
		text: readText,
	});
	blurbView.add(blurbText);
	vert.add(blurbView);
});

v.add(listView);
