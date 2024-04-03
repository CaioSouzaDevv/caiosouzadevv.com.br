//Declarando letiáveis
let btnContact = document.querySelector('.cs-btn-contact');
let toggleModal = document.querySelectorAll('.cs-toggle-modal');
let toggleMenu = document.querySelectorAll('.cs-toggle-menu');
let menuMobile = document.querySelector('.cs-menu-mob');
let btnMenuMobIcon = document.querySelector('.cs-btn-menu-mob ion-icon');
//Page Preloader
window.addEventListener('load', function () {
    let pagePreloder = document.querySelector('.cs-preloader');
    pagePreloder.classList.add('cs-fade-out');

    setTimeout(function () {
        pagePreloder.style.display = 'none';
    }, 2000);
});

//Abrindo e Fechando Informações de Contato
btnContact.addEventListener('click', function () {
    let boxContact = document.querySelector('.cs-contact-info');
    boxContact.classList.toggle('cs-is-open');
    this.classList.toggle('cs-change-icon');
});



//Abrindo e Fechando o Menu Mobile
for (let m = 0; m < toggleMenu.length; m++) {
    toggleMenu[m].addEventListener('click', function () {
        let overlay = document.querySelector('.cs-menu-overlay');
        overlay.classList.toggle('cs-is-open');
        menuMobile.classList.toggle('cs-menu-is-closed');
        menuMobile.classList.toggle('cs-menu-is-open');

        let icon = btnMenuMobIcon.getAttribute('name');

        if (icon === 'menu') {
            btnMenuMobIcon.setAttribute('name', 'close');
        } else {
            btnMenuMobIcon.setAttribute('name', 'menu');
        }

    });
}



//Abrindo e Fechando o Modal de Orcamento
for (let i = 0; i < toggleModal.length; i++) {
    toggleModal[i].addEventListener('click', function () {
        let modalOrcamento = document.querySelector('#cs-modal-orcamento');
        let overlay = document.querySelector('.cs-overlay');
        overlay.classList.toggle('cs-is-open');
        modalOrcamento.classList.toggle('cs-is-open');
        modalOrcamento.classList.toggle('cs-slide-top-in');
    });
}


// Animando Elementos da Topbar
let triggerTopbar = document.querySelector('.cs-trigger-topbar');
let topbar = document.querySelector('.cs-topbar');
let logo = document.querySelector('.cs-logo');
let waypoint = new Waypoint({
    element: triggerTopbar,
    handler: function () {
        topbar.classList.toggle('cs-topbar-bg');
        logo.classList.toggle('cs-logo-shorten');
        logo.classList.toggle('cs-logo-big');
    },
    offset: '50px'
});
console.log(inputLogin);
