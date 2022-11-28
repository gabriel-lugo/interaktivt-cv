window.addEventListener('DOMContentLoaded', main);

function main() {
    addEventListeners();
}

function addEventListeners() {
    const menuIcon = document.querySelector('.burger-menu');
    menuIcon.addEventListener('click', toggleSidebar);

    const listItems = document.querySelectorAll('aside nav li');
    for (const li of listItems) {
        li.addEventListener('click', handleNavItemClick);
    }
}

function handleNavItemClick(event) {
    setActiveNavItem(event);
    toggleSidebar();    
}

function setActiveNavItem(event) {
    // Ta bort active från den som redan har det
    const activeLi = document.querySelector('aside nav li.active');
    activeLi?.classList.remove('active');
    const li = event.currentTarget;
    li.classList.add('active');
}

function toggleSidebar() {
    const aside = document.querySelector('aside');
    aside.classList.toggle('close');

    const menuIcon = document.querySelector('.burger-menu');
    menuIcon.classList.toggle('hidden');
}


// mediaquerys för JS
// window.addEventListener('resize', updateLayout);

// function updateLayout(event) {
//     console.log('RESIZE', window.innerWidth);
//     if (window.innerWidth < 500) {
//         //todo...
//     }
// }