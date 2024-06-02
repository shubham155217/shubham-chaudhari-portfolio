let icon = document.querySelector(".icon");
icon.addEventListener("click",()=>{
    document.body.classList.toggle("light-mode");
    if (document.body.classList.contains("light-mode")) {
        icon.src = "Assets/moon.png";
    } else {
        icon.src = "Assets/sun.png";
    }
})

let About=document.getElementById("about");
let projects=document.getElementById("projects");
let skills=document.getElementById("skills");
let contact=document.getElementById("contact");
About.addEventListener("click",()=>{
    window.scrollTo({top:20 ,left:0 ,behavior:"smooth"});
})

projects.addEventListener("click",()=>{
    window.scrollTo({top:1970,left:0 ,behavior:"smooth"});
})

skills.addEventListener("click",()=>{
    window.scrollTo({top:700 ,left:0 ,behavior:"smooth"});
})

contact.addEventListener("click",()=>{
    window.scrollTo({top:3470 ,left:0 ,behavior:"smooth"});
})