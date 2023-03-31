

let menu_hamburger = document.querySelector('#menu-hamburger');
let set_menu_hamburger = document.querySelector('#set-menu-hamburger');


set_menu_hamburger.addEventListener('click', event => {

    if (set_menu_hamburger.classList.contains("opacity")) {
        set_menu_hamburger.classList.remove("opacity");
        menu_hamburger.style.display = "none";
    }

    else {
        set_menu_hamburger.classList.add("opacity");
        menu_hamburger.style.display = "flex";
    }

});





