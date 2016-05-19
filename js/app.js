
$(document).ready(function(){
	
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

	//generating the initial cumputer number//
  	var computerChoice = Math.floor(Math.random()*(100-1)+1);
  	console.log("Computer: " + computerChoice);

	//taking each user input and entering in guess box//
	$('.button').click(function() {
		event.preventDefault();
		var userGuess = $('.text').val();
		var guess = parseInt(userGuess);
		$('.text').val('');
		$('.guessBox').append(guess + ", ");
		$('#count').html(function(i, val)
				{return +val+1 });

	//ensure the user is entering a usable value//
	if (guess > 100) {
			alert("Enter a number between 1 and 100")
			}
	if (guess < 1) {
			alert("Enter a number between 1 and 100")
			}

	//running compare function//
	console.log("User: " + guess);
	$('#feedback').html(compare(guess,computerChoice));

	//comparison of user entry and computer number//
	function compare(choice1,choice2) {
		while(choice1 !== choice2) {
			if ((choice1, choice2) >=50) {
				return "Ice Cold!";
			}
			else if ((choice1, choice2) >= 30 && (choice1, choice2) <= 50) {
				return "Cold!";
			}
			else if ((choice1, choice2) >= 20 && (choice1, choice2) <= 30) {
				return "Warm!";
			}
			else if ((choice1, choice2) >= 10 && (choice1, choice2) <= 20) {
				return "Hot!";
			}
			else {
				return "Very Hot!";
			}
			choice1 = choice2
			}
		}
	});

	//starting a new game and generating cumputer number//
	$('.new').click(function() {
		var computerChoice = Math.floor(Math.random()*(100-1)+1);
		$('.guessBox').empty();
		$('#feedback').empty();
		$('#count').empty();
		console.log("Computer: " + computerChoice);
	});

});

/*function newGame ()*/





