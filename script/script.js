'use strict';

const shopBtn = document.getElementsByClassName('head-item')[0];
shopBtn.onclick = () => {
  const page = document.getElementsByClassName('header-menu')[0];
   page.classList.toggle('open-menu');
}

const logoShop = document.getElementsByClassName('gfont')[0];
logoShop.onclick = () => {
    window.location.reload();
}

const loginUser = document.getElementsByClassName('font-h')[0];
const loginFormat = document.getElementsByClassName('login-user')[0];

loginUser.onclick = () => {
    loginFormat.classList.toggle('open-login');
    document.body.classList.toggle('backLamp');
}

const userCancel = document.getElementsByClassName('cancel')[0];
userCancel.onclick = () => {
    loginFormat.classList.remove('open-login');
    document.body.classList.remove('backLamp');
}

const cancelReg = document.getElementsByClassName('cancel-reg')[0];
const mainReg = document.getElementsByClassName('create-account-container')[0];

cancelReg.onclick = () => {
    mainReg.classList.remove('open-reg');
}

const userReg = document.getElementsByClassName('open-regis')[0];
userReg.onclick = () => {
    mainReg.classList.add('open-reg');
}

const loginFromReg = document.getElementsByClassName('login-link')[0];

loginFromReg.onclick = () => {
    mainReg.classList.remove('open-reg');
    loginFormat.classList.add('open-login');
}

function loadMainbProducts() {
    const productsContainer = document.getElementsByClassName('products-container')[0];
    const productTemplate = document.getElementById('product-template');
    const productsUrl = 'https://raw.githubusercontent.com/freelancer2020/hexa/master/products.json';
    const arr = [];
    //alert('hi');
    fetch(productsUrl)
    .then(response => {
        return response.json();
    })
    .then(pro => {
        for  (let i = 0; i < pro.length; i++) {
           let frame = productTemplate.content.cloneNode(true);
            productsContainer.append(frame);
            arr.push(pro[i]);
        }
    })
    .then(() => {
        const lam = document.getElementsByClassName('product-box');
        let i, x;
        for (i = 0; i < arr.length; i++) {
            const image = document.createElement("img");
            image.src = arr[i].productPhoto;
            image.classList.add('resizeImage');
            lam[i].firstElementChild.append(image);
            lam[i].firstElementChild.nextElementSibling.append(arr[i].productName);
            lam[i].firstElementChild.nextElementSibling.nextElementSibling.append(arr[i].productPrice);
        }
    })
    
}
window.onload = loadMainbProducts;

