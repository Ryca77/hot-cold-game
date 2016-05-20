
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
		if (guess <= 100 && guess >= 1) {
			$('.guessBox').append(guess + ", ");
			$('#count').html(function(i, val)
				{return +val+1 });
			}

	//ensure the user is entering a usable value//
	if (guess > 100) {
			alert("Enter a number between 1 and 100")
			}
	if (guess < 1) {
			alert("Enter a number between 1 and 100")
			}
	if (isNaN(guess)) {
			alert("Enter a number between 1 and 100")
			}

	//running compare function//
	console.log("User: " + guess);
	$('#feedback').html(compare(guess,computerChoice));

	//comparison of user entry and computer number//
	function compare(choice1,choice2) {
		var difference = Math.abs(choice1 - choice2);
			if (difference >=50) {
				return "Ice Cold!";
			}
			else if (difference >= 30 && difference <= 50) {
				return "Cold!";
			}
			else if (difference >= 15 && difference <= 30) {
				return "Warm!";
			}
			else if (difference >= 5 && difference <= 15) {
				return "Hot!";
			}
			else if (difference >= 1 && difference <= 5) {
				return "Very Hot!";
			}
			else if (difference === 0) {
				return "Congratulations!" + "<br>" + "Click 'New Game' to play again.";
			}
		}
	});

	//starting a new game and generating cumputer number//
	$('.new').click(function() {
		var computerChoice = Math.floor(Math.random()*(100-1)+1);
		$('.guessBox').empty();
		$('#feedback').text('Make Your Guess!');
		$('#count').html('0');
		console.log("Computer: " + computerChoice);
	});

});





