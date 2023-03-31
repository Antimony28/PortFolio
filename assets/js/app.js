const user = document.getElementById("user")
const dost = document.getElementById("user")
const title = document.getElementById("title")
const desc = document.getElementById("desc")
const cta = document.getElementById("cta")
const navLink= document.querySelector(".nav-link")

console.log("App Running......");
const tl = gsap.timeline()
tl.from(".navbar",{width:0, udration:1})
tl.from(user, {y:"100vh", duration: 2})

tl.from(dots,{
    rotation:360,
    scale:2,
    opacity:0,
    duration:1
})
tl.from(title,{
    x:"-200vh",
    duration: 1
})
tl.from(desc,{
    x:"200vh",
    duration: 1
})
tl.from(cta,{
    scale:1,
    opacity:0,
    duration: 1
})
tl.from(".nav-link",{
    y:"100%",
    opacity:0,
    stagger:0.2,
    duration: 1
})

gsap.from(".circle",{scale:0, repeat: -1,yoyo:true, duration: 0.6})
window.addEventListener("mousemove",function(event){
    // const x = event.clientX clientx and Y will return page varchya values only and pageX and pageY will return 
    // const y = event.clientY
    const x = event.pageX
    const y = event.pageY
    gsap.to(".circle",0.7,{x,y})
    gsap.to(".tiny",0.2,{x,y})
})