
// loader
let loader = document.getElementById('loading-animation')

function load() {
    loader.style.display = 'none'
}


// background image fade in 
const checkpoint = 500;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll <= checkpoint) {
        opacity = 1 - currentScroll / checkpoint;
    } else {
        opacity = 0;
    }
    document.querySelector(".backgroundImage").style.opacity = opacity;
});

// navbar onscroll
const navbar = document.querySelector('.navbar');

window.onscroll = function() {
    var top = window.scrollY;
    if(top >=100) {
        navbar.classList.add('navDark');
    }
    else {
        navbar.classList.remove('navDark');
    }
}


// section active
const li = document.querySelectorAll('.linkText')
const sec = document.querySelectorAll('section')

function activeMenu() {
    let len = sec.length;
    while(--len && window.scrollY + 60 < sec[len].offsetTop){}
    li.forEach(ltx => ltx.classList.remove('active'));
    li[len].classList.add('active');
}
activeMenu();
window.addEventListener('scroll', activeMenu)



// hamburger animation and working

let circle = document.getElementById('the-circle')
let menu = document.getElementById('hamburger-navLinks')
let trigger = document.getElementById('hamburger-menu')
let crosstrigger = document.getElementById('hamburger-menu')
let logo = document.getElementById('logo')
let logoh2 = document.getElementById('logo-h2')
let cross = document.getElementById('hamtwo')
let hamicon = document.getElementById('hamone')

hamicon.addEventListener('click', ()=>{
    circle.style.transform = 'scale(1500)'
    menu.style.display = 'block'
    logo.style.zIndex = '1111111111111'
    logoh2.style.color = 'black'
    cross.style.display = 'block'
    cross.style.zIndex = '111111111'
    hamicon.style.display = 'none'
})

cross.addEventListener('click',()=>{
    circle.style.transform = 'scale(0)'
    menu.style.display = 'none'
    logo.style.zIndex = '1'
    logoh2.style.color = 'white'
    cross.style.display = 'none'
    hamicon.style.display = 'block'
})

const Hlinktext = document.querySelectorAll('.hamburger-linkText')

function activeMenuH() {
    let len = sec.length;
    while(--len && window.scrollY + 60 < sec[len].offsetTop){}
    Hlinktext.forEach(ltx => ltx.classList.remove('hamburger-active'));
    Hlinktext[len].classList.add('hamburger-active');
}
activeMenuH();
window.addEventListener('scroll', activeMenuH)