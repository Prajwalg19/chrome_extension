let answer;
let card;
let isAlive = false;
ya = document.getElementById("Cards");
yo = document.getElementById("Sum");
les = document.getElementById("result");
start_game = () => {
	let firstCard = getRandomCard();
	let secondCard = getRandomCard();
	sum = firstCard + secondCard;
	arr = [firstCard, secondCard];
	isAlive =true;
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
	if(isAlive === false || sum>= 21)
	return;
	document.querySelector(".card_drawn").innerHTML = "Drawing a new card";
	card = getRandomCard();
	arr.push(card);
	sum += card;
	render_game();
}

function getRandomCard () {
	let variable; 
	variable =  Math.floor(Math.random() * 13);
	 if(variable === 1)
	 return 11;
	 else if(variable >= 10)
	 return 10;
	 else 
	 return variable;
};
