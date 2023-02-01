const menuEmail=document.querySelector('.navbar-email');
const desktopMenu=document.querySelector('.desktop-menu');//
const menuHambIcon=document.querySelector('.hambIcon');
const mobileMenu=document.querySelector('.mobile-menu');
const shoppingCart=document.querySelector('.navbar-shopping-cart');
const aside=document.querySelector('.product-detail');//

menuEmail.addEventListener('click',toggleMenu);
menuHambIcon.addEventListener('click',toggleMobileMenu);
shoppingCart.addEventListener('click',toggleshoppingCart);


function toggleMenu(){
    const isAsideClosed=aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    desktopMenu.classList.toggle('inactive');
}
function toggleMobileMenu(){
    
    const isAsideClosed=aside.classList.contains('inactive');
    if(!isAsideClosed){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');
   }
function toggleshoppingCart(){
    const isDesktopMenuClosed=desktopMenu.classList.contains('inactive');
    if (!isDesktopMenuClosed){
        desktopMenu.classList.add('inactive');
    }
    const isMobileMenuClosed=mobileMenu.classList.contains('inactive');
    if(!isMobileMenuClosed){
        mobileMenu.classList.add('inactive');
    }
   aside.classList.toggle('inactive');
}

//const productGrid=



