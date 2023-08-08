import {iosVhFix} from './utils/ios-vh-fix';
import {initModals} from './modules/modals/init-modals';
import {Form} from './modules/form-validate/form';
import {openCloseMenu} from './blocks/menu.js';
import {setHeroSwiper, setCatalogSwiper, setTrainersSwiper, setReviewsSwiper, setAdvantagesSwiper, setGallerySwiper} from './blocks/page-swiper';
import {playVideo} from './blocks/video';
import {marker, map} from './blocks/map';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();
  window.addEventListener('load', () => {
    initModals();
    const form = new Form();
    window.form = form;
    form.init();
    setHeroSwiper();
    playVideo();
    setCatalogSwiper();
    setTrainersSwiper();
    setReviewsSwiper();
    setAdvantagesSwiper();
    setGallerySwiper();
    marker;
    map;
    openCloseMenu();
  });
});
