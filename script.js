
// NAVBAR SCROLL
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('.dynamic-color-navbar');
    var aboutSection = document.getElementById('about');
    var aboutSectionOffset = aboutSection.offsetTop;
    var scrollPosition = window.scrollY;

    if (scrollPosition >= aboutSectionOffset) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


// NAVBAR TOGGLE WHEN CLICKED
document.getElementById('navbarToggleBtn').addEventListener('click', function() {
    document.querySelector('.overlay').classList.toggle('show');
 });
 

// ARROW ANNIMATION
const style = document.createElement('style');
style.innerHTML = `
    @keyframes bounce {
        0%, 100% {
            transform: translateY(0);
        }
        50% {
            transform: translateY(-20px);
        }
    }
`;

document.head.appendChild(style);

const logo = document.querySelector('.bi-arrow-down');
logo.style.animation = 'bounce 1s infinite';



