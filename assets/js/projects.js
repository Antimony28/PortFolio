const projects = [
    {name:"Todo",
    image: "https://images.unsplash.com/photo-1504579264001-833438f93df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80", 
    url:"https://www.youtube.com/@GamingwithAni",
    desc:"lorem10"
 },
    {name:"TicTacToe",
    image: "https://images.unsplash.com/photo-1504579264001-833438f93df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80", 
    url:"https://www.youtube.com/@GamingwithAni",
    desc:"lorem10"
 },
    {name:"Money Manager",
    image: "https://images.unsplash.com/photo-1504579264001-833438f93df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80", 
    url:"https://www.youtube.com/@GamingwithAni",
    desc:"lorem10"
 },
    {name:"Todo",
    image: "https://images.unsplash.com/photo-1504579264001-833438f93df2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80", 
    url:"https://www.youtube.com/@GamingwithAni",
    desc:"lorem10"
 },
]

let str=""
for (const item of projects) {
    str+=`<div class="card">
    <img src="${item.image}" alt="">
    <div class="card-body">
    <h1>${item.name}</h1>
    <p>${item.desc}</p>
    <a href="${item.url}">Visit here!</a>
    </div>
    </div>`
}

document.getElementById("projects").innerHTML=str

gsap.registerPlugin(ScrollTrigger)

gsap.from(".card",{
    scrollTrigger:{
        trigger:".card",
        scrub:1,         //mouse jeva yeto teva popup denar card la
        // start:"top 1900px"
        end: "+=400",
    },
    scale:0,
    rotation:40,
    stagger:0.5,
})