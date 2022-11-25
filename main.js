window.addEventListener('DOMContentLoaded', main);

function main(){
    addEventListeners();
    
}

function addEventListeners() {
    const burgerMenuButton = document.getElementById('burger-menu');
    burgerMenuButton.onclick = toggleMenu;
}

function toggleMenu() {
    const header = document.querySelector('header');
    header.classList.toggle('open');

    const lowerSection = document.getElementById('lower-section');
    lowerSection.classList.toggle('flex')
}


// mediaquerys för JS
// window.addEventListener('resize', updateLayout);

// function updateLayout(event) {
//     console.log('RESIZE', window.innerWidth);
//     if (window.innerWidth < 500) {
//         //todo...
//     }
// }