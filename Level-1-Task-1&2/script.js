// Color change button functionality (Task 2 Requirement)
const colorBtn = document.getElementById('color-btn');
const greyColors = ['#6c757d', '#868e96', '#adb5bd', '#ced4da', '#495057', '#343a40'];
let currentColorIndex = 0;

colorBtn.addEventListener('click', function() {
    currentColorIndex = (currentColorIndex + 1) % greyColors.length;
    this.style.backgroundColor = greyColors[currentColorIndex];
    this.textContent = `Color Changed! Click Again (${currentColorIndex + 1}/${greyColors.length})`;
});

// Time-based greeting functionality (Task 2 Requirement)
function displayGreeting() {
    const greetingDiv = document.getElementById('greeting');
    const currentTime = new Date();
    const hour = currentTime.getHours();
    let greeting;

    if (hour < 12) {
        greeting = "🌅 Good Morning! Welcome to our website.";
    } else if (hour < 17) {
        greeting = "☀️ Good Afternoon! Hope you're having a great day.";
    } else {
        greeting = "🌙 Good Evening! Thanks for visiting us.";
    }

    greetingDiv.textContent = greeting;
}

// Simple calculator functionality (Task 2 Requirement)
const calcBtn = document.getElementById('calc-btn');
const num1Input = document.getElementById('num1');
const num2Input = document.getElementById('num2');
const resultDiv = document.getElementById('result');

calcBtn.addEventListener('click', function() {
    const num1 = parseFloat(num1Input.value) || 0;
    const num2 = parseFloat(num2Input.value) || 0;
    const sum = num1 + num2;
    
    resultDiv.textContent = `Result: ${num1} + ${num2} = ${sum}`;
    resultDiv.style.backgroundColor = '#dee2e6';
});

// Form submission functionality (Task 1 Requirement)
const contactForm = document.getElementById('contact-form');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value;
    
    if (name.trim()) {
        alert(`Thank you ${name}! Your form has been submitted successfully.`);
        this.reset();
    } else {
        alert('Please enter your name before submitting.');
    }
});

// Initialize greeting when page loads
document.addEventListener('DOMContentLoaded', function() {
    displayGreeting();
    
    // Update greeting every minute
    setInterval(displayGreeting, 60000);
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Add scroll effect to header
window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.style.backgroundColor = '#71767a';
        header.style.backdropFilter = 'blur(10px)';
    } else {
        header.style.backgroundColor = '#71767a';
        header.style.backdropFilter = 'none';
    }
});
