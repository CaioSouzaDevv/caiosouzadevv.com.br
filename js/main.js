//Declarando Variáveis
var btnContact = document.querySelector('.cs-btn-contact');
var toggleModal = document.querySelectorAll('.cs-toggle-modal');
var toggleMenu = document.querySelectorAll('.cs-toggle-menu');
var menuMobile = document.querySelector('.cs-menu-mob');
var btnMenuMobIcon = document.querySelector('.cs-btn-menu-mob ion-icon');

//Page Preloader
window.addEventListener('load', function () {
    var pagePreloder = document.querySelector('.cs-preloader');
    pagePreloder.classList.add('cs-fade-out');

    setTimeout(function () {
        pagePreloder.style.display = 'none';
    }, 2000);
});

//Abrindo e Fechando Informações de Contato
btnContact.addEventListener('click', function () {
    var boxContact = document.querySelector('.cs-contact-info');
    boxContact.classList.toggle('cs-is-open');
    this.classList.toggle('cs-change-icon');
});

//Abrindo e Fechando o Menu Mobile
for (var m = 0; m < toggleMenu.length; m++) {
    toggleMenu[m].addEventListener('click', function () {
        var overlay = document.querySelector('.cs-menu-overlay');
        overlay.classList.toggle('cs-is-open');
        menuMobile.classList.toggle('cs-menu-is-closed');
        menuMobile.classList.toggle('cs-menu-is-open');

        var icon = btnMenuMobIcon.getAttribute('name');

        if (icon === 'menu') {
            btnMenuMobIcon.setAttribute('name', 'close');
        } else {
            btnMenuMobIcon.setAttribute('name', 'menu');
        }

    });
}



//Abrindo e Fechando o Modal de Orcamento
for (var i = 0; i < toggleModal.length; i++) {
    toggleModal[i].addEventListener('click', function () {
        var modalOrcamento = document.querySelector('#cs-modal-orcamento');
        var overlay = document.querySelector('.cs-overlay');
        overlay.classList.toggle('cs-is-open');
        modalOrcamento.classList.toggle('cs-is-open');
        modalOrcamento.classList.toggle('cs-slide-top-in');
    });
}


// Animando Elementos da Topbar
var triggerTopbar = document.querySelector('.cs-trigger-topbar');
var topbar = document.querySelector('.cs-topbar');
var logo = document.querySelector('.cs-logo');
var waypoint = new Waypoint({
    element: triggerTopbar,
    handler: function () {
        topbar.classList.toggle('cs-topbar-bg');
        logo.classList.toggle('cs-logo-shorten');
        logo.classList.toggle('cs-logo-big');
    },
    offset: '50px'
});
