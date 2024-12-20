const imgs = document.querySelectorAll(".header-slider ul img");
const prev_btn = document.querySelector(".control-prev1");
const next_btn = document.querySelector(".control-next1");
const searchTap = document.querySelector(".nav-search");

//this is for serach-icon hover effect
let isClicked = false;
searchTap.addEventListener("click", () => {
	if (isClicked == false) {
		isClicked = true;
		searchTap.style.border = "3.5px solid orange";
	} else {
		isClicked = false;
		searchTap.style.border = "";
	}
	// console.log(isClicked);
});

//this is for header-slider scroll images
let n = 0;

function changeSlide() {
	for (let i = 0; i < imgs.length; i++) {
		imgs[i].style.display = "none";
	}
	imgs[n].style.display = "block";
}
changeSlide();

prev_btn.addEventListener("click", (e) => {
	if (n > 0) {
		n--;
	} else {
		n = imgs.length - 1;
	}
	changeSlide();
});
next_btn.addEventListener("click", (e) => {
	if (n < imgs.length - 1) {
		n++;
	} else {
		n = 0;
	}
	changeSlide();
});

//this is for product-slider scroll images
document.querySelector(".control-prev2").addEventListener("click", () => {
	document.querySelector(".products").scrollLeft -= 400; // Adjust scroll amount as needed
});

document.querySelector(".control-next2").addEventListener("click", () => {
	document.querySelector(".products").scrollLeft += 400; // Adjust scroll amount as needed
});
//product-slider scroll for when use mouse wheel
const scrollContainer = document.querySelectorAll(".products");

for (const item of scrollContainer) {
	item.addEventListener("wheel", (evt) => {
		//event for mouse scrolling
		evt.preventDefault();
		item.scrollLeft += evt.deltaY;
	});
}
