burger_menu = document.querySelector(".burger-menu");
nav_bar_pop = document.querySelector(".nav-bar-pop");
nav_pop_close = document.querySelector(".nav-pop-close");
let is_nav_pop_open = false;


burger_menu.addEventListener('click', () =>{
    if (is_nav_pop_open === false){
        nav_bar_pop.classList.remove("hide");
        is_nav_pop_open = true;
    }
    else{
        nav_bar_pop.classList.add("hide");
        is_nav_pop_open = false;
    }
})

nav_pop_close.addEventListener('click', () => {
    nav_bar_pop.classList.add("hide");
})