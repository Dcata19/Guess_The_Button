let number = Math.floor(Math.random() * 3) + 1;

function winnerButton(id) {
	if (id == number) {
		document.getElementById('para').innerText = 'You win!';
	} else {
		document.getElementById('para').innerText = 'You lose!';
	}
}