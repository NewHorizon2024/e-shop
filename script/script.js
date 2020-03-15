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
function openLoginformat(e) {
    e.preventDefault();
    loginFormat.classList.toggle('open-login');
    appLight.classList.add('dark');
}
loginUser.addEventListener('click', openLoginformat, false);


const userCancel = document.getElementsByClassName('cancel')[0];
function cancelLoginformat(e) {
    e.preventDefault();
    loginFormat.classList.remove('open-login');
    appLight.classList.remove('dark');
}
userCancel.addEventListener('click', cancelLoginformat, false);


const cancelReg = document.getElementsByClassName('cancel-reg')[0];
const mainReg = document.getElementsByClassName('create-account-container')[0];
function cancelRegFormat(e) {
    e.preventDefault();
    mainReg.classList.remove('open-reg');
    appLight.classList.remove('dark');
}
cancelReg.addEventListener('click', cancelRegFormat, false);


const userReg = document.getElementsByClassName('open-regis')[0];
function openRegFormat(e) {
    e.preventDefault();
    mainReg.classList.add('open-reg');
    appLight.classList.add('dark');
}
userReg.addEventListener('click', openRegFormat, false);


const loginFromReg = document.getElementsByClassName('login-link')[0];
function openLoginFromReg(e) {
    e.preventDefault();
    mainReg.classList.remove('open-reg');
    loginFormat.classList.add('open-login');
}
loginFromReg.addEventListener('click', openLoginFromReg, false);


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
            if (!arr[i].describtion) {
                arr[i].describtion = `There is no description found in the database.`;
            }
            productImage[i].desc = arr[i].describtion; // describtion test
       }
    })
    .catch(err => alert(err.message));
}

// window load
window.onload = function() {
    loadMainbProducts();
    test();
     /*
    const cartContent = document.getElementsByClassName("cart-content")[0];
    const back = document.createElement('img');
    back.src = 'https://raw.githubusercontent.com/freelancer2020/e-shop/master/shopping-cart.jpg';
    cartContent.append(back);
    back.style.width = "200px";
    back.style.height = "200px";
    */
    const myData = JSON.parse(localStorage.getItem('data'));
    cartItemsCounter.textContent = myData.length;
   // localStorage.removeItem('data');

   
<<<<<<< HEAD
   /*
=======
    /*
>>>>>>> 29fa1dee5d6134fcd22cb6a18492e1869ad0e681
    cartContent.children[0].remove();
    
    let i = 3;
    for (let x = 0; x < i; x++) {
        const tem = document.getElementById('checkout').content.cloneNode(true);
        cartContent.append(tem);

    }
    */
<<<<<<< HEAD
    
    
=======
>>>>>>> 29fa1dee5d6134fcd22cb6a18492e1869ad0e681
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
        let total;
        if (obj.val <= 1) {
            return;
        }
        obj.val--;
        if (obj.val <= 1) {
            total = 'item';
        } else {
            total = 'items';
        }

        const quantityValue = document.getElementById('qauntity-number');
        quantityValue.textContent = obj.val;
        let ts = document.getElementsByClassName('price')[0];
        const num = parseFloat(boardInfo.product_price);
        ts.textContent = `${Number(parseFloat(num * obj.val).toFixed(3))}$. (${obj.val}) ${total}`;
    }

    inc() {
        obj.val++;
        let total = 'items';
        const quantityValue2 = document.getElementById('qauntity-number');
        quantityValue2.textContent = obj.val;
        let ts = document.getElementsByClassName('price')[0];
        const num = parseFloat(boardInfo.product_price);
        if (obj.val <= 2) {
            ts.textContent = `${Number(parseFloat(num * obj.val).toFixed(3))}$.`;
        }
        ts.textContent = `${Number(parseFloat(num * obj.val).toFixed(3))}$. (${obj.val}) ${total}`;
    }

}
customElements.define("my-quantity", Quantity, {extends: 'div'});



const boardInfo = {
    product_name: '',
    product_price: '',
    product_src: '',
    product_describtion: ''
}


function trial(e) {
  try {
   if (e.target.className != 'loads resizeImage') return;
    const chart = document.getElementsByClassName('item-board')[0];
    if (chart.children.length > 0) {
        
        for (let i = 0; i < chart.children.length; i++) {
            chart.children[i].remove();
        }
    }
    appLight.classList.add('dark');
    
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
        const des = document.getElementById('item-describution');
        des.innerHTML = e.target.desc;
        myPrice.textContent = $prodcutPrice;

    }, 0);
}catch(err) {
    alert(err.emssage);
}
}

const cover = document.getElementsByClassName('products-container')[0];
cover.addEventListener('click', trial, false);


const cartItemsCounter = document.getElementsByClassName('items-num')[0];
function addDataToCart(e) {
    e = window.event;
    const chart = document.getElementsByClassName('item-board')[0];
    const quantityNum = e.currentTarget.previousElementSibling.children[1].textContent;
    try {
        const dataObj = {
            product_name: boardInfo.product_name,
            product_price: boardInfo.product_price,
            product_src: boardInfo.product_src,
            product_quantity: quantityNum,
            product_describtion: boardInfo.product_describtion
        };
       
        let [currentData, oldData, fullData] = [[], [], []];
        
        const tech = localStorage.getItem('data');
        if (tech == null) {
            currentData.push(dataObj);
            localStorage.setItem('data', JSON.stringify(currentData)); 
        } else {
            const pullOldData = localStorage.getItem('data');
            localStorage.removeItem('data');
            const initOldData = JSON.parse(pullOldData);
            oldData = initOldData;
            currentData.push(dataObj);
            fullData = currentData.concat(oldData);
            localStorage.setItem('data', JSON.stringify(fullData));
            let cartItemsCounter = document.getElementsByClassName('items-num')[0];
        }
        let dataView = JSON.parse(localStorage.getItem('data'));
        cartItemsCounter.textContent = dataView.length;
        for (let i = 0; i < chart.children.length; i++) {
            chart.children[i].remove();
        }
        chart.style.display = 'none';
        appLight.classList.remove('dark');
    
    } catch(err) {
        alert(err.message);
    }
}


<<<<<<< HEAD
//const cartBtn = document.getElementsByClassName('cart-btn')[0];
//cartBtn.onclick = addDataToCart;

function openCart() {
    //alert("hi");
   const cartContent = document.getElementsByClassName("shopping-cart-container")[0];
   cartContent.classList.add('openCarta');
   appLight.classList.add('dark');

}


const userCartBtn = document.getElementsByClassName('head-item-btn')[0];
userCartBtn.addEventListener('click', openCart, false);
=======
function teh() {
    alert("hi");
}
>>>>>>> 29fa1dee5d6134fcd22cb6a18492e1869ad0e681
