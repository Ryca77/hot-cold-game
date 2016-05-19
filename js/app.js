
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

/*//starting a new game//
function newGame() {
}

$('.new').click(function() {
	newGame();

});*/


//taking each user input and entering in guess box//
$('.button').click(function() {
	event.preventDefault();
	var userGuess = $('.text').val();
	var guess = parseInt(userGuess);
	$('.guessBox').append(guess + ", ");

//ensure the user is entering a usable value//
if (guess > 100) {
		alert("Enter a number between 1 and 100")
	}

//generating the computer choice and running compare funtion//
var computerChoice = Math.floor(Math.random()*(100-1)+1);
console.log("User: " + guess);
console.log("Computer: " + computerChoice);
$('#feedback').html(compare(guess,computerChoice));

});

//comparison of user entry and computer number//
function compare(choice1,choice2) {
	while(choice1 !== choice2) {
		if (choice1 > (choice2 + 50)) {
			return "Ice Cold!";
		}
		else if (choice1 > (choice2 + 30)) {
			return "Cold!";
		}
		else if (choice1 > (choice2 + 20)) {
			return "Warm!";
		}
		else if (choice1 > (choice2 + 10)) {
			return "Hot!";
		}
		else {
			return "Very Hot!";
		}
	choice1 = choice2
	}
}

});





