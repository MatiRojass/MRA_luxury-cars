window.addEventListener("load", function(){

    let menu = document.querySelector(".nav-bar")
    let barbutton = document.querySelector("#bar-btn")

    barbutton.addEventListener("click" ,function(){
        menu.classList.toggle("menu-active")
    })

    
})