



var wins = 0;
var losses = 0;

var counter = 0;
var number1 = Math.floor(Math.random() * 12) + 1;
var number2 = Math.floor(Math.random() * 12) + 1;
var number3 = Math.floor(Math.random() * 12) + 1;
var number4 = Math.floor(Math.random() * 12) + 1;
var endOfGame = false;
var newGame = 0;





$("#wins").text(wins);
$("#losses").text(losses);


var goal = ([Math.floor(Math.random() * 96) + 22]);

$("#numberGoal").text(goal)

function reset(){
				number1 = Math.floor(Math.random() * 12) + 1;
				number2 = Math.floor(Math.random() * 12) + 1;
				number3 = Math.floor(Math.random() * 12) + 1;
				number4 = Math.floor(Math.random() * 12) + 1;
				var counter = 0;
				$(".Counter").text(counter);
				$("#numberGoal").text(goal);

		};



function checkScore(){
	$('.Counter').html(counter);
				if (counter == goal){
						endOfGame = true;
						wins++;
						$('#status').text("You Win!!");
						goal();
						
						}else if (counter > goal){
							endOfGame = true;
							losses++;
							$('#status').text("You Lose!");
							reset();};
						if (endOfGame){
						$('#wins').html("Wins: " + wins);
						$('#losses').html("Losses: "+losses);
						$(".Counter").html(counter);
					
						
};
};

		

			$("#jOne").click(function() {
				if (endOfGame == false){
					counter=counter + number1;
					$(".Counter").html(counter);
				};
			checkScore();
			});
			
			$("#jTwo").click(function() {
				if (endOfGame == false){
					counter=counter + number2;
					//checkScore();
					$(".Counter").html(counter);
				};
			checkScore();
			});

			$("#jThree").click(function() {
				if (endOfGame == false){
					counter=counter + number3;
					//checkScore();
					$(".Counter").html(counter);
				checkScore();
				};
			
			});

			$("#jFour").click(function() {
				if (endOfGame == false){
					counter=counter + number4;
					//checkScore();
					$(".Counter").html(counter);
				
				};
				checkScore();
				
					});


window.onload = function() {
	checkScore();
	reset();


				
	
};