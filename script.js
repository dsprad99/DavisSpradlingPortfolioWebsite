const hambruger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hambruger.addEventListener("click",() => {
    hambruger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click",() =>{
    hambruger.classList.remove("active");
    navMenu.classList.remove("active");
}))



