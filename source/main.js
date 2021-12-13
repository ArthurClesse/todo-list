import "./styles.scss";

var elem = document.querySelector('.main-carousel');
// options
asNavFor: '.main-carousel';
// set as a selector string

asNavFor: document.querySelector('.main-carousel');


var flkty = new Flickity( elem, {
    // options
    contain: true,
    prevNextButtons: false,
    wrapAround: true,
    imagesLoaded: true,
    watchCSS: true
});

var flktyNav = new Flickity( ".carousel-nav", {
    // options
    asNavFor: '.main-carousel',
    prevNextButtons: false,
    pageDots: false,
    watchCSS: true
});

var cards = document.querySelectorAll('.carousel-cell');

cards.forEach(function (card, index) {
    card.addEventListener("mouseenter", function (e){

        document.getElementById(e.target.dataset.card).classList.add("show");
    });
    card.addEventListener("mouseleave", function (e){

        document.getElementById(e.target.dataset.card).classList.remove("show");
    });
});

class App {

}

window.app = new App();