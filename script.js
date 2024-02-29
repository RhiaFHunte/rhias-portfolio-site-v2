// SCROLL BEHAVIOUR
function toggleMenu() {
   var menuItems = document.querySelector('.menu-items');
   menuItems.classList.toggle('show');
}

// CAROUSEL NEXT + PREV BUTTONBEHAVIOUR
document.addEventListener("DOMContentLoaded", function() {
   const prevBtn = document.querySelector(".prev");
   const nextBtn = document.querySelector(".next");
   const projectsContainer = document.querySelector(".projects__container");
   
   let scrollAmount = 0;
   const scrollStep = projectsContainer.offsetWidth; // Width of each project container
   
   nextBtn.addEventListener("click", function() {
      if (scrollAmount < projectsContainer.scrollWidth - projectsContainer.clientWidth) {
         scrollAmount += scrollStep;
         projectsContainer.scrollTo({
            left: scrollAmount,
            behavior: "smooth"
         });
      }
   });
   
   prevBtn.addEventListener("click", function() {
      if (scrollAmount > 0) {
         scrollAmount -= scrollStep;
         projectsContainer.scrollTo({
            left: scrollAmount,
            behavior: "smooth"
         });
      }
   });
});

// CAROUSEL GRAB BEHAVIOUR
let isDown = false;
  let startX;
  let scrollLeft;

  const projects = document.querySelector('#projects');

  projects.addEventListener('mousedown', (e) => {
    isDown = true;
    projects.classList.add('active');
    startX = e.pageX - projects.offsetLeft;
    scrollLeft = projects.scrollLeft;
  });

  projects.addEventListener('mouseleave', () => {
    isDown = false;
    projects.classList.remove('active');
  });

  projects.addEventListener('mouseup', () => {
    isDown = false;
    projects.classList.remove('active');
  });

  projects.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - projects.offsetLeft;
    const walk = (x - startX) * 3; // Adjust scrolling speed
    projects.scrollLeft = scrollLeft - walk;
  });