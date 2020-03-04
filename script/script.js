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
   // alert('hi');
    mainReg.classList.remove('open-reg');
    loginFormat.classList.add('open-login');
}