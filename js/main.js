// বর্তমান বছরের জন্য ফুটার আপডেট
document.addEventListener('DOMContentLoaded', function() {
    // ফুটারে কপিরাইট ইয়ার আপডেট
    const yearSpan = document.createElement('span');
    yearSpan.textContent = new Date().getFullYear();
    document.querySelector('.footer-bottom p').innerHTML = 
        `&copy; ${yearSpan.textContent} HRM Journal. সকল স্বত্ব সংরক্ষিত।`;
    
    // স্মুথ স্ক্রোলিং
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    
    // অ্যাক্টিভ নেভিগেশন লিংক
    const currentPage = location.pathname.split('/').pop();
    document.querySelectorAll('nav a').forEach(link => {
        if(link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
});