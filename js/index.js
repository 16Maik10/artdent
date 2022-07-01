"use strict"

const BURGER_BTN_EL = document.getElementById('burger');
const NAVBAR_LIST_EL = document.getElementById('navbar-list');

BURGER_BTN_EL.addEventListener('click', () => {
    NAVBAR_LIST_EL.classList.toggle('navbar__list_showBurger');
});
