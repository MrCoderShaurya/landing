// Slide-in Navbar
gsap.to(".navbar", {
  y: 0,
  opacity: 1,
  duration: 1.2,
  ease: "power4.out"
});

// Hero Content Fade In
gsap.from(".content h1", {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.5
});

gsap.from(".content p", {
  y: 50,
  opacity: 0,
  duration: 1,
  delay: 0.8
});

gsap.from(".cta", {
  scale: 0.5,
  opacity: 0,
  duration: 1,
  delay: 1.2,
  ease: "back.out(1.7)"
});

// Scroll-triggered Reveal
gsap.utils.toArray(".reveal").forEach((el) => {
  gsap.from(el, {
    scrollTrigger: {
      trigger: el,
      start: "top 80%",
      toggleActions: "play none none none",
    },
    y: 40,
    opacity: 0,
    duration: 1
  });
});
