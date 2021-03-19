const burger = document.querySelector(".js-burger-button")
const burgerClose = document.querySelector(".js-burger-close")
const header = document.querySelector(".js-header")

//function for burger button click
burger.addEventListener('click', () => {
  header.classList.toggle("header--active");
})

burgerClose.addEventListener('click', () => {
  header.classList.toggle("header--active");
})

function headerResize() {

  if (screen.width >= 1024) {
    const headerActiveElements = document.getElementsByClassName('header--active');
    if (headerActiveElements.length > 0) {
      header.classList.remove("header--active");
    }
  }   
}

window.addEventListener('resize',headerResize);
