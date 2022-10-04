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

const funProductFilter = (ev, cat, auxArr) => {
    ev.preventDefault();
    if (cat == 'All') {
        result = auxArr.filter(product => product.cat != cat);
    } else {
        result = auxArr.filter(product => product.cat == cat);
    }
    console.log(result);
}

catListAll.addEventListener('click', (event) => funProductFilter(event, 'All', productList));
catListClothes.addEventListener('click', (event) => funProductFilter(event, 'Clothes', productList));
catListElectr.addEventListener('click', (event) => funProductFilter(event, 'Electronics', productList));
catListFurnit.addEventListener('click', (event) => funProductFilter(event, 'Furniture', productList));
catListToys.addEventListener('click', (event) => funProductFilter(event, 'Toys', productList));
catListOther.addEventListener('click', (event) => funProductFilter(event, 'Other', productList));