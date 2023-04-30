const header = document.querySelector("h1");
const nav = document.querySelector("nav");
let lastScrollValue = 0;

document.addEventListener('scroll',() => {
		let top  = document.documentElement.scrollTop;
    if(lastScrollValue < top) {
    	header.classList.add("hidden");
        nav.classList.remove("hidden");
    } else {
    	header.classList.remove("hidden");
        nav.classList.remove("hidden");
    }
    lastScrollValue = top;
});


const buttonOpen = document.getElementsByClassName("active")[0];
const buttonClose = document.getElementsByClassName("close")[0];
let nav1 = document.querySelector("nav")

if (buttonOpen) {
    buttonOpen.addEventListener('click', () => {
      buttonOpen.style.display="none";
      nav1.classList.add("active");
    });
  }

  if (buttonClose)  {
    buttonClose.addEventListener('click', () => {
      buttonOpen.style.display="flex";
      nav1.classList.remove("active");
    });

}