// Challenge 1: Your Age in Days
function ageInDays() {
  var birthYear = prompt('what year were you born... Good friend?');
  var ageInDayss = (2022 - birthYear) * 365;
  var h1 = document.createElement('h1');
  var textAnswer = document.createTextNode('you are ' + ageInDayss + ' days old');
  h1.setAttribute('id', 'ageInDays');
  h1.appendChild(textAnswer);
  document.getElementById('flex-box-result').appendChild(h1);
  console.log(ageInDayss);
}

function reset() {
  document.getElementById('ageInDays').remove();
}


// Challenge 2: Generate Cat
function generateCat() {
  var image = document.createElement('img');
  var div = document.getElementById('flex-cat-gen');
  image.src = "https://c.tenor.com/XLz2euoYPKkAAAAM/cat-snuggle.gif";
  div.appendChild(image);
}

// Challenge 3: Rock, Paper, Scissors
function rpsGame(yourChoice) {
  console.log(yourChoice);
  var humanChoice, botChoice;
  humanChoice = yourChoice.id;

  botChoice = numberToChoice(randToRpsInt());
  console.log('Computer choice:', botChoice);

  results = decideWinner(humanChoice, botChoice); // [0, 1] human lost | bot wins
  console.log(results);

  message = finalMessage(results); // {'message': 'You won!', 'color': 'Green'}
  console.log(message);

  rpsFrontEnd(yourChoice.id, botChoice.id, message);
}

function randToRpsInt() {
  return Math.floor(Math.random() * 3);
}

function numberToChoice(number) {
  return ['rock', 'paper', 'scissors'][number];
}

function decideWinner(yourChoice, computerChoice) {
  var rpsDatabase = {
    'rock': { 'rock': 0.5, 'paper': 0, 'scissors': 1 },
    'paper': { 'rock': 1, 'paper': 0.5, 'scissors': 0 },
    'scissors': { 'rock': 0, 'paper': 1, 'scissors': 0.5 }
  };

  var yourScore = rpsDatabase[yourChoice][computerChoice];
  var computerScore = rpsDatabase[computerChoice][yourChoice];

  return [yourScore, computerScore];
}

function finalMessage([yourScore, computerScore]) {
  if (yourScore === 0) {
    return { 'message': 'You lost', 'color': 'red' };
  } else if (yourScore === 0.5) {
    return { 'message': 'You tied', 'color': 'yellow' };
  } else {
    return { 'message': 'You win', 'color': 'green' };
  }
}

function rpsFrontEnd(humanImageChoice, botImageChoice, finalMessage) {
  var ImagesDatabase = {
    'rock': document.getElementById('rock').src,
    'paper': document.getElementById('paper').src,
    'scissors': document.getElementById('scissors').src
  }

  // let's remove all the images
  document.getElementById('rock').remove();
  document.getElementById('paper').remove();
  document.getElementById('scissors').remove();

  var humanDiv = document.createElement('div');
  var botDiv = document.createElement('div');
  var messageDiv = document.createElement('div');

  humanDiv.innerHTML = "<img src='" + ImagesDatabase[humanImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"
  botDiv.innerHTML = "<img src='" + ImagesDatabase[botImageChoice] + "' height=150 width=150 style='box-shadow: 0px 10px 50px rgba(37, 50, 233, 1);'>"


  document.getElementById('flex-box-rps-div').appendChild(humanDiv);
  document.getElementById('flex-box-rps-div').appendChild(botDiv);
}