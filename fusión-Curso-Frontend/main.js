const menuEmail=document.querySelector('.navbar-email');
const desktopMenu=document.querySelector('.desktop-menu');
const menuHambIcon=document.querySelector('.hambIcon');
const mobileMenu=document.querySelector('.mobile-menu');
const shoppingCart=document.querySelector('.navbar-shopping-cart');
const aside=document.querySelector('.product-description');
const cardsContainer=document.querySelector('.cards-container');




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


const productList=[];
productList.push({
    name:'Bike',
    price:2000,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

})
productList.push({
    name:'Laptop',
    price:7000,
    image:'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    
})
productList.push({
    name:'Celular',
    price:5000,
    image:'https://images.pexels.com/photos/6687762/pexels-photo-6687762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    
})
productList.push({

    name:'Kindle',
    price:4000,
    image:'https://images.pexels.com/photos/12627/pexels-photo-12627.jpeg',
    
})
productList.push({
    
    name:'Audífonos',
    price:4000,
    image:'https://images.pexels.com/photos/5081398/pexels-photo-5081398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    
})
productList.push({
    
    name:'Tennis',
    price:4000,
    image:'https://images.pexels.com/photos/11281577/pexels-photo-11281577.jpeg',
    
})
productList.push({
    
    name:'Cascos',
    price:4000,
    image:'https://images.pexels.com/photos/14541034/pexels-photo-14541034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    
})
productList.push({
    
    name:'Lentes de sol',
    price:4000,
    image:'https://images.pexels.com/photos/343720/pexels-photo-343720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    
})
productList.push({
    
    name:'Teclado',
    price:4000,
    image:'https://images.pexels.com/photos/1309766/pexels-photo-1309766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    
})
productList.push({
    
    name:'Casco motocicleta',
    price:4000,
    image:'https://images.pexels.com/photos/4992710/pexels-photo-4992710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    
})
productList.push({
    
    name:'escritorio',
    price:4000,
    image:'https://images.pexels.com/photos/7181188/pexels-photo-7181188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    
})
productList.push({
    
    name:'Oso de peluche',
    price:4000,
    image:'https://images.pexels.com/photos/869517/pexels-photo-869517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    
})
//
productList.push({
    name:'Bike',
    price:2000,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

})
productList.push({
    name:'Laptop',
    price:7000,
    image:'https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    
})
productList.push({
    name:'Celular',
    price:5000,
    image:'https://images.pexels.com/photos/6687762/pexels-photo-6687762.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    
})
productList.push({

    name:'Kindle',
    price:4000,
    image:'https://images.pexels.com/photos/12627/pexels-photo-12627.jpeg',
    
})
productList.push({
    
    name:'Audífonos',
    price:4000,
    image:'https://images.pexels.com/photos/5081398/pexels-photo-5081398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    
})
productList.push({
    
    name:'Tennis',
    price:4000,
    image:'https://images.pexels.com/photos/11281577/pexels-photo-11281577.jpeg',
    
})
productList.push({
    
    name:'Cascos',
    price:4000,
    image:'https://images.pexels.com/photos/14541034/pexels-photo-14541034.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    
})
productList.push({
    
    name:'Lentes de sol',
    price:4000,
    image:'https://images.pexels.com/photos/343720/pexels-photo-343720.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    
})
productList.push({
    
    name:'Teclado',
    price:4000,
    image:'https://images.pexels.com/photos/1309766/pexels-photo-1309766.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    
})
productList.push({
    
    name:'Casco motocicleta',
    price:4000,
    image:'https://images.pexels.com/photos/4992710/pexels-photo-4992710.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    
})
productList.push({
    
    name:'escritorio',
    price:4000,
    image:'https://images.pexels.com/photos/7181188/pexels-photo-7181188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    
})
productList.push({
    
    name:'Oso de peluche',
    price:4000,
    image:'https://images.pexels.com/photos/869517/pexels-photo-869517.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    
})
productList.push({
    name:'Bike',
    price:2000,
    image:'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',

})

/* <div class="product-card">
<img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
<div class="product-info">
  <div>
    <p>$120,00</p>
    <p>Bike</p>
  </div>
  <figure>
    <img src="./icons/bt_add_to_cart.svg" alt="">
  </figure>
</div>
</div>  */
      
for(product of productList){
    const productCard=document.createElement('div');
    productCard.classList.add('product-card');
    const productImg =document.createElement('img');
    productImg.setAttribute('src',product.image);
    const productInfo=document.createElement('div');
    productInfo.classList.add('product-info');
    const productInfoDiv=document.createElement('div');
    const productPrice =document.createElement('p');
    productPrice.innerText='$'+product.price;
    const productName=document.createElement('p');
    productName.innerText=product.name;
    
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
    

    const productInfoFigure=document.createElement('figure');
    const productImageCart=document.createElement('img');
    productImageCart.setAttribute('src','./icons/bt_add_to_cart.svg');
    
    productInfoFigure.appendChild(productImageCart);

    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
    

    cardsContainer.appendChild(productCard);//cards container es un elemento que solo esta en el HTML, pero se coloca aquí porque se debe de ligar el final del HTML construido en JS, con el final del HTML que lo contiene (solo el final, el inicio no es necesario).
}

