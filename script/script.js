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
loginUser.onclick = () => {
    const loginFormat = document.getElementsByClassName('login-user')[0];
    loginFormat.classList.toggle('open-login');
}

