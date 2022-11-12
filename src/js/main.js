const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close');
console.log(navClose);
//=========MENU SHOW==========

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('.show-menu');
    })
}

if (navClose) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.remove('.show-menu');
    })
}

