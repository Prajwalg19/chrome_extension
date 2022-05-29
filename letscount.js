let count = 0;
increment = () => {
	document.getElementById("count").innerHTML = ++count;
};
save = () => {
	document.getElementById("count").innerHTML = 0;
	return (count = 0);
};
