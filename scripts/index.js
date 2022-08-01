const submenuBtn = document.querySelector('.header__menu-element_active');
const submenu = document.querySelector('.header__submenu');
const menuBtn = document.querySelector('.header__menu-button');

const header = document.querySelector('.header');
const headerMenuList = document.querySelector('.header__menu-list');
const headerMenu = document.querySelector('.header__menu');
const headerContainer = document.querySelector('.header__container');

menuBtn.addEventListener('click', openMobileMenu);

function openMobileMenu() {
  header.classList.toggle('header_mobile');
  headerMenuList.classList.toggle('header__menu-list_mobile');
  submenu.classList.toggle('header__submenu_mobile');
  menuBtn.classList.toggle('header__menu-button_opened');
  headerContainer.classList.toggle('header__container_mobile');
}

if (window.matchMedia("(min-width: 759px)").matches) {
  submenuBtn.onmouseover = function () {
    submenu.style.opacity = '1';
    submenu.style.visibility = 'visible';
  };
  submenuBtn.onmouseleave = function () {
    submenu.style.opacity = '0';
    submenu.style.visibility = 'hidden';
  };
  submenu.onmouseleave = function () {
    submenu.style.opacity = '0';
    submenu.style.visibility = 'hidden';
  };
  submenu.onmouseover = function () {
    submenu.style.opacity = '1';
    submenu.style.visibility = 'visible';
  };
};





