const tl = gsap.timeline({defaults: {ease: "power1.out"}});

tl.to(".text", {y: "0%", duration: 1.25, stagger: 0.25}); //stagger was used to give time difference for nextLine
tl.to(".slider", {y: "-100%", duration: 1.5, delay: 0.5});
tl.to(".intro", {y: "-100%", duration: 1.5}, "-=1.5"); // Here "-=1.5" is used to start the effect before 1.5secs
tl.fromTo("nav", {opacity: 0}, {opacity: 1, duration: 1.5});
tl.fromTo(".big-text", {opacity: 0}, {opacity: 0.5, duration: 1, delay: 0.5});

window.addEventListener("scroll", function() {
    var nav = document.querySelector("nav");
    nav.classList.toggle("active", window.screenY > 0);
});