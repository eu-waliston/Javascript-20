const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");

const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");

const navItens = [nav1, nav2, nav3, nav4, nav5];


//Control Naviagtion Aniamtion
function navAniamtion(direction1, direction2) {
    navItens.forEach((nav, i) => {

        nav.classList.replace(`slide-${direction1}-${i + 1}`, `slide-${direction2}-${i + 1}`)
    });
}

function toggleNav() {
  //Toggle: Menu Bars Open/Close
  menuBars.classList.toggle("change");

  //Toggle: Menu Active
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    //Aniamte In overlay
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");

    //Aniamte In - Nav Itens
    navAniamtion('out', 'in');
  } else {

    // animate out eoverlay
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");

    //Aniamte Out - Nav Itens
    navAniamtion('in', 'out');
  }
}

//Event Listeners
menuBars.addEventListener("click", toggleNav);
navItems.forEach((nav) => {
    nav.addEventListener('click', toggleNav);
});
