let pC = null;
let cC = null;
let normalGame = true;

const score = [0,0];

spock.style.display = 'none';// these establish a normal view
lizard.style.display = 'none';

function toggleMode(n) {// this toggles the game type.

    if (n == true) {
        normalGame = false;         
        spock.style.display = '';
        lizard.style.display = '';
        score[0] = 0;
        score[1] = 0;
        pC = null;
        cC = null;
        display('#victory', '');
        display('#win', '');
        display('#playerS', '');
        display('#computerS', '');
        display('#playerC', '');
        display('#computerC', '');

    } else if (n == false) {
        normalGame = true;
        spock.style.display = 'none';
        lizard.style.display = 'none';        
        score[0] = 0;
        score[1] = 0;
        pC = null;
        cC = null;
        display('#victory', '');
        display('#win', '');
        display('#playerS', '');
        display('#computerS', '');
        display('#playerC', '');
        display('#computerC', '');

    }
}


function display(id, string) {
    const screen  = document.querySelector(id);
    screen.innerText = string;
}

function testVictory(player, computer) {
    if (normalGame == true) {
        if ((computer == player - 1) || (computer == player + 2)) {
            score[0]++;
            return 'Player wins';
        } else if ((player == computer - 1) || (player == computer + 2)) {
            score[1]++;
            return 'Computer wins';
        } else {
            return 'tie';
        }
    } else if (normalGame == false) {

        if (player > computer) {
            difference = 4 - player;
            player = player + difference;
            computer = computer + difference;
            if ((computer == player - 1) || (computer == player - 3)) {
                 score[0]++;
                 return 'Player wins';
            }
            else {
                score[1]++;
                return 'Computer wins';
            }
        } else if (player < computer) {
             computer = computer - player;
             player = player - player;
             if ((computer == player + 2) || (computer == player + 4)) {
                 score[0]++;
                 return 'Player wins';
            } else {
                score[1]++;
                return 'Computer wins';
            }
        } else {
            return 'tie';
        }
    }      
     

}

function translate(n) {
    if (normalGame == true) {
        if (n == 0) {
            return 'rock';
        } else if (n == 1) {
            return 'paper';
        } else if (n == 2) {
            return 'scissors';
        } else {
            return "ERROR";
        }
    }else if (normalGame == false) {
        if (n == 0) {
            return "rock";
        } else if (n == 1) {
            return "paper";
        } else if (n == 2) {
            return "scissors";
        } else if (n == 3) {
            return "spock";
        } else if (n == 4) {
            return "lizard";
        } else {
            return "ERROR";
        }
    }
}

function playRound(p) {
    if ((score[1] == 0) && (score[0] == 0)) display('#victory', '');

    if (normalGame == true) {
        cC = Math.floor(Math.random() * 3);
    } else if (normalGame == false) {
        cC = Math.floor(Math.random() * 5);
    }
    
    pC = p;

    display('#win',testVictory(pC, cC));

    if (score[0] == 5) {
        display('#victory','Player victory');
        score[0] = 0;
        score[1] = 0;

    } else if (score[1] == 5) {
        display('#victory','Computer victory');
        score[0] = 0;
        score[1] = 0;
    }

    display('#playerC', `Player: ${translate(pC)}`);
    display('#computerC', `Computer: ${translate(cC)}`);
    display('#playerS',`Player score:${score[0]}`);
    display('#computerS', `Computer score:${score[1]}`);
}