$(document).ready(function(){

    var magic8Ball = {};

    magic8Ball.listOfAnswers = ["Corona Virus", "Abducted By Aliens", "Amnesia", "Car Trouble", "Full Moon, Huh?", "I Was Mugged", "It's In The Mail", "It's Not My Job", "I've Got a Headache", "Jury Duty", "Kryptonite", "Mexican Food", "My Dog Ate It", "My Fish Died", "No Hablo Ingles", "I Crapped My Pants", "Oprah", "The Voices Told Me To", "Traffic Was Bad", "What Memo?"];

    magic8Ball.askQuestion = function(question){
        $("#answer").fadeIn(2000);
        var randomNumber = Math.random();
        var randomNumberForListOfAnswers = randomNumber * this.listOfAnswers.length;
        var randomIndex = Math.floor(randomNumberForListOfAnswers);
        var answer = this.listOfAnswers[randomIndex];

        $("#answer").text(answer);
        console.log(question);
        console.log(answer);
    };

    $("#answer").hide();

    var onClick = function() {
      var question = prompt("What do you need an excuse for?");
      magic8Ball.askQuestion(question);
      $("#8ball").effect("shake");
      setTimeout(
        function() {
      $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/answerside.png");
    }, 500);

    };

    $("#questionButton").click(onClick);



});
