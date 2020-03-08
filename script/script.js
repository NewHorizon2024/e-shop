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
window.onload = function() {
    loadMainbProducts();
    test();
}


function test() {
    let url = 'https://raw.githubusercontent.com/freelancer2020/hexa/master/new.json';
    const render = document.getElementsByClassName('collection-content')[0];
    const templ = document.getElementById('new-stuff');
    let arr = [];
    fetch(url)
    .then(response => {
        return response.json();
    })
    .then(news => {
        for (let i = 0; i < news.length; i++) {
            arr.push(news[i]);
            let frame = templ.content.cloneNode(true);
            render.append(frame);
        }
    })
    .then(() => {
        const clash = document.getElementsByClassName('img-new');
        const frameNew = document.getElementsByClassName('con-new')[0];
        for (let x = 0; x < arr.length; x++) {
            clash[x].src = arr[x];
        }
       
    })
    .then(err => alert(err.message));
}

// handle scroll new products bar
const userRight = document.getElementsByClassName('container-arrow-right')[0];
const userLeft = document.getElementsByClassName('container-arrow-left')[0];


let num = 0;

userRight.onclick = function() {
    num++;
    const oneNew = document.getElementsByClassName('con-new')[0];
    const bar = document.getElementsByClassName('collection-content')[0];
    const  data = getComputedStyle(bar.firstElementChild);
    
   let w = 300;
   let totalflow = num * w;
   const overflows = bar.children.length * w - bar.clientWidth;
   if (totalflow >= overflows + 80) {
       this.style.display = 'none';
       return;
   }
   oneNew.style.marginLeft =- num * 250 +  "px";
  
}


userLeft.onclick = () => {
    num--;
    userRight.style.display = 'flex';
    const oneNew = document.getElementsByClassName('con-new')[0];
    if (num <= -1) {
        num = 0;
        return;
    } 
    oneNew.style.marginLeft =- num * 250 + "px";
}

