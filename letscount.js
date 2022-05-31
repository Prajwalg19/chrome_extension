getRandomCard = () => {
	return Math.floor(Math.random() * 10);
};
let firstCard = getRandomCard();
let secondCard = getRandomCard();
sum = firstCard + secondCard;
arr = [firstCard, secondCard];
let answer;
let card;
ya = document.getElementById("Cards");
yo = document.getElementById("Sum");
les = document.getElementById("result");
start_game = () => {
	render_game();
};

render_game = () => {
	ya.textContent = "Cards :";
	for (i = 0; i < arr.length; i++) {
		ya.textContent += "  " + arr[i];
	}
	yo.innerHTML = "Sum : " + sum;
	if (sum < 21) {
		les.innerHTML = "do u want to draw ";
	} else if (sum === 21) {
		les.innerHTML = "you won!!";
	} else {
		les.innerHTML = "you lost ";
	}
};
function newcard() {
	document.querySelector(".card_drawn").innerHTML = "Drawing a new card";
	card = getRandomCard();
	arr.push(card);
	sum += card;
	render_game();
}
