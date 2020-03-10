'use strict';

const arrowup = document.getElementById('btn-arrow-up');
arrowup.onclick = (e) => {
    e.preventDefault();
    document.documentElement.scrollTo(0, 0);
}

const appLight = document.getElementsByClassName('light')[0];
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

loginUser.onclick = (e) => {
    e.preventDefault();
    loginFormat.classList.toggle('open-login');
    appLight.classList.add('dark');
}

const userCancel = document.getElementsByClassName('cancel')[0];
userCancel.onclick = (e) => {
    e.preventDefault();
    loginFormat.classList.remove('open-login');
    appLight.classList.remove('dark');
   
}

const cancelReg = document.getElementsByClassName('cancel-reg')[0];
const mainReg = document.getElementsByClassName('create-account-container')[0];

cancelReg.onclick = (e) => {
    e.preventDefault();
    mainReg.classList.remove('open-reg');
    appLight.classList.remove('dark');
}

const userReg = document.getElementsByClassName('open-regis')[0];
userReg.onclick = (e) => {
    e.preventDefault();
    mainReg.classList.add('open-reg');
    appLight.classList.add('dark');
    
}

const loginFromReg = document.getElementsByClassName('login-link')[0];

loginFromReg.onclick = () => {
    mainReg.classList.remove('open-reg');
    loginFormat.classList.add('open-login');
}

function loadMainbProducts() {
    const productsContainer = document.getElementsByClassName('products-container')[0];
    const productTemplate = document.getElementById('product-template');
    const productsUrl = 'https://raw.githubusercontent.com/freelancer2020/e-shop/master/products.json';
    const arr = [];
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
        const productImage = document.getElementsByClassName('loads');
        let i, x;
        for (i = 0; i < arr.length; i++) {
            productImage[i].classList.add('resizeImage');
            productImage[i].src = arr[i].productPhoto;
            lam[i].firstElementChild.nextElementSibling.append(arr[i].productName);
            lam[i].firstElementChild.nextElementSibling.nextElementSibling.append(arr[i].productPrice);
        }
    })
    .catch(err => alert(err.message));
    
}
window.onload = function() {
    loadMainbProducts();
    test();
//const renderItemBoard = document.createElement('div');
//renderItemBoard.classList.add("item-board");
//const templateItemBoard = document.getElementById('item-board-control').content.cloneNode(true);

//window.onload = () => renderItemBoard.append(templateItemBoard);

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
    .catch(err => alert(err.message));
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




const obj = {
    val: 1,
    inco: 1,
    calculation() {
        return this.inco * parseInt(boardInfo.product_price);
    } 
}

class Quantity extends HTMLDivElement {
    constructor() {
        super();
    }

    connectedCallback() {
        this.appendChild(document.getElementById('quantity').content.cloneNode(true));
        const quantityValue = document.getElementById('qauntity-number');
        
        const min = document.getElementById('minos');
        const plu = document.getElementById('plus');
        min.addEventListener('click', this.dec, false);
        plu.addEventListener('click', this.inc, false);
        quantityValue.textContent = obj.val;
        
    }

    dec() {
        if (obj.val <= 1) {
            return;
        }
        obj.val--;
        const quantityValue = document.getElementById('qauntity-number');
        quantityValue.textContent = obj.val;
        let ts = document.getElementsByClassName('price')[0];
        ts.textContent = `${(obj.val * parseInt(boardInfo.product_price))}$`;
        
    }

    inc() {
        obj.val++;
        const quantityValue2 = document.getElementById('qauntity-number');
        quantityValue2.textContent = obj.val;
        let ts = document.getElementsByClassName('price')[0];
        ts.textContent = `${(obj.val * parseInt(boardInfo.product_price))}$`;
    }

}

customElements.define("my-quantity", Quantity, {extends: 'div'});

const boardInfo = {
    product_name: '',
    product_price: '',
    product_src: ''
}


function trial(e) {
    const chart = document.getElementsByClassName('item-board')[0];
    if (chart.children.length > 0) {
        
        for (let i = 0; i < chart.children.length; i++) {
            chart.children[i].remove();
        }
    }
    if (e.target.className != 'loads resizeImage') return;
    const $productName = e.target.parentElement.nextElementSibling.textContent;
    const $prodcutPrice = e.target.parentElement.nextElementSibling.nextElementSibling.textContent;
    const $productImage = e.target.src;
    boardInfo.product_name = $productName;
    boardInfo.product_price = $prodcutPrice;
    boardInfo.product_src = $productImage;

    const fullB = document.getElementsByClassName('item-board')[0];
    const templateItemBoard = document.getElementById('item-board-control').content.cloneNode(true);
    fullB.append(templateItemBoard);
    fullB.style.display = 'flex';

    setTimeout(() => {
        const myPrice = document.getElementsByClassName('price')[0];
        myPrice.textContent = $prodcutPrice;

    }, 500);
}

const cover = document.getElementsByClassName('products-container')[0];
cover.onclick = trial;