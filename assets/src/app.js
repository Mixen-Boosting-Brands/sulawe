// Libraries
window.bootstrap = require('bootstrap/dist/js/bootstrap.bundle.js');

// Local Scripts
import '../src/smooth-scrolling';
import '../src/form-ajax';
import '../src/aos';

// Header
$(function () {
    // Cachea el objeto jQuery que contiene el elemento #navbar
    var header = $("#navbar");

    function updateScroll() {
        var scroll = $(window).scrollTop();

        if (scroll >= 1) {
            header.addClass('navbar-scroll');
        } else {
            header.removeClass("navbar-scroll");
        }
    }

    $(function () {
        $(window).scroll(updateScroll);
        updateScroll();
    });
});

// Menú de navegación
$('#mburger').click(function (e) {
    e.stopPropagation();
    $('.menu').toggleClass('menu-abierto');
    $('#navbar').toggleClass('opacity-0');
    $('#backdrop').toggleClass('backdrop-opacity-1');
});

$('.menu').click(function (e) {
    e.stopPropagation();
});

$('body,html').click(function (e) {
    $('.menu').removeClass('menu-abierto');
    $('#navbar').removeClass('opacity-0');
    $('#backdrop').removeClass('backdrop-opacity-1');
});

document.getElementById("cerrar-menu").addEventListener("click", cerrarMenu, false);
document.getElementById("btn-logo").addEventListener("click", cerrarMenu, false);
document.getElementById("btn-nav-1").addEventListener("click", cerrarMenu, false);
document.getElementById("btn-nav-2").addEventListener("click", cerrarMenu, false);
document.getElementById("btn-nav-3").addEventListener("click", cerrarMenu, false);
document.getElementById("btn-nav-4").addEventListener("click", cerrarMenu, false);
document.getElementById("btn-nav-5").addEventListener("click", cerrarMenu, false);
document.getElementById("btn-contacto").addEventListener("click", cerrarMenu, false);

function cerrarMenu() {
    $('.menu').removeClass('menu-abierto');
    $('#navbar').removeClass('opacity-0');
    $('#backdrop').removeClass('backdrop-opacity-1');
}

// Cerrar menú con Esc
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        cerrarMenu();
    }
});
