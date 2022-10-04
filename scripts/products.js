const productList = [
    {
        name: 'Bike',
        price: 1.99,
        cat: 'Toys',
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        name: 'Pantalla',
        price: 2.99,
        cat: 'Electronics',
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        name: 'Compu',
        price: 6.99,
        cat: 'Electronics',
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    },
    {
        name: 'Jar Plate',
        price: 0.99,
        cat: 'Other',
        image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
    }
];


const catListAll = document.querySelector(".cat-list--all");
const catListClothes = document.querySelector(".cat-list--clothes");
const catListElectr = document.querySelector(".cat-list--electr");
const catListFurnit = document.querySelector(".cat-list--furnit");
const catListToys = document.querySelector(".cat-list--toys");
const catListOther = document.querySelector(".cat-list--other");
const cardsContainer = document.querySelector('.cards-container');
const productsHead = document.querySelector('.products-head');

const funProductFilter = (ev, cat, auxArr) => {
    mobileMenuToggle();
    ev.preventDefault();
    let resultArr = [];
    if (cat == 'All') {
        productsHead.classList.add('in-visible');
        resultArr = auxArr.filter(product => product.cat != cat);
    } else {
        resultArr = auxArr.filter(product => product.cat == cat);
        let aux = resultArr.length;
        productsHead.classList.remove('in-visible');
        productsHead.innerHTML = `Productos en esta categoría: ${aux}`;
    }
    cardsContainer.innerHTML = drawProductsGrid(resultArr);
}

const drawProductsGrid = arrProducts => {
    let aux = "";
    arrProducts.forEach(el => {
        aux += `<div class="product-card">
            <img src = ${el.image}>
            <div class="product-info">
                <div>
                    <p>${el.price}</p>
                    <p>${el.name}</p>
                </div>
                <figure>
                    <img src="./icons/bt_add_to_cart.svg" alt="">
                </figure>
            </div>
        </div>`;         
    });
    console.log(aux);
    return aux;
}


catListAll.addEventListener('click', (event) => funProductFilter(event, 'All', productList));
catListClothes.addEventListener('click', (event) => funProductFilter(event, 'Clothes', productList));
catListElectr.addEventListener('click', (event) => funProductFilter(event, 'Electronics', productList));
catListFurnit.addEventListener('click', (event) => funProductFilter(event, 'Furniture', productList));
catListToys.addEventListener('click', (event) => funProductFilter(event, 'Toys', productList));
catListOther.addEventListener('click', (event) => funProductFilter(event, 'Other', productList));

