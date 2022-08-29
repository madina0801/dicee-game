const title = document.querySelector('h1');
const btn = document.querySelector('button');
const player1dice = document.querySelector('.img1');
const player2dice = document.querySelector('.img2');
const player1 = document.querySelector('.player1');
const player2 = document.querySelector('.player2');

function getPlayerName(num, player) {
	const playerName = prompt(`${num} player name:`);
	player.textContent = playerName;
}

const player1name = getPlayerName('First', player1);
const player2name = getPlayerName('Second', player2);

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
		title.textContent =  `${player1.textContent} wins!`;
	} else if(player1score < player2score) {
	title.textContent = `${player2.textContent} wins!`;
	} else title.textContent = "Draw!";
});