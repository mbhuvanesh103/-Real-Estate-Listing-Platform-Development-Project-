// Filter buttons functionality
const filterButtons = document.querySelectorAll('.filter-btn');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        filterButtons.forEach(btn => btn.classList.remove('active'));
        
        // Add active class to clicked button
        button.classList.add('active');
        
        // In a real application, this would filter the properties
        console.log(`Filtering by: ${button.textContent}`);
    });
});

// Property card hover effect enhancement
const propertyCards = document.querySelectorAll('.property-card');

propertyCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.cursor = 'pointer';
    });
    
    card.addEventListener('click', () => {
        alert('In a real application, this would show property details.');
    });
});

// Simple form validation for newsletter
const newsletterForm = document.querySelector('.footer-column .search-box');
const emailInput = newsletterForm.querySelector('input[type="email"]');
const subscribeBtn = newsletterForm.querySelector('.btn');

subscribeBtn.addEventListener('click', (e) => {
    e.preventDefault();
    
    if (!emailInput.value) {
        alert('Please enter your email address.');
        return;
    }
    
    if (!isValidEmail(emailInput.value)) {
        alert('Please enter a valid email address.');
        return;
    }
    
    alert('Thank you for subscribing to our newsletter!');
    emailInput.value = '';
});

function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}
