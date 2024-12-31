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



