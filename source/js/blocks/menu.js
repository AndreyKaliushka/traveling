import {ScrollLock} from '../utils/scroll-lock';
const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
window.scrollLock = new ScrollLock();

navMain.classList.remove('main-nav--nojs');

const openCloseMenu = () => {
  navToggle.addEventListener('click', function () {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
      window.scrollLock.disableScrolling();
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
      window.scrollLock.enableScrolling();
    }
  });
};

export {openCloseMenu};

