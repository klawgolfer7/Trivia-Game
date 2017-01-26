$(document).ready(function(){



var RemainingQuestionsArray;
var CurrentQuestion;
var QuestionsArray = [
	    {Question: "Who left Chandler stranded in a restaurant restroom wearing only a pink thong",
	    Answers:{
	    	PossibleAnswer: ["Alicia Siverstone","Meg Ryan","Julia Roberts","Angelina Jolie"],
	    	CorrectAnswer:"Julia Roberts"
	    	}
	    },

      {Question: "Who played Monica's millionnaire boyfriend in season 3?",
	    Answers:{
	    	PossibleAnswer: ["Tom Selleck","Jon Favreau","George Clooney","Sean Penn"],
	    	CorrectAnswer:"Jon Favreau"}
	    },

	    {Question: "Brooke Sheilds appeared as a stalker obsessed with Dr Drake Ramoray?",
	    Answers:{
	    	PossibleAnswer: ["True","False",],
	    	CorrectAnswer:"False"}
	    },

	    {Question: "Which Actress did Rachel Kiss",
	    Answers:{
	    	PossibleAnswer: ["Winona Ryder","Reese Witherspoon", "Alicia Siverstone", "Christina Applegate"],
	    	CorrectAnswer:"Winona Ryder"}
	    },

	    {Question: "Which famous actress/model did Ross 'bump' from his 'list'?",
	    Answers:{
	    	PossibleAnswer: ["Elizabeth Hurley","Rachel Hunter", "Elle Mcpherson", "Isabella Rosellini"],
	    	CorrectAnswer:"Isabella Rosellini"}
	    },

	    {Question: "Which actresses play Rachel's two sisters?",
	    Answers:{
	    	PossibleAnswer: ["Jennifer Love Hewitt and Sarah Michelle Gellar","Claire Danes and Jennifer Love Hewitt", "Christina Applegate and Reece Witherspoon", "Alicia Silverstone and Reece Witherspoon"],
	    	CorrectAnswer:"Christina Applegate and Reece Witherspoon"}
	    },
	    ];

	//Fisher-Yates Shuffle
function shuffle(array) {
  var m = array.length, t, i;

  while (m) {
    i = Math.floor(Math.random() * m--);
    t = array[m];
    array[m] = array[i];
    array[i] = t;
  }

  return array;
}; //End Fisher Yates Shuffle

console.log(QuestionsArray.length);

function StartGame () {
$('.StartButton').on('click',function (){
	 RemainingQuestionsArray = QuestionsArray;
	 NextQuestions();

}); 
}; //end of the StartGame Function
function NextQuestions () {
		CurrentQuestion = Math.floor(Math.random()*RemainingQuestionsArray.length);
		console.log(QuestionsArray[CurrentQuestion].Question);
		shuffle(QuestionsArray[CurrentQuestion].Answers.PossibleAnswer);
		console.log(QuestionsArray[CurrentQuestion].Answers.PossibleAnswer);
		
		QuestionDiv();



		RemainingQuestionsArray = RemainingQuestionsArray.splice(CurrentQuestion,1); // remove one entry from the array to avoid duplicates
		console.log(RemainingQuestionsArray);


}; // end of next question function

	//Question Divs
	function QuestionDiv() {

		$('.jumbotron').empty(); //Clear out the previous question
		var $TriviaQuestion = $('<div>' + QuestionsArray[CurrentQuestion].Question + '</div>');
			$TriviaQuestion.addClass("trivia-question");
		$('.jumbotron').append($TriviaQuestion);
		
		for (var i=0; i < QuestionsArray[CurrentQuestion].Answers.PossibleAnswer.length; i++) {
		var $AnswerOption =	$('<div>' + QuestionsArray[CurrentQuestion].Answers.PossibleAnswer[i] + '</div>');
			$AnswerOption.addClass("answer-option");
			$('.jumbotron').append($AnswerOption);
		};
		
	}; //End Question Div

	//Answer Click Function
	$('.answer-option').on('click',function(){

	}); // End click event

StartGame ();
    }); //document.ready ending

