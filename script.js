// SCROLL BEHAVIOUR
function toggleMenu() {
   var menuItems = document.querySelector('.menu-items');
   menuItems.classList.toggle('show');
}

// CAROUSEL BEHAVIOUR
document.addEventListener("DOMContentLoaded", function() {
   const prevBtn = document.querySelector(".prev");
   const nextBtn = document.querySelector(".next");
   const projectsContainer = document.querySelector(".projects__container");
   
   let scrollAmount = 0;
   const scrollStep = projectsContainer.offsetWidth; // Width of each project container
   
 //  nextBtn.addEventListener("click", function() {
      if (scrollAmount < projectsContainer.scrollWidth - projectsContainer.clientWidth) {
         scrollAmount += scrollStep;
         projectsContainer.scrollTo({
            left: scrollAmount,
            behavior: "smooth"
         });
      }
   });
   
 //  prevBtn.addEventListener("click", function() {
      if (scrollAmount > 0) {
         scrollAmount -= scrollStep;
         projectsContainer.scrollTo({
            left: scrollAmount,
            behavior: "smooth"
         });
      }
;




