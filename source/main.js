// process styles
import "./styles.scss";

const Stages = {
    LANDING: 'landing',
    MESSAGE: 'message',
    CAROUSEL: 'carousel',
    BODY_CARD: 'body-card',
};

class App {

    constructor() {
        this.body = $('body');
        this.username = '';
        this.stage = Stages.LANDING;
    }

    moveToStage(stage) {

        this.stage = stage;

        // reset class
        this.body.attr('class', '');
        this.body.addClass(stage);

        switch (stage) {
            case Stages.MESSAGE:

                createjs.Sound.stop();

                setTimeout(() => {
                    this.audioID = null;
                    this.playDistinctSound(1);
                },100);

                setTimeout(() => {
                    this.moveToStage(Stages.CAROUSEL);
                    this.playSound(2);
                }, 6200);

                break;
            case Stages.CAROUSEL:

                // TODO : randomize values and build URL

                // return cards back
                let cards = $('.js-card-small.-selected');
                // wish message
                let wishMessage = $('.js-wish');

                setTimeout(() => {

                    cards.removeClass('-selected').addClass('-opened');

                    if ($('.js-card-small.-opened').length === 8 && !wishMessage.hasClass('-end-exp')) {

                        // show message
                        wishMessage.addClass('-end-exp');

                        // animate scroll to bottom
                        $([document.documentElement, document.body]).animate({
                            scrollTop: wishMessage.offset().top
                        }, 1000);

                    }

                },150);


                break;

            case Stages.BODY_CARD:



                break

        }

    }

    initialize() {

        // flickity
        this.initializeFlickity();

        // cursor
        this.initializeCursor();

        // Lottie
        this.initializeLottie();

        // SoundJS
        this.initializeSound();

        this.attachEvents();

        // TODO : check if we have a valid URL and move to the right stage with the saved cards

    }

