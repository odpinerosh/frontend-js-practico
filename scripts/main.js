const deskTopMenu = document.getElementById('desktop-menu');
const navBarMail = document.getElementById('nv-email');
const mobileMenuCtl = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const shoppingCartDetail = document.querySelector('.product-detail');
const shoppingCartCtl = document.querySelector('.navbar-shopping-cart');
const mainContainer = document.querySelector('.main-container');

const closeAllOnClick = () => {
    const toogleElems = document.querySelectorAll('.toggleable');
    console.log('Clic en MainContainer');
    toogleElems.forEach(e => {
        e.classList.add('in-visible')
    }
    );
}



const deskTopMenuToggle = () => {
    deskTopMenu.classList.toggle('in-visible');
    if (!deskTopMenu.classList.contains('in-visible')) {
        shoppingCartDetail.classList.add('in-visible');
        mobileMenu.classList.add('in-visible');
    }    
}

const mobileMenuToggle = () => {
    mobileMenu.classList.toggle('in-visible');
    if (!mobileMenu.classList.contains('in-visible')) {
        deskTopMenu.classList.add('in-visible');
        shoppingCartDetail.classList.add('in-visible');
    }
}

const shoppingCartToggle = () => {
    shoppingCartDetail.classList.toggle('in-visible');
    if (!shoppingCartDetail.classList.contains('in-visible')) {
        deskTopMenu.classList.add('in-visible');
        mobileMenu.classList.add('in-visible');
    }
}

//mainContainer.addEventListener('click', closeAllOnClick);
navBarMail.addEventListener('click', deskTopMenuToggle);
mobileMenuCtl.addEventListener('click', mobileMenuToggle);
shoppingCartCtl.addEventListener('click', shoppingCartToggle);



