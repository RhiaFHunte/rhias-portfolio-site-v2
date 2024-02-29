function toggleMenu() {
   var menuItems = document.querySelector('.menu-items');
   menuItems.classList.toggle('show');
}

function toggleMenu() {
   var menuItems = document.querySelector('.menu-items');
   menuItems.classList.toggle('show');
}

// Get the carousel container and project container
const carousel = document.querySelector('.carousel-container');
const projectsContainer = document.querySelector('.projects__container');

// Get navigation buttons
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

// Set initial variables
let isDragging = false;
let startPos = 0;
let scrollLeft = 0;

// Add event listeners for navigation buttons
prevBtn.addEventListener('click', () => {
   slideIndex -= 1;
   if (slideIndex < 0) {
      slideIndex = 0;
   }
   updateCarousel();
});

nextBtn.addEventListener('click', () => {
   slideIndex += 1;
   if (slideIndex > projectsContainer.children.length / 3 - 1) {
      slideIndex = projectsContainer.children.length / 3 - 1;
   }
   updateCarousel();
});

// Add event listeners for mouse events
carousel.addEventListener('mousedown', (e) => {
   isDragging = true;
   startPos = e.clientX - carousel.offsetLeft;
   scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('mouseleave', () => {
   isDragging = false;
});

carousel.addEventListener('mouseup', () => {
   isDragging = false;
});

carousel.addEventListener('mousemove', (e) => {
   if (!isDragging) return;
   const x = e.clientX - carousel.offsetLeft;
   const walk = (x - startPos) * 2; // Adjust scrolling speed
   carousel.scrollLeft = scrollLeft - walk;
});

// Function to update carousel position
function updateCarousel() {
   const offset = -slideIndex * slideWidth;
   carousel.style.transform = `translateX(${offset}px)`;
}
