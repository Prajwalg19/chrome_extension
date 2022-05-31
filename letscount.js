let firstCard = 0;
let secondCard = 16;
sum = firstCard + secondCard;
arr = [firstCard, secondCard];
let answer;
let card;
ya = document.getElementById('Cards')
yo = document.getElementById('Sum')
les = document.getElementById("result");
start_game = () => {
	render_game();
};

render_game = () => {

	ya.textContent ="Cards :" + arr;
	yo.innerHTML ="Sum : " + sum;
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
	card = 1;
	arr.push(card);
	sum += card;
	render_game();
}
