
const btn = document.querySelector('.hero2 button');

btn.addEventListener('mouseover', () => {
    btn.style.backgroundColor = '#088178';
    btn.style.color = '#fff';
    btn.style.boxShadow = '0 0 20px rgba(8, 129, 120, 0.6)';
});

btn.addEventListener('mouseleave', () => {
    btn.style.backgroundColor = 'transparent'; // or your original color
    btn.style.color = '#000';
    btn.style.boxShadow = 'none';
});
const textElement = document.querySelector('.hero2 h1');
const text = "On all products";
let index = 0;

function typeWriter() {
    if (index < text.length) {
        textElement.innerHTML = text.substring(0, index + 1) + '<span class="cursor">|</span>';
        index++;
        setTimeout(typeWriter, 100);
    }
}

// Start the effect
typeWriter();
const initFooterReveal = () => {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                // Staggered reveal based on column index
                setTimeout(() => {
                    entry.target.classList.add('active');
                }, index * 150);
                
                // Unobserve once animation is done
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    reveals.forEach(reveal => observer.observe(reveal));
};

const bar = document.getElementById('bar');
const close = document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener('click', () => {
        nav.classList.add('active');
    });
}

if (close) {
    close.addEventListener('click', () => {
        nav.classList.remove('active');
    });
}

