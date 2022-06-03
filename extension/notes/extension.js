let myarr = [];
let y = document.getElementById("input-btn");
let i = document.getElementById("input-el");
let o = document.getElementById("lists");
let n = JSON.parse(localStorage.getItem("items"));
let tab = document.getElementById("tab-btn");
// localStorage.setItem("", "samplenotes.com");
// console.log(localStorage.getItem("Notes"));
if (n) {
	myarr = n;
	// console.log(myarr);
	render(myarr);
}
y.addEventListener("click", function () {
	myarr.push(i.value);
	render(myarr);
	localStorage.setItem("items", JSON.stringify(myarr));
	rst();
});
tab.addEventListener("click", function () {
	chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
		myarr.push(tabs[0].url);
		localStorage.setItem("items", JSON.stringify(myarr));
		render(myarr);
	});
});
function render(z) {
	let variabl = "";

	for (let i = 0; i < z.length; i++) {
		variabl += `<li>
		<a href = www.google.com target='_blank'>${z[i]}<a/>
		</li>`;
	}
	o.innerHTML = variabl;
}
rst = () => {
	i.value = null;
};

let del = document.querySelector("#del_btn");
del.addEventListener("click", function () {
	myarr.pop();
	localStorage.setItem("items", JSON.stringify(myarr));

	render(myarr);
});
