// Define keyframes animation
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

// Append style to the document head
document.head.appendChild(style);

// Now you can apply the bounce animation to elements as needed.
// For example, if you have an SVG element with the class 'bi-arrow-down':
const logo = document.querySelector('.bi-arrow-down');
logo.style.animation = 'bounce 1s infinite'; // Applying the animation to the SVG element

// Toggle overlay when navbar toggler button is clicked
document.getElementById('navbarToggleBtn').addEventListener('click', function() {
   document.querySelector('.overlay').classList.toggle('show');
});

