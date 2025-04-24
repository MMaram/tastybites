// Alert on "Order Now" button
document.addEventListener('DOMContentLoaded', () => {
    const orderBtn = document.getElementById('order-now-btn');
    if (orderBtn) {
      orderBtn.addEventListener('click', () => {
        alert("Thanks for your interest! Our team will be with you shortly.");
      });
    }
  
    // Toggle mobile nav
    const menuToggle = document.getElementById('menu-toggle');
    const nav = document.querySelector('nav ul');
    if (menuToggle && nav) {
      menuToggle.addEventListener('click', () => {
        nav.classList.toggle('show');
      });
    }
  
    // Contact form validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
      contactForm.addEventListener('submit', (e) => {
        const email = document.getElementById('email');
        const message = document.getElementById('message');
        if (!email.value || !message.value) {
          alert("Please fill out all fields.");
          e.preventDefault();
        }
      });
    }
  });
  