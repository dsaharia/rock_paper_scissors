let userScore = 0;
let computerScore = 0;
// DOM variables --- Cacheing the DOM -- saving DOMs for performance
// WHATSDEV 
const userScore_span = document.getElementById('user-score');
const computerScore_span = document.getElementById('comp-score');
const scoreBoard_div = document.querySelector('.score-board');
const result_div = document.querySelector('.result > p');
const rock_div = document.getElementById('rock');
const paper_div = document.getElementById('paper');
const scissors_div = document.getElementById('scissors');

function getComputerChoice() {
	const choices = ["rock", "paper", "scissors"];
	const randomNumber = Math.floor(Math.random() * 3);
	return choices[randomNumber];
}
function win(userChoice, computerChoice) {
	// using ES6 tempelate strings.
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();
	const userChoice_div = document.getElementById(userChoice);
	userScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;


	result_div.innerHTML = `${userChoice} ${smallUserWord}  beats  ${computerChoice} ${smallCompWord} . You Win! 🔥`;
	userChoice_div.classList.add('green-glow')
	setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);
}

function lose(userChoice, computerChoice){
	const userChoice_div = document.getElementById(userChoice);
	// using ES6 tempelate strings.
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();

	computerScore++;
	userScore_span.innerHTML = userScore;
	computerScore_span.innerHTML = computerScore;
	result_div.innerHTML = `${userChoice} ${smallUserWord}  loses to  ${computerChoice} ${smallCompWord} . You Lose! 👎`;
	userChoice_div.classList.add('red-glow')
	setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);

}

function draw(userChoice, computerChoice) {
	
	// using ES6 tempelate strings.
	const userChoice_div = document.getElementById(userChoice);
	const smallUserWord = "user".fontsize(3).sub();
	const smallCompWord = "comp".fontsize(3).sub();

	result_div.innerHTML = `${userChoice} ${smallUserWord}  draws  ${computerChoice} ${smallCompWord} . It's a draw. `;
	userChoice_div.classList.add('gray-glow')
	setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);

}

function game(userChoice) {
	const computerChoice = getComputerChoice();
	switch (userChoice + computerChoice) {
		case "rockscissors":
		case "paperrock":
		case "scissorspaper":
			win(userChoice, computerChoice);
			break;
		case "rockpaper":
		case "paperscissors":
		case "scissorsrock":
			lose(userChoice, computerChoice);
			break;
		case "rockrock":
		case "paperpaper":
		case "scissorsscissors":
			draw(userChoice, computerChoice);
			break;

	}
}
function main() {
	// adding event listeners for the choices
	rock_div.addEventListener('click', () => game("rock"));

	paper_div.addEventListener('click', () => game("paper") );

	scissors_div.addEventListener('click', () => game("scissors") );
}

main();