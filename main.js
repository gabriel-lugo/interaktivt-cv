window.addEventListener('DOMContentLoaded', main);

function main() {
    addEventListeners();
}

function addEventListeners() {
    const dropdownMenuButton = document.getElementById('toggle-box');
    dropdownMenuButton.addEventListener('click', toggleMenu);
   
}

function toggleMenu() {
    const menu = document.querySelector('.navigation');
    const menuButton = document.getElementById('menu-button');
    const closeButton = document.getElementById('close-button');

    menu.classList.toggle('open');
    menuButton.classList.toggle('hide');
    closeButton.classList.toggle('show');
}