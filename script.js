// Slide-in navbar on load
gsap.to(".navbar", {
  y: 0,
  opacity: 1,
  duration: 1,
  ease: "power2.out"
});

// Button pulse animation (infinite)
gsap.to(".cta-button", {
  scale: 1.1,
  repeat: -1,
  yoyo: true,
  duration: 0.8,
  ease: "power1.inOut"
});

// Scroll-triggered fade-ins
gsap.utils.toArray(".fade-in").forEach((elem) => {
  gsap.to(elem, {
    scrollTrigger: {
      trigger: elem,
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out"
  });
});
'