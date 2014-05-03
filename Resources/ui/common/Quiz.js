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

backButton.addEventListener('click', function(e) {
	w.close(); // close window
});

function Question(question, choices, answerIndex) {
	this.question = question;
	this.choices = choices;
	this.answerIndex = answerIndex;
}

// RAW DATA
var quizData = [
		"What is the approximate population of the earth?", ["A. 5 billion", "B. 6 billion", "C. 7 billion", "D. 8 billion", "E. 9 billion"], 2,
		"Approximately what percentage of the world's population lives on less than $1.25 per day?", ["A. 75%", "B. 50%", "C. 30%", "D. 25%", "E. 10%"], 3,
		"Where do the majority of those living on less than $1.25 per day live?", ["A. China", "B. India", "C. Brazil", "D. Bangladesh", "E. Somalia"], 0,
		"What is the most widely spoken language in the world?", ["A. Spanish", "B. English", "C. Mandarin Chinese", "D. Arabic", "E. Hindi"], 2,
		"Which country has the largest number of English speakers?", ["A. India", "B. United States", "C. China", "D. Australia", "E. United Kingdom"], 0,
		"What percent of the U.S. Government budget is devoted to foreign aid?", ["A. 25%", "B. 15%", "C. 10%", "D. 5%", "E. 1%"], 4,
		"Which country is the leading seller of military arms and equipment?",["A. Russia", "B. China", "C. United States", "D. Egypt", "E. Israel"], 2,
		"Which of the following countries does NOT grant birthright citizenship?", ["A. Brazil", "B. United States", "C. Jamaica", "D. France", "E. Mexico"], 3,
		"Which country has the most nuclear reactors for the purpose of generating electricity?",["A. Japan", "B. France", "C. United States", "D. Germany", "E. Russia"], 2,
		"Approximately how many years does it take for a plastic water bottle to decompose?",["A. 50", "B. 60", "C. 200", "D. 350", "E. 600"], 4,
		"Which country has the most earthquakes per year?", ["A. Japan", "B. China", "C. Iran", "D. Indonesia", "E. Mexico"], 3,
		"Which country holds the most U.S. government debt?",["A. Germany", "B. United Arab Emirates", "C. India", "D. China", "E. Saudi Arabia"], 3,
		"Which country hosts the most branch campuses of U.S. higher education institutions?",["A. Qatar", "B. United Kingdom", "C. United Arab Emirates", "D. China", "E. Japan"], 0,
		"What percent of Americans have a passport?", ["A. 70%", "B. 50%", "C. 40%", "D. 30%", "E. 20%"], 3,
		"What is the main difference between the Shi’a and Sunni branches of Islam?",["A. Ritual practices", "B. Recognition of Sharia Law", "C. Major holy days", "D. Disagreement over how leaders were chosen historically", "E. Ethnicity"], 3,
		"Approximately how many foreign persons legally enter the United States each year?",["A. 10 million", "B. 25 million", "C. 100 million", "D. 250 million", "E. 500 million"], 4,
		"Approximately how many refugees are there in the world?",["A. 3 million", "B. 10 million", "C. 20 million", "D. 30 million", "E. 40 million"], 4,
		"What percentage of the world’s population has access to Primary Education? Secondary? Higher Education?",["A. 50 / 25 / 10", "B. 60 / 40 / 15", "C. 70 / 25 / 5", "D. 80 / 15 / 5", "E. 90 / 10 / 1"], 4,
		"How many living languages are there?",	["A. 500", "B. 1,006", "C. 1,520", "D. 3,500", "E. 6,909"], 4,
		"According to the U.S. Department of State, which concept or statement best describes U.S. foreign policy today?"["A. Containment", "B. Engagement by using smart power", "C. Win the War on Terror", "D. To create a more secure, democratic and prosperous world", "E. Steering clear of permanent alliances and advocating trade with all nations"], 3
	];

var wrongBlurbs = ["Try again", "Incorrect","Better luck next time", "Prof. Haufler would know", "Go to class", "Really? REALLY?"];
var correctBlurbs = ["Wow you're so smart!", "Great Job!", "You were born for this!", "Wonderful!", "Genius!", "Correct!"];

var scoreTop25 = ["Great Job! You should become a professor!", "Wow! You should have your own show on the travel channel!", "Superb Job! You are truly a global citizen!"];
var scoreTop50 = ["Wow you really know your facts.\nAre you a traveler?", "You ain't no average Joe.\nBut you have a little more to go.", "Do you even global?"];
var scoreTop75 = ["You're only cure is to join Global Communities.", "Ever heard of the news?", "You should go...\nstudy abroad."];

