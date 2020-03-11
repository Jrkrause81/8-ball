$(document).ready(function(){

var magic8ball = {};
magic8ball.listOfAnswers = ["It is certain", "Most likely", "Reply hazy", "Try again", "Don't count on it", "My sources say no"];
$("#answer").hide();

magic8ball.askQuestion = function(question) {
	var randomNumber = Math.random();
	var listOfNumbers = randomNumber * this.listOfAnswers.length;
	var randomIndex = Math.floor(listOfNumbers);
	var answer = this.listOfAnswers[randomIndex];
	$("#mBall").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
	$("#mBall").effect("shake");
	$("#answer").text(answer);
	console.log(question);
	console.log(answer);
};
$("#answer").hide();

var askMeAnything = function()
{

$("#mBall").attr("src","https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/8side.png");
$("#answer").fadeIn(4000);
setTimeout(
	function()
	{
 var question = prompt("Yes or No question, please")
magic8ball.askQuestion(question)}, 500);
};
$("#answer").hide();
$("#questionButton").click(askMeAnything);
});
