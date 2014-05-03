var w = Ti.UI.currentWindow; // get current window

// VERTICAL VIEW
var v = Ti.UI.createView({
	layout:'vertical',
	backgroundColor:'#800000'
});
w.add(v);

var whiteView = Ti.UI.createView({
		height:'3.5%',
		backgroundColor:'white'
	});
v.add(whiteView);

// BACK BUTTON
var backButton = Ti.UI.createButton({
	title:'Back',
	color: '#ffcd00',
	left:'2%'
});
v.add(backButton);

var scrollView = Ti.UI.createScrollView({
	layout:'vertical',
	backgroundColor:'#800000'
});
v.add(scrollView);



backButton.addEventListener('click', function(e) {
	w.close(); // close window
});

// QUESTION 1
var question1 = Ti.UI.createLabel({
	text:'What is Global Communities?',
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	font:{fontSize:20, fontWeight:'bold'},
	color:'#ffcd00',
	height:'auto',
	width:'100%',
});
scrollView.add(question1);

// TEXT 1
var text1 = Ti.UI.createLabel({
	text:'	Have you ever wondered how the world ' +
	'really affects you, and how you can learn to ' +
	'understand other people and places? The Global ' +
	'Communities Living-Learning Program helps you find the answer!',
	textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
	font:{fontSize:16},
	color:'White',
	height:'auto',
	width:'90%',
	left:'5%'
});
scrollView.add(text1);

// HORIZONTAL VIEW
var pics = Ti.UI.createView ({ // to display pictures side by side
	layout:'horizontal',
	top:'6%',
	height:'25%'
});
scrollView.add(pics);

// PICTURE 1
var dorchPic = Ti.UI.createImageView({
	image:'/images/dorch2.jpg',
	left:'2%',
	width:'47%'
});
pics.add(dorchPic);

// PICTURE 2
var dcPic = Ti.UI.createImageView({
	image:'/images/dc.jpeg',
	left:'2%',
	width:'47%'
});
pics.add(dcPic);

// QUESTION 2
var question2 = Ti.UI.createLabel({
	text:'\nWhat is Globalization?',
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	font:{fontSize:20, fontWeight:'bold'},
	color:'#ffcd00'
});
scrollView.add(question2);

// TEXT 2
var text2 = Ti.UI.createLabel({	
	text:'Globalization is the exchange of ideologies and resources between even the most polarized regions of the world, resulting in an interconnected and highly diverse global culture.',
	textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
	font:{fontSize:15},
	color:'white',
	height:'auto',
	width:'80%',
	left:'10%'
});
scrollView.add(text2);

// BOTTOM TITLE
var bottomTitle = Ti.UI.createLabel({
	text:'Discover Where You\'ll Go From Here!',
	textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
	font:{fontSize:18, fontWeight:'bold'},
	top:'7%',
	color:'#ffcd00'
});
scrollView.add(bottomTitle);

// BOTTOM TAG
var bottomView = Ti.UI.createView({
	backgroundColor:'Black', 
	height: '7%', 
	bottom: '0%'
});

var bottomTag = Ti.UI.createLabel({
	color: 'White',
	text: 'Global Communities Living-Learning Program \n'+
		  '0119 Dorchester Hall, College Park, MD 20742\n'+
		  'Phone: 301-314-7100 ♦ Email: globalcommunities@umd.edu ♦',
	textAlign: Ti.UI.TEXT_ALIGNMENT_LEFT,
	font:{fontSize:10},
	height: 'auto',
	width:'100%'
});
bottomView.add(bottomTag);
scrollView.add(bottomView);
