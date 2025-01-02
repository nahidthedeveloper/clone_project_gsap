const body = document.body;

const div = document.createElement('div');
div.className = 'h-[50px] w-[50px] rounded-full fixed top-0 left-0 border-2 border-blue-500 pointer-events-none pointer-events-none';
div.id = 'cursor';
body.appendChild(div);

div.style.opacity = 0;
div.style.pointerEvents = 'none';

document.addEventListener('mousemove', (event) => {
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    gsap.to(div, {
        opacity: 1,
        x: mouseX - 25,
        y: mouseY - 25,
        duration: 0.3,
        ease: 'power2.out',
    });
});

document.addEventListener('mouseleave', () => {
    gsap.to(div, {
        opacity: 0,
        scale: 0.5,
        duration: 0.3,
        ease: 'power2.out',
    });
});

document.addEventListener('mouseenter', () => {
    gsap.to(div, {
        opacity: 1,
        scale: 1,
        duration: 0.3,
        ease: 'power2.out',
    });
});

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
        gsap.to(div, {
            scale: 0.3,
            top: 25,
            duration: 0.3,
            ease: 'power2.out',
        });
    });

    link.addEventListener('mouseleave', () => {
        gsap.to(div, {
            scale: 1,
            top: 0,
            duration: 0.3,
            ease: 'power2.out',
        });
    });
});