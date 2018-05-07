var newGameBtn = document.getElementById('js-newGameButton');
newGameBtn.addEventListener('click', newGame);

var pickRock = document.getElementById('js-playerPick_rock'),
    pickPaper = document.getElementById('js-playerPick_paper'),
    pickScissors = document.getElementById('js-playerPick_scissors');

pickRock.addEventListener('click', function() { playerPick('rock') });
pickPaper.addEventListener('click', function() { playerPick('paper') });
pickScissors.addEventListener('click', function() { playerPick('scissors') });

// Wartosci poczatkowe
var gameState = 'notStarted',  //started // ended
    player = {
        name: '',
        score: 0
    },
    computer = {
        score: 0
    };

// Wyswietlenie elementow gry
var newGameElem = document.getElementById('js-newGameElement'),
    pickElem = document.getElementById('js-playerPickElement'),
    resultsElem = document.getElementById('js-resultsTableElement');
	
function setGameElements() {
  switch(gameState) {
    case 'started':
        newGameElem.style.display = 'none';
        pickElem.style.display = 'block';
        resultsElem.style.display = 'block';
      break;
    case 'ended':
        newGameBtn.innerText = 'Jeszcze raz';
    case 'notStarted':
    default:
        newGameElem.style.display = 'block';
        pickElem.style.display = 'none';
        resultsElem.style.display = 'none';
  }
}
setGameElements();

// Rozpoczecie gry
var playerPointsElem = document.getElementById('js-playerPoints'),
    playerNameElem = document.getElementById('js-playerName'),
    computerPointsElem = document.getElementById('js-computerPoints');

function newGame() {
  player.name = prompt('Please enter your name', 'imię gracza');
  if (player.name) {
    player.score = computer.score = 0;
    gameState = 'started';

    setGameElements();
    playerNameElem.innerHTML = player.name;
    setGamePoints(); 
  }
}

// Wybor gracza
function playerPick(playerPick) {
    console.log(playerPick);
}
	
// Losowanie wyboru komputera
function getComputerPick() {
    var possiblePicks = ['rock', 'paper', 'scissors'];
    return possiblePicks[Math.floor(Math.random()*3)];
}

var playerPickElem = document.getElementById('js-playerPick'),
    computerPickElem = document.getElementById('js-computerPick'),
    playerResultElem = document.getElementById('js-playerResult'),
    computerResultElem = document.getElementById('js-computerResult');
function playerPick(playerPick) {
    var computerPick = getComputerPick();

    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
}

// Logika gry i przyznawanie punktów
function checkRoundWinner(playerPick, computerPick) {
  playerResultElem.innerHTML = computerResultElem.innerHTML = '';

  var winnerIs = 'player';

    if (playerPick == computerPick) {
        winnerIs = 'none'; // remis			
    } else if (
        (computerPick == 'rock' &&  playerPick == 'scissors') ||
        (computerPick == 'scissors' &&  playerPick == 'paper') ||
        (computerPick == 'paper' &&  playerPick == 'rock')) {
        winnerIs = 'computer';
    } 
	if (winnerIs == 'none') {
		computerResultElem.innerHTML = "No winner";
		playerResultElem.innerHTML = "No winner";	
	} else if (winnerIs == 'player') {
        playerResultElem.innerHTML = "Player Win! Score: Player=" + (player.score+1) + "  Score: Computer= "+ (computer.score);
        player.score++;	
    } else if (winnerIs == 'computer') {
        computerResultElem.innerHTML = "Computer Win! Score= " + (computer.score+1) +  "  Score: Player= "+ (player.score);
        computer.score++;
    }		
console.log(player.score)
console.log(computer.score)
}

function playerPick(playerPick) {
    var computerPick = getComputerPick();
    playerPickElem.innerHTML = playerPick;
    computerPickElem.innerHTML = computerPick;
    checkRoundWinner(playerPick, computerPick);
} 

// Aktualizacja wyniku
function setGamePoints() {
    playerPointsElem.innerHTML = player.score;
    computerPointsElem.innerHTML = computer.score;
}

function finishGame () {
	if (player.score  == 2) {
		playerResultElem.innerHTML = "You have 2 points";
	}
console.log(finishGame)	
}












