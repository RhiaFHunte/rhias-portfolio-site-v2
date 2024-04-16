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

// Add the bounce class to your SVG element
const logo = document.querySelector('.bi-arrow-down');
logo.classList.add('bounce');

