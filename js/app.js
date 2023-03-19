// Lang-switch

document.addEventListener('DOMContentLoaded', function () {

    let dropmenu = document.getElementById('dropmenu');
    let link = document.getElementById('lang-link');

    link.addEventListener("click", function (event) {
        event.preventDefault();
        dropmenu.classList.toggle('active');
    });


    // Features
    let accordeon = document.querySelectorAll('.accordeon__item');

    accordeon.forEach(onDotsClick);
    function onDotsClick(dot) {
        dot.addEventListener("click", function (event) {
            event.preventDefault();

            dot.classList.toggle('active');
        });
    }

    // Burger

    const iconMenu = document.querySelector('.burger');
    if (iconMenu) {
        const menuBody = document.querySelector('.nav--header');
        iconMenu.addEventListener("click", function (e) {
            document.body.classList.toggle('_lock');
            iconMenu.classList.toggle('_active');
            menuBody.classList.toggle('_active');
        });
        // для обращения к одинаковым элементам к body функция
        document.body.addEventListener("click", function (yes) {
            const navLink = yes.target.closest('.nav__link');
            if (navLink) {
                document.body.classList.remove('_lock');
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }
        });
    }

}, false);