// INITIALIZE QUESTIONS
var numQuestions = 10; // number of questions to be chosen at random
var questions = []; // array of randomly chosen questions
var hash = []; // marks already chosen questions

for (i = 0; i < numQuestions; i++) {
	do {
		var rand = Math.floor(Math.random()*19); // random integer between 0 and 19
	} while (hash[rand] == true);
	
	hash[rand] = true; // marks questions as chosen
	questions[i] = new Question(quizData[3*rand], quizData[3*rand+1], quizData[3*rand+2]);
}

score = 0;
displayQuestion(0);

// DISPLAY QUESTION
function displayQuestion(index) {
	var view = Ti.UI.createView({ // create View
		layout:'vertical',
		backgroundColor:'#800000',
		height:'100%',
		width:'100%'
	});
	w.add(view);
	view.add(backButton); // add back button
	
	// QUESTION LABEL
	var q = Ti.UI.createLabel({
		text:questions[index].question,
		textAlign:Ti.UI.TEXT_ALIGNMENT_CENTER,
		color:'White',
		height:'20%',
		width:'97%'
	});
	view.add(q);
	
	// CHOICES TABLEVIEW
	var tableData = [];
	
	for (i = 0;i < 5;i++) {
		tableData[i] = {
			title: questions[index].choices[i], 
			color: 'White',
			selectedBackgroundColor:'#A3A300',
			id: i};
	}
	
	var table = Ti.UI.createTableView({
	  data: tableData,
	  backgroundColor:'#800000',
	  height:'46%',
	  scrollable: false
	});
	view.add(table);
	
	var chosen = false;
	
	table.addEventListener('click', function(e) {
		var ansIndex = e.row.id;
		if (ansIndex != questions[index].answerIndex) { // if question is incorrect
			score = (score <= .25)? 0: score - .25; // subtract .25 from score
			Titanium.API.info(e.row+', '+e.row.title);
			e.row.title = wrongBlurbs[Math.floor(Math.random()*6)];
		}
		else { // if question is correct
			if (!chosen) {
				score++; // add to score
				e.row.title = correctBlurbs[Math.floor(Math.random()*6)];
			}
			chosen = true;
		}
	});

	
	// 'NEXT' BUTTON
	var next = Ti.UI.createButton({
		title:'Next',
		width:'20%',
		top:'1%',
		backgroundColor:'Black',
		color:'#ffcd00'
	});
	view.add(next);
	next.addEventListener('click', function(e) {
		if (index < numQuestions - 1) {
			index += 1;
			displayQuestion(index);
		}
		else {
			endQuiz();
		}
	});
	
	// PROGRESS BAR
	var progress = Titanium.UI.createProgressBar({
	    top:'5%',
	    width:250,
	    height:'auto',
	    min:0,
	    max:10,
	    value:index,
	    color:'#ffcd00',
	    message:'Question '+(index+1)+' of '+numQuestions,
	    font:{fontSize:14, fontWeight:'bold'},
	    style:Titanium.UI.iPhone.ProgressBarStyle.PLAIN,
        tintColor:'black'
	});
	view.add(progress);
	progress.show();
}

// DISPLAY END OF QUIZ BLURB
function endQuiz() {
	var view = Ti.UI.createView({ // create View
		layout:'vertical',
		backgroundColor:'#800000',
		height:'100%',
		width:'100%'
	});
	w.add(view);
	
	view.add(backButton); // add back button
	var message = Ti.UI.createLabel({
		color:'#ffcd00',
		textAlign: Ti.UI.TEXT_ALIGNMENT_CENTER,
		font:{fontSize:25, fontWeight:'bold'},
	});
	view.add(message);
	
	// ENDING IMAGES
	var endPic = Ti.UI.createImageView({ // global logo
		width: 'auto',
	});
	view.add(endPic);
	
	// END MESSAGE
	var endMessage;
	if (score/numQuestions > .75) {
		endMessage = scoreTop25[Math.floor(Math.random()*2)];
		endPic.image = '/images/awesome.jpg';
	}
	else if (score/numQuestions > .5) {
		endMessage = scoreTop50[Math.floor(Math.random()*2)];
		endPic.image = '/images/gnome.jpg';
	}
	else if (score/numQuestions > .25) {
		endMessage = scoreTop75[Math.floor(Math.random()*2)];
		endPic.image = '/images/betterLuck.jpg';
	}
	else {
		endMessage = "Wow. You need some work.";
		endPic.image = '/images/bad.jpg';
	}
	message.text = score+'/'+numQuestions+'! \n\n'+endMessage;
}

