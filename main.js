window.addEventListener('DOMContentLoaded', main);

function main() {
    addEventListeners();
}

function addEventListeners() {
    const dropdownMenuButton = document.getElementById('dropdown-menu');
    dropdownMenuButton.addEventListener('click', toggleMenu);
    
}

function toggleMenu() {
    const menu = document.querySelector('.navbar');
    menu.classList.toggle('open');
}