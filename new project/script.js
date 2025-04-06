let tl = gsap.timeline();
let cursor = document.querySelector(".cursor");


cursor.addEventListener("mousemove", function(sex){
    gsap.to(cursor,{
        left:sex.x-70,
       top:sex.y-80
    })
})

tl.from(".navigation-bar img", {
    y:-100,
    duration:0.8,
    // stagger:0.5,
})

tl.from(".email p", {
    y:-100,
    duration:0.3
})

