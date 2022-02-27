function computerPlay() {
	let computerChoice = Math.floor(Math.random() * 3) + 1;
	if (computerChoice == 1) {
		computerChoice = "rock";
	} else if (computerChoice == 2) {
		computerChoice = "paper";
	} else if (computerChoice == 3) {
		computerChoice = "scissors";
	}
	return computerChoice;
}



function playRound(playerSelection, computerSelection) {
	if (playerSelection == 'rock') {
		if (computerSelection == 'rock') {
			return "You Tie!  Rock ties with Rock.";
		}
		else if (computerSelection == 'paper') {
			return "You Loose!  Paper beats Rock.";
		}
		else if (computerSelection == 'scissors') {
			return "You Win!  Rock beats Scissors.";
		}
	} else if (playerSelection == 'paper') {
		if (computerSelection == 'rock') {
			return "You Win!  Paper beats Rock.";
		}
		else if (computerSelection == 'paper') {
			return "You Tie!  Paper ties with Paper.";
		}
		else if (computerSelection == 'scissors') {
			return "You Loose!  Scissors beats Paper.";
		}
	} else if (playerSelection == 'scissors') {
		if (computerSelection == 'rock') {
			return "You Loose!  Rock beats Scissors.";
		} 
		else if (computerSelection == 'paper') {
			return "You Win!  Scissors beats Paper.";
		} 
		else if (computerSelection == 'scissors') {
			return "You Tie!  Scissors ties with Scissors.";
		}
	}
}

function checkChoice(pC) {
	if ((pC == 'rock') || (pC == 'paper') || (pC == 'scissors')) {
		return true;
	} else {
		return false;
	}
}

function game(n) {
	for (let x = 0; x < n; x++) {

		let playerChoice = prompt("Choose Rock Paper or Scissors");

		playerChoice = playerChoice.toLowerCase();

		if (checkChoice(playerChoice) == false) {
			x--;
			continue;
		}

		const playerSelection = playerChoice; 

		const computerSelection = computerPlay();
		console.log(playRound(playerSelection, computerSelection));
	}
}
game(5);
