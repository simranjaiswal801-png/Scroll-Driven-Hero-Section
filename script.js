gsap.registerPlugin(ScrollTrigger);

/* headline reveal */
gsap.to(".headline span",{
opacity:1,
y:0,
stagger:0.06,
duration:1,
ease:"power4.out"
});

/* stats reveal */
gsap.to(".stat",{
opacity:1,
y:0,
delay:0.8,
stagger:0.2,
duration:1
});

/* counter */
document.querySelectorAll(".num").forEach(el=>{
let val = +el.dataset.val;

gsap.to(el,{
innerText:val,
duration:2,
snap:{innerText:1},
scrollTrigger:{
trigger:el,
start:"top 85%"
}
});
});

/* parallax image */
gsap.to(".hero-img",{
y:-180,
rotate:10,
scale:1.15,
scrollTrigger:{
trigger:".hero",
start:"top top",
end:"bottom top",
scrub:1.5,
pin:true
}
});

/* headline fade scroll */
gsap.to(".headline",{
opacity:0,
y:-150,
scrollTrigger:{
trigger:".hero",
start:"top top",
end:"bottom top",
scrub:true
}
});