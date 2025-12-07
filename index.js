// Mobile Menu Toggle
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Close mobile menu when clicking a link
menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
    });
});

// Sticky Navbar Effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 10) {
        navbar.classList.add('shadow-md');
        navbar.classList.replace('py-4', 'py-2'); // Optional height reduction
    } else {
        navbar.classList.remove('shadow-md');
    }
});

// Demo Form Success Message
function showSuccess(form) {
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerText;
            
    btn.innerHTML = '<i class="fa-solid fa-check mr-2"></i> Sent Successfully!';
    btn.classList.remove('bg-brand-primary', 'bg-brand-accent');
    btn.classList.add('bg-green-500');
            
    setTimeout(() => {
        form.reset();
        btn.innerText = originalText;
        btn.classList.remove('bg-green-500');
        btn.classList.add(form.closest('#quote') ? 'bg-brand-primary' : 'bg-brand-accent');
    }, 3000);
}