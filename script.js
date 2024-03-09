
// hamburger nav

function toggleMenu() {
   var menuItems = document.getElementById("menuItems");
   menuItems.classList.toggle("active"); /* Toggle the "active" class on the menu items */
 }

// carousel section




const carousel = document.querySelector('.carousel');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

function scrollCarousel(direction) {
   const scrollStep = carousel.offsetWidth * direction;
   carousel.scrollBy({
      left: scrollStep,
      top: 0,
      behavior: 'smooth'
   });
}

prevBtn.addEventListener('click', () => {
   scrollCarousel(-1); // Scroll left when previous button is clicked
});

nextBtn.addEventListener('click', () => {
   scrollCarousel(1); // Scroll right when next button is clicked
});
