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
    // Added logic: only add shadow if not at top, but keep it readable
    if (window.scrollY > 10) {
        navbar.classList.add('shadow-md', 'bg-white/95');
        navbar.classList.replace('py-4', 'py-2'); 
    } else {
        navbar.classList.remove('shadow-md');
    }
});

// Form Handling Logic (Simulated for Demo)
// In a real scenario, this would POST to a webhook (Zapier/Make)
function handleFormSubmit(form) {
    const btn = form.querySelector('button[type="submit"]');
    const originalText = btn.innerHTML;
    
    // 1. Loading State
    btn.innerHTML = '<i class="fa-solid fa-circle-notch fa-spin mr-2"></i> Sending...';
    btn.disabled = true;

    // Simulate API call time
    setTimeout(() => {
        // 2. Success State
        btn.innerHTML = '<i class="fa-solid fa-check mr-2"></i> Sent!';
        btn.classList.remove('bg-brand-primary', 'bg-brand-accent');
        btn.classList.add('bg-green-500');

        // 3. CONVERSION REDIRECT (Critical for Tracking)
        // For the "Leaking Data" pitch, we tell them: "We redirect to ensure 100% pixel fire rate"
        // Uncomment the line below when you create a thank-you.html
        // window.location.href = "/thank-you.html";

        // For this demo only: Reset form after delay
        setTimeout(() => {
            form.reset();
            btn.innerHTML = originalText;
            btn.disabled = false;
            btn.classList.remove('bg-green-500');
            btn.classList.add('bg-brand-accent');
            alert("In the live version, this redirects to a Thank You page to trigger the 'Lead' event perfectly.");
        }, 1000);

    }, 1500);
}