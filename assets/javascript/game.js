//Setting up random number the user is trying to match.
	$( document ).ready(function(){
		var Random=Math.floor(Math.random()*101+19)
		console.log(Random)
		$('.random-number').text(Random);

//	setting up four random numbers array, total variable and printing the wins & losses variables	
	var GeneratedNumbers = []
	var total= 0;	
	var wins= 0;
	var losses = 0;
	$('.win').text(wins);
	$('.lose').text(losses);		


//Sets up random numbers for each jewel. fourRandomNumbers, because there are only 4 variables= lines 8-11.
function fourRandomNumbers(){
	for (var i = 0; i < 4; i++) {
		var num = Math.floor(Math.random()*11+1);
		GeneratedNumbers.push(num);
	}
	console.log(GeneratedNumbers) 
}

fourRandomNumbers();


//Resets the game.  
function reset(){
        Random=Math.floor(Math.random()*101+19);
        console.log(Random)
        $('.random-number').text(Random);
        GeneratedNumbers = [];
        fourRandomNumbers();
        total= 0;
        $('#score-count').text(total);
        } 

//Adds the wins to the total by commanding .text
// Alerts "You Won" by commanding alert.
function win(){
	alert("You Won!!!");
		wins++;	
		$('.win').text(wins);
		reset();
}

//Adds the losses to the total by commanding .text
// Alerts "You Lost" by commanding alert.
function loser(){
	alert ("You lost!!");
		losses++;
		$('.lose').text(losses);
		reset();
}



//This will allow the user to click on the jewels. Code the same function for all 4 Crystal pics by indicating the pic #ID or .class
		$('#1').on ('click', function(){
			total = total + GeneratedNumbers[0];
			console.log("New total= " + total);
			$('#score-count').text(total);	

						//Sets win/lose conditions. If total equals line 3 "var random" this commands a win.
					if (total == Random){
						win();
						
						// Else if, means line 65-67 didn't happen and the user lost the game.  
					}
					else if ( total > Random){
						loser();
					}		
		})	
					// #2 is my id for the second crystal picture. 'click' enables the user to click on the picture. 
					// GeneratedNumbers(line 8) [1]=array, it looped and is now [1], since line 61 [0].
		$('#2').on ('click', function(){
			total = total + GeneratedNumbers[1];
			console.log("New total= " + total);
			$('#score-count').text(total);	

					if (total == Random){
						win();
					}
					else if ( total > Random){
						loser();
					}	
		})	

		$('#3').on ('click', function(){
			total = total + GeneratedNumbers[2];
			console.log("New total= " + total);
			$('#score-count').text(total);

	
						if (total == Random){
						win();
					}
					else if ( total > Random){
						loser();
					}	
		})	

		$('#4').on ('click', function(){
			total = total + GeneratedNumbers[3];
			console.log("New total= " + total);
			$('#score-count').text(total);	

				
						if (total == Random){
						win();
					}
					else if ( total > Random){
						loser();
					}
		});  	

});	

