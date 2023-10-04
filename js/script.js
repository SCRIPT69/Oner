"use strict"

// Burger
function openMenu() {
    navHeader.style.display = "flex";
    exit.style.display = "block";
    document.body.classList.add("lock");
}
function closeMenu() {
    navHeader.style.display = "none";
    exit.style.display = "none";
    document.body.classList.remove("lock");
}


const burgerButton = document.querySelector(".menu-header__burger");
const navHeader = document.querySelector(".nav-header");
const exit = document.querySelector(".header-menu__exit");

if (burgerButton) {
    burgerButton.addEventListener("click", function(e){
        openMenu();

        const navHeaderLinks = document.querySelectorAll(".nav-header__link");
        navHeaderLinks.forEach(link => {
            link.addEventListener("click", () => {
                closeMenu();
            })
        })
    })
}

if (exit) {
    exit.addEventListener("click", function(e){
        closeMenu();
    })
}



// Modal Image

const animationTime = 400;

function openModalImage(mdlLink, e) {
    //opening modal image
    const mdlImgName = mdlLink.getAttribute("href").replace("#", "");
    const currentMdlImg = document.querySelector(("."+mdlImgName)).closest(".modal-image");
    currentMdlImg.classList.add("modal-image_open");

    //so that with body lock, the elements do not move
    const lockPaddingValue = window.innerWidth - document.querySelector(".wrapper").offsetWidth + "px";
    document.body.style.paddingRight = lockPaddingValue;
    document.body.classList.add("lock");

    //closing modal image by clicking in the outer area
    currentMdlImg.addEventListener("click", (e) => {
        if (!e.target.closest(".mdlimg")) {
            closeModalImage(e);
        }
    })
}
function closeModalImage(e) {
    //closing modal image
    const mdlImg = e.target.closest(".modal-image");
    console.log(mdlImg);
    mdlImg.classList.remove("modal-image_open");

    //returning scrolling for body, timeout to not twitch
    setTimeout(() => {
        document.body.classList.remove("lock");
        document.body.style.paddingRight = "0px";
    }, animationTime);
    
    //preventing reloading the page by link
    e.preventDefault();
}

//setting events for every modal images
const modalImageLinks = document.querySelectorAll("._mdimg");
modalImageLinks.forEach(mdlLink => {
    mdlLink.addEventListener("click", function(e) {
        openModalImage(mdlLink, e);
    })
})
//event for modal image closing button
const modalImageCloseLinks = document.querySelectorAll(".modal-image_close");
modalImageCloseLinks.forEach(closeLink => {
    closeLink.addEventListener("click", function(e) {
        closeModalImage(e);
    })
})