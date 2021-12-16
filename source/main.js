import "./styles.scss";
document.addEventListener("DOMContentLoaded", function() {
    let elem = document.querySelector('.main-carousel');

    let buttonGroup = document.querySelector('.carousel-nav');

    let selectedNavButton = buttonGroup.querySelector('.show-m');


    let flkty = new Flickity( elem, {
        // options
        contain: true,
        prevNextButtons: false,
        wrapAround: true,
        imagesLoaded: true,
        watchCSS: true
    });

    flkty.on( 'select', function() {
        let card = flkty.selectedElement.dataset.card;
        let navButton = buttonGroup.querySelector(`[data-card="${card}"]`);
        if ( navButton != selectedNavButton ) {
            selectedNavButton.classList.remove('show-m');
            navButton.classList.add('show-m');
            selectedNavButton = navButton;
        }
    });


    const mediaQuery = window.matchMedia('(min-width: 992px)');

    let cards = document.querySelectorAll('.carousel-cell');

    function handleTabletChange(e) {
        cards.forEach(function (card, index) {
            card.addEventListener("mouseenter", function (e){

                document.getElementById(e.target.dataset.card).classList.add("show");
            });
            card.addEventListener("mouseleave", function (e){

                document.getElementById(e.target.dataset.card).classList.remove("show");
            });
        });
    }
    if (mediaQuery.matches) {

        handleTabletChange(mediaQuery);
    }


    mediaQuery.onchange = (e) => {

        if (e.matches) {

            handleTabletChange(mediaQuery);

        } else {

            console.log('test');

        }

    }



    function Lottie(containah, pathu){

        let loader = document.querySelector(containah);

        let loaderParams = {
            container: loader,
            renderer: 'svg',
            autoplay: true,
            prerender: true,
            loop: true,
            path: pathu
        };
        let loaderAnim;
        loaderAnim = lottie.loadAnimation(loaderParams);

    }
    Lottie('.lottie-recipe',"assets/lotties/01_recipe.json");
    Lottie('.lottie-beverage',"assets/lotties/02_beverage.json");
    Lottie('.lottie-object',"assets/lotties/03_object.json");
    Lottie('.lottie-serie',"assets/lotties/04_serie.json");
    Lottie('.lottie-mantra',"assets/lotties/05_mantra.json");
    Lottie('.lottie-song',"assets/lotties/06_song.json");
    Lottie('.lottie-game',"assets/lotties/07_game.json");
    Lottie('.lottie-app',"assets/lotties/08_app.json");

});


//CUSTOM CURSOR
$(document).ready(function(){
    var cursor = $(".cursor");

    $(window).mousemove(function(e) {
        cursor.css({
            top: e.clientY - cursor.height() / 2,
            left: e.clientX - cursor.width() / 2
        });
    });

    $(window)
        .mouseleave(function() {
            cursor.css({
                opacity: "0"
            });
        })
        .mouseenter(function() {
            cursor.css({
                opacity: "1"
            });
        });
    $(".orc-cardOpen")
        .mouseleave(function() {
            cursor.addClass("close");
        });
    $(".orc-cardOpen__card")
        .mouseenter(function() {
            cursor.removeClass("close");
        })
        .mouseleave(function() {
            cursor.addClass("close");
        });
    // $(".link-project")
    //     .mouseenter(function() {
    //         project.addClass("test");
    //     })
    //     .mouseleave(function() {
    //         project.removeClass("test");
    //     });
    // $(".link-category")
    //     .mouseenter(function() {
    //         category.addClass("active");
    //     })
    //     .mouseleave(function() {
    //         category.removeClass("active");
    //     });
});