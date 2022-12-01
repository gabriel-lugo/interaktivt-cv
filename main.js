window.addEventListener('DOMContentLoaded', main);

const text = ["Frontend Developer"];
const speed = 95;
let textPosition = 0;

function main() {
    addEventListeners();
    typingIntro();
}

function addEventListeners() {
    const dropdownMenuButton = document.getElementById('toggle-box');
    dropdownMenuButton.addEventListener('click', toggleMenu);
   
    const menuItems = document.querySelectorAll('header nav li');
    for (const li of menuItems) {
        li.addEventListener('click', handleMenuClick);
    }
}

function typingIntro() {
    document.getElementById("typing").innerHTML = text[0].substring(0, textPosition) + '<span>\u25AE</span>'
    if(textPosition++ != text[0].length) {
        setTimeout(typingIntro, speed)
    }
}

function toggleMenu() {
    const body = document.querySelector('body');
    const menu = document.querySelector('.navigation');
    const menuButton = document.getElementById('menu-button');
    const closeButton = document.getElementById('close-button');

    body.classList.toggle('overflow-hidden');
    menu.classList.toggle('open');
    menuButton.classList.toggle('hide');
    closeButton.classList.toggle('show');
}

function handleMenuClick() {
    console.log("hej");
    const body = document.querySelector('body');
    const menu = document.querySelector('.navigation');
    const menuButton = document.getElementById('menu-button');
    const closeButton = document.getElementById('close-button');

    body.classList.remove('overflow-hidden');
    menu.classList.remove('open');
    menuButton.classList.toggle('hide');
    closeButton.classList.toggle('show');
}