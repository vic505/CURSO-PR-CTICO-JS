const menuEmail=document.querySelector('.navbar-email');
const desktopMenu=document.querySelector('.desktop-menu');
const menuHambIcon=document.querySelector('.hambIcon');
const mobileMenu=document.querySelector('.mobile-menu');

menuEmail.addEventListener('click',toggleMenu);
menuHambIcon.addEventListener('click',toggleMobileMenu);

function toggleMenu(){
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu(){
    mobileMenu.classList.toggle('inactive');
}

