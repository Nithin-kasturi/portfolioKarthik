let menuIcon=document.querySelector("#menu-icon");
let navbar=document.querySelector('.list');
let sections=document.querySelector('section');
let navLinks=document.querySelector('header ul li a');
menuIcon.onclick=()=>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}