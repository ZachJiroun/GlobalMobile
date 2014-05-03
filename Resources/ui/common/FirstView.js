/* Author of Map.js: Neel Mistry
 * Author of Quiz.js: Toby Wiederkehr & Zach Jiroun
 * Author of AboutUs.js: Zach Jiroun
 * Author of FirstView.js: Toby Wiederkehr
*/

//FirstView Component Constructor
function FirstView() {	
	var view = Ti.UI.createView({
		layout:'vertical',
		backgroundColor:'#800000'
	});
	
	var whiteView = Ti.UI.createView({
		height:'3.5%',
		backgroundColor:'white'
	});
	view.add(whiteView);
	// UMD LOGO
	var umdLogo = Ti.UI.createImageView({ // global logo
		image:'/images/umd_logo.png',
		width: '50%',
		left: '25%',
		right: '5%',
		top:'5%'
	});
	view.add(umdLogo);
	
	// GLOBAL LOGO
	var globalLogo = Ti.UI.createImageView({ // global logo
		image:'/images/logo.png',
		left:'12.5%',
		right:'5%',
		top:'5%'
	});
	view.add(globalLogo);
	
	// WELCOME MESSAGE
	var welcomeText = Ti.UI.createLabel({
		color:'White',
		text:'Welcome to the official app of \nGlobal '+
		'Communities! \nFind out what we\'re all about, or'+
		'\ndive right into the quiz!',
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		font:{fontSize:19, fontWeight: 'bold'},
		height: 'auto',
		width:'100%',
		top:'5%'
	});
	view.add(welcomeText);

	// ABOUT US BUTTON
	var aboutUsButton = Ti.UI.createButton({
		title:'About Us',
		color:'#ffcd00',
		backgroundColor: 'Black',
		borderRadius:'15',
		width: '30%',
		top:'5%'
	});
	view.add(aboutUsButton);
	aboutUsButton.addEventListener('click', function(e) {
		newWindow('AboutUs.js');	
	});

	// QUIZ BUTTON
	 var quizButton = Ti.UI.createButton({
	 	title:'Quiz',
	 	color:'#ffcd00',
		backgroundColor: 'Black',
		borderRadius:'15',
		width: '30%',
		top: '5%'
	});
	view.add(quizButton);
	quizButton.addEventListener('click', function(e) {
		newWindow('Quiz.js');
	});
	
	// VIEW MAP BUTTON
	var mapButton = Ti.UI.createButton({
		title:'Map',
		color:'#ffcd00',
		backgroundColor: 'Black',
		borderRadius:'15',
		width: '30%',
		top:'5%'
	});
	view.add(mapButton);
	mapButton.addEventListener('click', function(e) {
		newWindow('Map.js');
	});
    return view;
}

// open a js file as a new window
function newWindow(filename) {
    var window = Titanium.UI.createWindow({ // create window
        backgroundColor:'white',
        navBarHidden:true,
        url:'/ui/common/'+filename
    });
    window.open();
}

module.exports = FirstView;
