// Lenis Start
document.addEventListener("DOMContentLoaded", () => {
    const lenis = new Lenis({
        lerp: 0.05, // Adjust smoothness level
        wheelMultiplier: 1, // Adjust scroll speed
    });

    function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
});
// Lenis End

gsap.registerPlugin(ScrollTrigger);

gsap.from('nav', {
    opacity: 0,
    duration: 2,
    ease: 'power2.out'
})

gsap.to('#nav', {
    opacity: 0,
    ease: 'power2.out',
    scrollTrigger: {
        scroller: document.body,
        trigger: '#nav',
        start: 'top 2%',
        end: 'top 5%',
        scrub: 1,
        // markers: true,
    }
});

gsap.from("#firstHR", {
    width: '10%',
    duration: 2,
    ease: 'power2.out',
})

gsap.from('.section1_left h1, .section1_left svg', {
    y: 300,
    opacity: 0,
    duration: 0.8,
    stagger: 0.2,
    ease: 'power2.out'
})

gsap.from('footer a', {
    y: 200,
    opacity: 0,
    duration: 0.5,
    stagger: 0.2,
    ease: 'power2.out',
    scrollTrigger: {
        trigger: 'footer div',
        start: 'top 95%',
        end: 'top 85%',
        once: true,
        // markers: true,
    }
});

// About Page
const aboutTimeline = gsap.timeline({ paused: true });

aboutTimeline
  .to('.overlay', {
    width: 0,
    duration: 1,
  }, 'a')
  .from('#about_men img', {
    opacity: 0,
    scale: 1.5,
    duration: 1,
  }, 'a');

aboutTimeline.play();

const listImages = document.querySelectorAll('.list_image');
const imageAreaContainer = document.createElement('div');
imageAreaContainer.classList.add('hidden', 'fixed', 'w-[300px]', 'h-[220px]', 'overflow-hidden');
document.body.append(imageAreaContainer);

listImages.forEach((listImage, index) => {
    const imageArea = document.createElement('img');
    imageArea.classList.add('h-full', 'w-full', 'object-cover', 'object-right');
    imageArea.setAttribute('alt', `Image for index ${index + 1}`);

    listImage.addEventListener('mouseenter', (event) => {
        imageArea.src = `images/about/list/${index + 1}.jpg`;

        // Position the image container next to the list item
        gsap.set(imageAreaContainer, {
            width: '150px',
            transformOrigin: 'right center',
        });

        gsap.to(imageAreaContainer, {
            display: 'block',
            width: '300px',
            height: '220px',
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: 'power2.out',
        });

        imageAreaContainer.innerHTML = '';
        imageAreaContainer.appendChild(imageArea);
    });

    listImage.addEventListener('mousemove', (event) => {
        const offsetX = 100;
        const offsetY = 20;
        
        if (window.innerWidth <= 768) {
            gsap.to(imageAreaContainer, {
                left: event.x - imageAreaContainer.offsetWidth / 2 + 100,
                top: event.y + 20,
                duration: 0.1,
                ease: 'power2.out',
            });
        } else {
            gsap.to(imageAreaContainer, {
                left: event.x + offsetX,
                top: event.y + offsetY,
                duration: 0.1,
                ease: 'power2.out',
            });
        }
    });

    listImage.addEventListener('mouseleave', () => {
        gsap.to(imageAreaContainer, {
            display: 'none',
            scale: 0.6,
            opacity: 0,
            width: '110px',
            height: '120px',
            ease: 'power2.out',
        });
    });
});
