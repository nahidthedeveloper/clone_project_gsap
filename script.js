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
