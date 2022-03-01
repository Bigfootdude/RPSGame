function produceText(n) {
	// produce text from numbers
	if (n == 1) {
		return "rock";
	} else if (n == 2) {
		return "paper";
	} else if (n == 3) {
		return "scissors";
	}
}

function computerPlay() {
	// make random number
	let answer = Math.floor(Math.random() * 3) + 1;
	answer = produceText(answer);
	return answer;
}

function playerPlay() {
	// prompt and filter player choice.
	let answer = prompt("Rock paper or scissors? ");
	answer = answer.toLowerCase();
	return answer;
}


function playRound(p, c) {
	// compare player vs computer for victory.
	if (p == "rock") {
		if (c == "rock") {
			return "Tie";
		} else if (c == "paper") {
			return "Loose";
		} else if (c == "scissors") {
			return "Win";
		}
	} else if (p == "paper") {
		if (c == "rock") {
			return "Win";
		} else if (c == "paper") {
			return "Tie";
		} else if (c == "scissors") {
			return "Loose";
		}
	} else if (p == "scissors") {
		if (c == "rock") {
			return "Loose";
		} else if (c == "paper") {
			return "Win";
		} else if (c == "scissors") {
			return "Tie";
		}
	}
}


function game() {
	// begin the game logic using above functions.
	// goal is to have 5 turns, keep score, return victory.
	let playerScore = 0;
	let computerScore = 0;
	for (let i = 0; i < 5; i++) {
		const player = playerPlay();
		const computer = computerPlay();
		let results = playRound(player, computer);
		if (results == "Win") {
			playerScore++;
            console.log(`You win, ${player} beats ${computer}!`);
		} else if (results == "Tie") {
			console.log(`You tie, you both chose ${computer}.`);
		} else if (results == "Loose") {
			computerScore++;
			console.log(`You loose, ${computer} beats ${player}!`);
		}}
	if (playerScore < computerScore) {
		return `You loose ${computerScore} to ${playerScore}.`;
	} else if (computerScore < playerScore) {
		return `You win ${playerScore} to ${computerScore}.`;
	} else {
		return `You tie at ${playerScore}.`;
	}

}
console.log(game());
