/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Header
3. Home Section
4. Menu

******************************/

/******************
1. Vars and Inits
******************/
const header            = document.querySelector(".header"),
      togglerNavBtn     = document.querySelector(".header .toggler-nav"),
      nav               = document.querySelector(".header .nav"),
      home              = document.querySelector("section.home"),
      menuTabs          = document.querySelector(".menu-tabs"),
      menuSection       = document.querySelector(".menu")

/* _______________________________ */


/***************
2. Header
***************/

// Header Init And Run Function's
togglerNavBtn.addEventListener("click",navToggle);

// Close Nav When Clicking On Any Link
nav.addEventListener("click",(e)=>{
  if(e.target.parentElement.classList.contains("link-item")){
    navToggle()
  }
})

// Navbar Open And Close
function navToggle(){
  togglerNavBtn.classList.toggle("active")
  nav.classList.toggle("open")
}

// Change Simple Header To sticky Header On Scroll
window.addEventListener("scroll",function(){
  if(this.pageYOffset > 80) {
    header.classList.add("sticky")
  }
  else{
    header.classList.remove("sticky")
  }
})

/* _______________________________ */

/******************
1. Home Section
******************/
// Set Height To Home Section
home.querySelector(".row").style.minHeight = `calc(100vh - ${header.clientHeight + "px"})`;

// Padding Top Home From Height Header
home.style.paddingTop = header.clientHeight + "px";

/* _______________________________ */

/***************
2. Menu Section
***************/

// Fillter All Btns And Show Special Section
menuTabs.addEventListener("click",(e)=>{
  if(e.target.classList.contains("menu-tab-item") && !e.target.classList.contains("active")){
    // Chang Active Btn
    const target = e.target.getAttribute("data-target");
    menuTabs.querySelector(".active").classList.remove("active");
    e.target.classList.add("active")

    // Change Active Section
    menuSection.querySelector(".menu-tab-content.active").classList.remove("active");
    menuSection.querySelector(target).classList.add("active")
  }
})





/* _______________________________ */