window.addEventListener('DOMContentLoaded', main);

/**
 * Global variables for typingIntro-function
 */
const text = ["Frontend Developer"];
const speed = 95;
let textPosition = 0;

/**
 * Calls for addEventListeners- and typingIntro-functions
 */
function main() {
    typingIntro();
    addEventListeners();
}

function typingIntro() {
    document.getElementById("typing").innerHTML = text[0].substring(0, textPosition) + '<span>\u25AE</span>';
    if (textPosition++ != text[0].length) {
        setTimeout(typingIntro, speed)
    }
}

/**
 * Adds EventListeners for window-scroll and dropdown-menu clicks 
 */
function addEventListeners() {
    window.addEventListener('scroll', reveal);

    const dropdownMenuButton = document.getElementById('toggle-box');
    dropdownMenuButton.addEventListener('click', toggleMenu);

    const menuItems = document.querySelectorAll('header nav li');
    for (const li of menuItems) {
        li.addEventListener('click', handleMenuClick);
    }
}

function reveal() {
    const reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {

        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 150;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
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
    const body = document.querySelector('body');
    const menu = document.querySelector('.navigation');
    const menuButton = document.getElementById('menu-button');
    const closeButton = document.getElementById('close-button');

    body.classList.remove('overflow-hidden');
    menu.classList.remove('open');
    menuButton.classList.toggle('hide');
    closeButton.classList.toggle('show');
}