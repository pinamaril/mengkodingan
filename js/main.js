/* hamburger menu */
function hamburgerMenu() {
	const menuHamburger = document.querySelector(".menu_hamburger");
	menuHamburger.classList.toggle("menu_hamburger--hidden");
}

/* show year */
window.onload = function () {
	let date = new Date();
	let year = date.getFullYear();

	document.querySelector(".footer__copyright__year").innerHTML = year;
};
