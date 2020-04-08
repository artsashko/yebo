
let ready = (callback) => {
	if (document.readyState != "loading") callback();
	else document.addEventListener("DOMContentLoaded", callback);
}


ready(() => {

	//MENU
		let iconMenu=document.querySelector(".nav__icon");
		let body=document.querySelector("body");
		let menuBody=document.querySelector(".menu__body");
		let menuLink=document.querySelector("a.menu__link");
	iconMenu.addEventListener("click", (e) => {
		iconMenu.classList.toggle("active");
		body.classList.toggle("lock");
		menuBody.classList.toggle("active");
	});
	menuLink.addEventListener("click", (e) => {
		iconMenu.classList.remove("active");
		body.classList.remove("lock");
		menuBody.classList.remove("active");
		menuLink.classList.add("rr");
	});

	//SLIDER
		let slider=document.querySelectorAll(".slider");
	slider.forEach(el => {
		let sliderItem = new Glide(el, {
			type: 'carousel',
			perView: 1,
		});
		sliderItem.mount();
	});


});

