let game = true;

while (game == true) {
	let cC = Math.floor(Math.random() * 3) + 1;
	let pC = prompt("Rock Paper or Scissors");
	if (pC == "rock" || pC == "paper" || pC == "scissors") {
	} else {
		console.log("You need to type rock paper or scissors lowercase");
		continue;
	}
	if (cC == 1) {
		cC = "rock";
	} else if (cC == 2) {
		cC = "paper";
	} else if (cC == 3) {
		cC = "scissors";
	}

	if ((pC == "rock" && cC == "paper")||(pC == "paper" && cC == "scissors")||(pC == "scissors" && cC == "rock")) {
		console.log("You Loose!");
	} else if ((pC == "rock" && cC == "rock")||(pC == "paper" && cC == "paper")||(pC == "scissors" && cC == "scissors")) {
		console.log("You Tie!");
	} else if ((pC == "paper" && cC == "rock")||(pC == "scissors" && cC == "paper")||(pC == "rock" && cC == "scissors")) {
		console.log("You Win!!!");
	}
	let cont = prompt("Do you wish to continue playing, y or n");
	cont = cont.toLowerCase();
	if (cont == 'y') {
		continue;
	} else {
		game = false;
	}
}