    initializeFlickity() {

        let carousel = document.querySelector('.main-carousel');
        let buttonGroup = document.querySelector('.carousel-nav');
        let selectedNavButton = buttonGroup.querySelector('.show-m');

        let flkty = new Flickity(carousel, {
            // options
            contain: true,
            prevNextButtons: false,
            wrapAround: true,
            imagesLoaded: true,
            watchCSS: true
        });

        flkty.on('select', function () {
            let card = flkty.selectedElement.dataset.card;
            let navButton = buttonGroup.querySelector(`[data-card="${card}"]`);
            if (navButton != selectedNavButton) {
                selectedNavButton.classList.remove('show-m');
                navButton.classList.add('show-m');
                selectedNavButton = navButton;
            }
        });

        const mediaQuery = window.matchMedia('(min-width: 992px)');

        let cards = document.querySelectorAll('.carousel-cell');

        function handleTabletChange(e) {
            cards.forEach(function (card, index) {
                card.addEventListener("mouseenter", function (e) {

                    document.getElementById(e.target.dataset.card).classList.add("show");
                });
                card.addEventListener("mouseleave", function (e) {

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

    }

    initializeCursor() {

        this.cursor = $(".cursor");

        $(window).on('mousemove', (event) => {
            this.cursor.css({
                top: event.clientY - (this.cursor.height() / 4),
                left: event.clientX - (this.cursor.width() / 4)
            });
        });

        $(window).on('mouseleave', () => {
            this.cursor.css({
                opacity: "0"
            });
        });

        $(window).on('mouseenter', () => {
            this.cursor.css({
                opacity: "1"
            });
        });

        $(".orc-cardOpen").on('mouseleave', () => {
            this.cursor.addClass("close");
        });

        $(".js-modal-content").on('mouseover', () => {
            this.cursor.addClass("dark");
        });

        $(".js-modal-content").on('mouseleave', () => {
            this.cursor.removeClass("dark");
        });

        $('.js-card-open').on('mouseover', (event) => {

            let element = $(event.target);

            if (element.parents('.orc-cardOpen__card').length === 0) {
                this.cursor.addClass("close");
            } else {
                this.cursor.removeClass("close");
            }

        });

    }

    initializeLottie() {
        this.lottie('.lottie-recipe', "assets/lotties/01_recipe.json");
        this.lottie('.lottie-beverage', "assets/lotties/02_beverage.json");
        this.lottie('.lottie-object', "assets/lotties/03_object.json");
        this.lottie('.lottie-serie', "assets/lotties/04_serie.json");
        this.lottie('.lottie-mantra', "assets/lotties/05_mantra.json");
        this.lottie('.lottie-song', "assets/lotties/06_song.json");
        this.lottie('.lottie-game', "assets/lotties/07_game.json");
        this.lottie('.lottie-app', "assets/lotties/08_app.json");
    }

    initializeSound(){

        this.playing = false;
        this.audioID = 3;
        this.audioEnabled = true;

        this.musicButton = $('.js-music');

        if (createjs.Sound.initializeDefaultPlugins()) {

            if (createjs.BrowserDetect.isIOS || createjs.BrowserDetect.isAndroid || createjs.BrowserDetect.isBlackberry) {
                // sound can't be autorun
                this.audioEnabled = false;
            }

            // register sounds

            let assetsPath = "/assets/audio/";
            let sounds = [
                {src: "harpdescend_bw.25570.mp3", id: 1},
                {src: "magical_fantasy.mp3", id: 2},
                {src: "the_magic.mp3", id: 3},
                {src: "mixkit-ending-wind-swoosh-1482.mp3", id: 4},
                {src: "mixkit-cool-interface-click-tone-2568.mp3", id: 5},
            ];

            createjs.Sound.registerSounds(sounds, assetsPath);
            createjs.Sound.volume = 0.2;

            createjs.Sound.on("fileload", (file) => {
                if(file.id === 3 && this.audioEnabled){
                    this.playSound(3);
                }
            });

        }else{
            this.audioEnabled = false1;
        }

    }

    playSound(id, volume = 0.5) {

        this.audioID = id;

        if(!this.audioEnabled){
            return
        }

        this.playing = true;

        let instance = createjs.Sound.createInstance(id);

        instance.on("succeeded", () => {
            this.musicButton.removeClass('-off');
        });

        instance.play({loop: -1, volume: volume});
    }

    playDistinctSound(id, volume = 0.5) {

        if(!this.audioEnabled){
            return
        }

        createjs.Sound.play(id,{loop: 0, volume: volume});
        this.musicButton.removeClass('-off');
    }

    toggleSound(){

        this.musicButton.toggleClass('-off');
        this.audioEnabled = !this.audioEnabled;

        if(this.playing){
            createjs.Sound.stop();
            this.playing = false;
        }else if(this.audioID){
            this.playSound(this.audioID);
        }

    }

    //
    // Lottie

    lottie(containah, pathu) {

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

    attachEvents() {

        $('.js-predict').on('click touch', () => {
            this.username = $('.js-predict-username').val();
            this.moveToStage('message');
        });

        $('.js-card-small').on('click touch', (event) => {

            // check if other cards are selected
            if ($('.js-card-small.-selected').length === 0) {

                let element = $(event.currentTarget);
                element.addClass('-selected');

                this.playDistinctSound(4);

                // copy information
                setTimeout(() => {
                    this.moveToStage(Stages.BODY_CARD)

                    setTimeout(() => {
                        $('.js-main-carousel').addClass('-opened');
                    }, 250);

                }, 400);

            }

        });

        $('.js-what-button, .js-modal-close').on('click touch', (event) => {
            $('.js-modal').toggleClass('-opened');
            $(document.body).toggleClass('modal-open');
        });

        $(document).on('click touch', () => {

            if(this.cursor.hasClass('close')){

                if($('.js-modal').hasClass('-opened')){



                }else if (this.stage === Stages.BODY_CARD) {

                    this.moveToStage(Stages.CAROUSEL);

                    setTimeout(() => {
                        this.cursor.removeClass('close');
                    }, 50);

                }

            }

        });


        $(document).on('keydown', (event) => {


        });

        // Sound

        this.musicButton.on('click touch', () => {
            this.toggleSound();
        });

    }

}

let app = new App();

document.addEventListener("DOMContentLoaded", () => {
    app.initialize();
});