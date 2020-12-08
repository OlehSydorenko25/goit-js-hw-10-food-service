import menu from './menu.json';
import menuCardTpl from './template/menu-card.hbs';

const markup = menuCardTpl(menu)
const markupMenu = document.querySelector('.js-menu');

markupMenu.insertAdjacentHTML('beforeend', markup);