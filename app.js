const imgs = document.querySelectorAll(".header-slider ul img");
const prev_btn = document.querySelector(".control-prev1");
const next_btn = document.querySelector(".control-next1");
const searchTap=document.querySelector(".nav-search");

searchTap.addEventListener("click",()=>{
	searchTap.style.border = "3.5px solid orange";

    // Optionally remove the border after a delay
    setTimeout(() => {
        searchTap.style.border = ""; // Reset the border after 3 second
    }, 3000);
	
})

let n = 0;

function changeSlide() {
	for (let i = 0; i < imgs.length; i++) {
		imgs[i].style.display = 'none';
	}
	imgs[n].style.display = 'block';
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

// const peoduct_imgs2=document.querySelectorAll(".product-slider .products img")
// const prev_btn2=document.querySelector(".control-prev2");
// const next_btn2=document.querySelector(".control-next2");



const scrollContainer=document.querySelectorAll('.products');
for(const item of scrollContainer){
    item.addEventListener('wheel',(evt)=>{ //event for mouse scrolling
        evt.preventDefault();
        item.scrollLeft+=evt.deltaY;
    })
}