const title = document.querySelector('h1');
const btn = document.querySelector('button');
const player1dice = document.querySelector('.img1');
const player2dice = document.querySelector('.img2');

const randomNumber = function() {
	return Math.floor(Math.random() * 6) + 1;
};


btn.addEventListener('click', (e) => {
	e.preventDefault();
	let player1score = randomNumber();
	player1dice.setAttribute('src', `images/dice${player1score}.png`);

	let player2score = randomNumber();
	player2dice.setAttribute('src', `images/dice${player2score}.png`);

	if(player1score > player2score) {
		title.textContent =  "Player 1 wins!";
	} else if(player1score < player2score) {
	title.textContent = "Player 2 wins!";
	} else title.textContent = "Draw!";
});