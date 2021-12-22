// process styles
import "./styles.scss";

const Stages = {
    LANDING: 'landing',
    MESSAGE: 'message',
    CAROUSEL: 'carousel',
    BODY_CARD: 'body-card',
};


class App {

    nextMessages = [
        "So easy, let's draw another card.",
        "<strong>{{USER_NAME}}</strong> your future is bright, keep going!",
        "You have 5 predictions left, let's choose another card.",
        "I can see more great things for you {{USER_NAME}}, take another card.",
        "You're already halfway through it, let's move on the next one!",
        "2022 is looking exciting, what will be the next one?",
        "Only one left, let's go!"
    ]

    predictions = {
        recipe: {
            label: "A recipe",
            lottie: "lottie-recipe",
            options: [
                {
                    name: "Sweet Potato and Egg Skillet",
                    description: "Sweet Potato at breakfast. Yes you read that right {{USER_NAME}}. This skillet recipe will be your go to meal on a lazy sunday morning.",
                    image: "/Recipe/sweet_potato_and_egg.jpg",
                    link: "https://www.tasteofhome.com/recipes/sweet-potato-and-egg-skillet/"
                },
                {
                    name: "Baked Eggplant Rollatini",
                    description: "Who said vegetarian cuisine could not be tasty? If you're not convinced already, this Eggplant recipe will change your mind forever in 2022!",
                    image: "/Recipe/baked_eggplant_rollatini.jpg",
                    link: "https://asimplepalate.com/blog/baked-eggplant-rollatini/"
                },
                {
                    name: "Roasted Vegetables",
                    description: "No, I'm not even kidding! Roasted vegetables are so overlooked. Seasoned with the right spices/herbs and served with basmati rice, it's delicious. Definitely your go-to for the days you don't feel like cooking!",
                    image: "/Recipe/roasted_vegetables.jpg",
                    link: "https://www.cookingclassy.com/roasted-vegetables/"
                },
                {
                    name: "Lemon Gooey Butter Cookies",
                    description: "Look at these beauties, they will be your favorite comfy and refreshing little treats after a hard week of grinding.",
                    image: "/Recipe/lemon_gooey_butter_cookies.jpg",
                    link: "https://www.shugarysweets.com/lemon-gooey-butter-cookies/"
                },
            ]
        },
        beverage: {
            label: "A beverage",
            lottie: "lottie-beverage",
            options: [
                {
                    name: "Beetroot Latte",
                    description: "Beetroot, ewww... Hang on, I can picture you at a terrasse, eyes-closed, sipping your beetroot latte getting your energy boost.",
                    image: "/Beverage/beetroot_latte.jpg",
                    link: "https://www.theconsciousplantkitchen.com/beetroot-latte/"
                },
                {
                    name: "Hibiscus Iced Tea",
                    description: "High in vitamin C, hibiscus will take over the world in 2022 and your custom iced tea recipe will be a complete red hot this summer!",
                    image: "/Beverage/hibiscus_mint_iced_tea.jpg",
                    link: "https://www.marthastewart.com/341018/hibiscus-mint-iced-tea"
                },
                {
                    name: "Water Kefir",
                    description: "New fermented beverages, like Kombucha in 2021, will pop-up in 2022. You'll love a refreshing homemade Water Kefir in an early spring vibe!",
                    image: "/Beverage/water_kefir.jpg",
                    link: "https://www.feastingathome.com/water-kefir/"
                },
                {
                    name: "Prebiotic Cola",
                    description: "In 2021, Coca Cola realeased a new recipe for its Zero Sugar version, but the future of soda is probiotic. This boosted Cola will take soda to the next level.",
                    image: "/Beverage/poppi_cola.jpg",
                    link: "https://www.drinkpoppi.com/products/classic-cola/"
                },
            ]
        },
        object: {
            label: "An object",
            lottie: "lottie-object",
            options: [
                {
                    name: "Apaart Socks",
                    description: "The socks from your aunt were a great christmas gift but they won't last long in 2022. {{USER_NAME}}, before restocking the exact same socks as your colleagues, have a look at those crazy socks.",
                    image: "/Object/apart_socks.jpg",
                    link: "https://www.apaart.lu"
                },
                {
                    name: "Magnet Bottle Opener",
                    description: "With a good old Coke, a fresh beer or a revigorating Tourtel, you'll love the satisfying feeling this Bottle Opener brings to your happy hour moments.",
                    image: "/Object/magnet_bottle_opener.jpg",
                    link: "https://hofats.com/en/JOHNNY-CATCH-Magnet-Bottle-Opener/040101"
                },
                {
                    name: "Harry Potter Remote Control Wand",
                    description: "With the rumor of a Harry Potter movie coming back in 2022, you'll love playing with this Remote Control Wand to remind you the good old memories.",
                    image: "/Object/harry_potter_remote_control_wand.jpg",
                    link: "https://www.amazon.com/dp/B00FXMDRZK"
                },
                {
                    name: "A riso print",
                    description: "I can see you wondering yourself what's missing in your interior. Don't look too far, what you need is a beautiful design print to add some colors and caracter to your home.",
                    image: "/Object/riso_print.jpg",
                    link: "https://fidele-editions.com/en/editions/prints/"
                },
            ]
        },
        series: {
            label: "A series",
            lottie: "lottie-serie",
            options: [
                {
                    name: "Behind her eyes",
                    description: "Have you ever heard about ''astral projections''? Well, the intrigue of this series is all about it. You'll be blown away by the end!",
                    image: "/Series/behind_her_eyes.jpg",
                    link: "https://www.netflix.com/lu-en/title/80244630"
                },
                {
                    name: "Brand New Cherry Flavor",
                    description: "A horror/drama series with a twist. If you're not yet into David Lynch style then this series will definitely turn you into a fan.",
                    image: "/Series/brand_new_cherry_flavor.jpg",
                    link: "https://www.netflix.com/title/80233374"
                },
                {
                    name: "Tear Along the Dotted Line",
                    description: "Famous Italian cartoonist Zerocalcare will take you, for the first time, on an unexpected animated journey across his personal life. Imbued with quick-witted and dark humour this binge-watchable series is a real rollercoaster of emotions that will make you crave for more. ",
                    image: "/Series/tear_along_the_dotted_line.jpg",
                    link: "https://www.netflix.com/lu-en/title/81304528"
                },
                {
                    name: "The Innocent",
                    description: "Based on Harlan Coben's novel \"The Innocent\", this spanish detective & drama series will keep you in suspense throughout the episodes. Breathless!",
                    image: "/Series/the_innocent.jpg",
                    link: "https://www.netflix.com/lu-en/title/81036936"
                },
            ]
        },
        mantra: {
            label: "A mantra",
            lottie: "lottie-mantra",
            options: [
                {
                    name: "I am a societal node.",
                    description: "We all have this influential and dangerous power of contagion. Whether the effects are positive or insidiously negative, our impact can easily be missed or completely out of sight. This explains why we have so little occasions to notice our careless attitudes and so many reasons to give up our goodwill. But, never forget that you're contagious so use this power for what you care for.",
                    image: "/Mantra/societal_node.jpg"
                },
                {
                    name: "I control what I can control.",
                    description: "If the COVID crisis taught us something it's this! You can never control other people or the circumstances around your life but you can always control your reaction to them. More stoicism principles in your life is good for your mental health.",
                    image: "/Mantra/control.jpg"
                },
                {
                    name: "I am the master of my distraction.",
                    description: "We live in a world where there is a war for our attention. But it will never help to blame the platforms that use manipulative technics to stick you in their infernal loop. In the end, who's stopping you from deleting the app or turning the notifications off? Maybe you're trying to escape something more important.",
                    image: "/Mantra/master.jpg"
                },
                {
                    name: "I commit to one thing.",
                    description: "There are so much things you want to do that you end up doing nothing. Don't be afraid of your own light, you are able to achieve what you want. How? Choose one single thing, start the smallest action towards your goal and commit to it.",
                    image: "/Mantra/commit.jpg"
                },
            ]
        },
        song: {
            label: "A song",
            lottie: "lottie-song",
            options: [
                {
                    name: "VINNYGOTHEAT - I like to get wild",
                    description: "For you wild parties in 2022. At Apart we even have a choregraphy for this one... Please don't judge us :)",
                    image: "/Song/vinnygotheat.jpg",
                    link: "https://www.youtube.com/watch?v=LgB02xlSn98"
                },
                {
                    name: "Karnaval Blue - Forget",
                    description: "We all need this music that helps us getting back in the mood on low-energy days. That's the one in 2022!",
                    image: "/Song/karnaval_blue.jpg",
                    link: "https://www.youtube.com/watch?v=ceNtdxgrA-g"
                },
                {
                    name: "Sufjan Stevens & Angelo De Augustine - Back to Oz",
                    description: "We all need this music that keeps us focus when we are in the flow. That's the one in 2022!",
                    image: "/Song/sufjan_stevens_angelo_de_augustine.jpg",
                    link: "https://www.youtube.com/watch?v=00f2kSnIxfw"
                },
                {
                    name: "Rachel K Collier - Microfreaking Out",
                    description: "We all need this music that motivates us to go above and beyond. That's the one for 2022!",
                    image: "/Song/rachel_k_collier.jpg",
                    link: "https://www.youtube.com/watch?v=Y-7jc79DrB0"
                },
            ]
        },
        game: {
            label: "A game",
            lottie: "lottie-game",
            options: [
                {
                    name: "Spikeball",
                    description: "A very funny sport to play with your friends, family or colleagues (tested & approved at Apart). All I can tell you {{USER_NAME}} is that there are a ball and a trampoline.",
                    image: "/Game/spikeball.jpg",
                    link: "https://spikeball.com/"
                },
                {
                    name: "Use Your Words",
                    description: "A surprisingly hilarious game to play with your friends or colleagues! It's crazy how captions can completely change and fit a situation at the same time.",
                    image: "/Game/use_your_words.jpg",
                    link: "https://store.steampowered.com/app/521350/Use_Your_Words/"
                },
                {
                    name: "PSYCH!",
                    description: "A psychologic game where you have to invent bogus information and then bluff so the opposing team believes you it's the right answer to the original question. Surprisingly effective!",
                    image: "/Game/psych.jpg",
                    link: "https://www.warnerbros.com/games-and-apps/psych-outwit-your-friends"
                },
                {
                    name: "Townscaper",
                    description: "I know you already have been lost in a loop of satisfying videos on Tik-Tok. No shame at all, we all have a passion for satisfying experience, and here is one you don't want to miss in 2022!",
                    image: "/Game/townscaper.jpg",
                    link: "https://www.oskarstalberg.com/Townscaper"
                },
            ]
        },
        app: {
            label: "An app",
            lottie: "lottie-app",
            options: [
                {
                    name: "Twitch",
                    description: "Stop turning the TV on by reflex. Have a look at Twitch. It started with gaming but more and more shows on various topics are taking over the platform.",
                    image: "/App/twitch.jpg",
                    link: "https://www.twitch.tv/"
                },
                {
                    name: "Zelf",
                    description: "Manage your banking straight from your messenger applications. Whut? yes, that's right, it's now a thing with Zelf! And since its recent integration with Discord, it is becoming the first bank of the Metaverse.",
                    image: "/App/zelf.jpg",
                    link: "https://zelf.co/"
                },
                {
                    name: "Bravo",
                    description: "No need to be a developer with Bravo. The No Code tool that revolutionizes how we build applications. {{USER_NAME}}, what's your secret app project for 2022?",
                    image: "/App/bravo_studio.jpg",
                    link: "https://www.bravostudio.app/"
                },
                {
                    name: "Raycast",
                    description: "A supercharged productivity tool to help you access applications, check information and perform actions easily from a single keyboard command.",
                    image: "/App/raycast.jpg",
                    link: "https://www.raycast.com/"
                },
            ]
        }
    }

    constructor() {
        this.body = $('body');
        this.username = 'Thomas Anderson';
        this.stage = Stages.LANDING;
    }

    initialize() {

        // flickity
        this.initializeFlickity();

        // cursor
        this.initializeCursor();

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
                //console.log('test');
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

            if (this.stage !== Stages.BODY_CARD && this.cursor.hasClass('close')) { // dirty stuff ...
                this.cursor.removeClass("close");
            }

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
            if (!$(".orc-cardOpen").hasClass('-out')) {
                this.cursor.removeClass("close");
            }
        });

        $(".js-modal-content").on('mouseover', () => {
            this.cursor.addClass("dark");
        });

        $(".js-modal-content").on('mouseleave', () => {
            this.cursor.removeClass("dark");
        });
        $(".js-what-button, .js-music, .js-cardOpen-link, .js-predict, .js-share").on('mouseover', () => {
            this.cursor.addClass("baguette-small");
        });

        $(".js-what-button, .js-music, .js-cardOpen-link, .js-predict, .js-share").on('mouseleave', () => {
            this.cursor.removeClass("baguette-small");
        });
        $(".js-card-small").on('mouseover', () => {
            this.cursor.addClass("baguette");
        });

        $(".js-card-small").on('mouseleave', () => {
            this.cursor.removeClass("baguette");
        });

        $('.js-card-open').on('mouseover', (event) => {

            let element = $(event.target);

            if (this.stage === Stages.BODY_CARD) {

                if (element.parents('.orc-cardOpen__card').length === 0) {
                    this.cursor.addClass("close");
                } else {
                    this.cursor.removeClass("close");
                }

            } else {
                this.cursor.removeClass("close");
            }

        });

    }

    initializeSound() {

        this.playing = false;
        this.audioID = 3;
        this.muted = false;

        let autorun = false;

        this.musicButton = $('.js-music');

        if (createjs.Sound.initializeDefaultPlugins()) {

            if (createjs.BrowserDetect.isIOS || createjs.BrowserDetect.isAndroid || createjs.BrowserDetect.isBlackberry) {
                // sound can't be autorun
                autorun = false;
            }

            // register sounds

            let sounds = [
                {src: "/assets/audio/harpdescend_bw.25570.mp3", id: 1},
                {src: "/assets/audio/magical_fantasy.mp3", id: 2},
                {src: "/assets/audio/the_magic.mp3", id: 3},
                {src: "/assets/audio/mixkit-ending-wind-swoosh-1482.mp3", id: 4},
                {src: "/assets/audio/mixkit-cool-interface-click-tone-2568.mp3", id: 5},
            ];

            createjs.Sound.registerSounds(sounds);
            createjs.Sound.volume = 0.2; // it's background sound, so keep it low

            createjs.Sound.on("fileload", (file) => {
                if (file.id === 3 && autorun) {
                    this.playSound(3);
                }
            });

        } else {
            this.muted = true;
            this.audioID = null;
            this.musicButton.addClass('-off');
        }

    }

    preachProphecy(prophecy) {

        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

        let hash = '';

        for (let i = 0; i < prophecy.length; i++) {
            let prophecyElement = prophecy[i];
            hash += prophecyElement.toString(2).padStart(2, '0');
            if (i < prophecy.length - 1) {
                hash += '-';
            }
        }

        let finalHash = '';

        for (let i = 0; i < hash.length; i++) {
            finalHash += hash[i] == '1' ? hash[i] : characters.charAt(Math.floor(Math.random() * characters.length))
        }

        window.history.replaceState('Object', 'Title', '#prophecy' + finalHash);

    }

    shuffleCards() {

        let prophecy = [];

        for (const predictionKey of Object.keys(this.predictions)) {
            let prediction = this.predictions[predictionKey];
            prophecy.push(Math.floor(Math.random() * prediction.options.length))
        }

        return prophecy;

    }

    prepareCards() {

        let prophecy = [];
        let heathen = true;

        if (location.hash.length === 32) {

            heathen = false;

            let dirtyProphecy = location.hash.replace('#prophecy', '');

            let cleansedProphecy = '';

            for (let i = 0; i < dirtyProphecy.length; i++) {
                if ((i + 1) % 3 === 0) {
                    cleansedProphecy += '-';
                } else {
                    cleansedProphecy += dirtyProphecy[i] == '1' ? dirtyProphecy[i] : '0';
                }
            }

            for (const cleansedProphecyElement of cleansedProphecy.split('-')) {
                let realProphecy = parseInt(cleansedProphecyElement, 2);
                if (realProphecy >= 0 && realProphecy < 4) {
                    prophecy.push(realProphecy)
                } else {
                    heathen = true;
                    break;
                }
            }

        }

        if (heathen) {
            prophecy = this.shuffleCards();
            this.preachProphecy(prophecy);
        }

        let i = 0;

        for (const predictionKey of Object.keys(this.predictions)) {

            let prediction = this.predictions[predictionKey];
            let chosenPrediction = prediction.options[prophecy[i]];
            let cardElement = $('.js-card-small[data-type="' + predictionKey + '"]');

            if (cardElement) {

                cardElement.find('.js-card-subTitle').html(prediction.label);
                cardElement.find('.js-card-title').html(chosenPrediction.name);
                cardElement.find('.js-card-text').html(this.impersonate(chosenPrediction.description));
                cardElement.find('.js-card-image').attr('src', '/assets/images' + chosenPrediction.image);
                cardElement.find('.js-card-link').attr('href', chosenPrediction.link).hide();

            }

            i++;

        }

    }

    moveToStage(stage) {

        this.stage = stage;

        // reset class
        this.body.attr('class', '');
        this.body.addClass(stage);

        this.carousel = document.querySelector('.main-carousel');
        this.flkty = new Flickity(this.carousel);

        switch (stage) {
            case Stages.MESSAGE:

                this.prepareCards();
                createjs.Sound.stop();

                setTimeout(() => {
                    this.audioID = null;
                    this.playDistinctSound(1);
                }, 100);

                setTimeout(() => {
                    this.moveToStage(Stages.CAROUSEL);
                    this.playSound(2);
                    this.flkty.resize();
                }, 6200);

                break;
            case Stages.CAROUSEL:

                // return cards back
                let cards = $('.js-card-small.-selected');
                // wish message
                let wishMessage = $('.js-wish');

                $('.js-card-open').removeClass('-out');
                this.cursor.removeClass("close");

                setTimeout(() => {
                    cards.removeClass('-selected').addClass('-opened');
                }, 100);

                // how many cards are already open
                let activeCards = $('.js-card-small.-opened').length;

                if (activeCards === 8) {
                    setTimeout(() => {
                        $('.js-prediction-text').html('');

                        // if the wish message is not visible yet, we scroll down to it
                        if (!wishMessage.hasClass('-end-exp')) {

                            // show message
                            wishMessage.addClass('-end-exp');

                            // animate scroll to bottom
                            $([document.documentElement, document.body]).animate({
                                scrollTop: wishMessage.offset().top
                            }, 200);
                        }
                    }, 100);
                } else if (activeCards > 0) {
                    // get the next message and inject username
                    $('.js-prediction-text').html(this.impersonate(this.nextMessages[activeCards - 1]));
                }
                break;

            case Stages.BODY_CARD:
                $('.js-lottie').html('');
                this.seekLottie(); // search for available looties

                break

        }

    }

    seekLottie() {
        this.lottie('.lottie-recipe', "/assets/lotties/01_recipe.json");
        this.lottie('.lottie-beverage', "/assets/lotties/02_beverage.json");
        this.lottie('.lottie-object', "/assets/lotties/03_object.json");
        this.lottie('.lottie-series', "/assets/lotties/04_serie.json");
        this.lottie('.lottie-mantra', "/assets/lotties/05_mantra.json");
        this.lottie('.lottie-song', "/assets/lotties/06_song.json");
        this.lottie('.lottie-game', "/assets/lotties/07_game.json");
        this.lottie('.lottie-app', "/assets/lotties/08_app.json");
    }

    playSound(id, volume = 0.5) {

        this.audioID = id;

        if (this.muted) {
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

        if (this.muted) {
            return
        }

        createjs.Sound.play(id, {loop: 0, volume: volume});
        this.musicButton.removeClass('-off');
    }

    toggleSound() {

        this.musicButton.toggleClass('-off');
        this.muted = !this.muted;

        if (this.playing) {
            createjs.Sound.stop();
            this.playing = false;
        } else if (this.audioID) {
            this.playSound(this.audioID);
        }

    }

    //
    // Lottie

    lottie(containah, pathu) {

        let loader = document.querySelector(containah);

        if (loader) {
            let loaderParams = {
                container: loader,
                renderer: 'svg',
                autoplay: true,
                prerender: true,
                loop: true,
                path: pathu
            };
            let loaderAnim;
            lottie.loadAnimation(loaderParams);
        }

    }

    attachEvents() {

        $('.js-predict').on('click touch', () => {
            this.username = $('.js-predict-username').val();
            this.moveToStage(Stages.MESSAGE);
        });

        $('.js-predict-username').on('keyup', (event) => {

            let inputElement = $('.js-predict-username');

            if (inputElement.val().length > 1) {
                $('.js-predict').removeClass('disabled');
            } else {
                $('.js-predict').addClass('disabled');
            }

            if (event.key === "Enter" && !inputElement.hasClass('disabled')) {
                this.username = inputElement.val();
                this.moveToStage(Stages.MESSAGE);
            }

        });

        $('.js-card-small').on('click touch', (event) => {

            $('.js-wish').removeClass('-end-exp');
            this.playDistinctSound(5);

            // check if other cards are selected
            if ($('.js-card-small.-selected').length === 0) {

                let element = $(event.currentTarget);
                element.addClass('-selected');

                // Update Card Open

                $('.js-lottie').attr('class', 'lottie js-lottie lottie-' + element.data('type'));
                $('.js-lottie-bg').attr('class', 'orc-cardOpen__lottie js-lottie-bg bg-' + element.data('color'));
                $('.js-cardOpen-icon').attr('class', 'orc-cardOpen__itemTop js-cardOpen-icon ' + element.data('icon'));
                $('.js-cardOpen-color').attr('class', 'orc-cardOpen__card js-cardOpen-color -' + element.data('color'));

                $('.js-cardOpen-subTitle').html(element.find('.js-card-subTitle').html());
                $('.js-cardOpen-title').html(element.find('.js-card-title').html());
                $('.js-cardOpen-text').html(element.find('.js-card-text').html());
                $('.js-cardOpen-image').attr('src', element.find('.js-card-image').attr('src'));

                let link = element.find('.js-card-link').attr('href');

                if (link) {
                    $('.js-cardOpen-link').attr('href', link).show();
                } else {
                    $('.js-cardOpen-link').hide();
                }

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
            event.stopPropagation();
            event.preventDefault();
            // get the next message and inject username
            $('.js-prediction-text').html(this.impersonate(this.nextMessages[activeCards - 1]));
            $('.js-modal').toggleClass('-opened');
            $(document.body).toggleClass('modal-open');
        });

        $(document).on('click touch', () => {

            if (this.cursor.hasClass('close')) {

                if (this.stage === Stages.BODY_CARD) {

                    $('.js-card-open').addClass('-out');

                    setTimeout(() => {
                        this.moveToStage(Stages.CAROUSEL);
                        this.cursor.removeClass("close");
                    }, 600);

                    setTimeout(() => {
                        this.cursor.removeClass("close");
                    }, 650);

                }

            }

        });


        $(document).on('keydown', (event) => {

            if (event.key === "Escape" && this.stage === Stages.BODY_CARD) {

                // COPY PASTA - BERK, BUT I'M LAZY!!!!!

                $('.js-card-open').addClass('-out');

                setTimeout(() => {
                    this.moveToStage(Stages.CAROUSEL);
                    this.cursor.removeClass("close");
                }, 600);

                setTimeout(() => {
                    this.cursor.removeClass("close");
                }, 650);

            }

        });

        // Sound

        this.musicButton.on('click touch', () => {
            this.toggleSound();
        });

        // Sharing

        $('.js-share').on('click touch', (event) => {

            event.stopPropagation();
            event.preventDefault();

            navigator.clipboard.writeText(location.origin);

            $('.js-clipboard').addClass('-opened');

            setTimeout(() => {
                $('.js-clipboard').removeClass('-opened');
            }, 2000);

        });

    }

    impersonate(string) {
        return String(string).replace('{{USER_NAME}}', this.username);
    }

}

let app = new App();

document.addEventListener("DOMContentLoaded", () => {
    app.initialize();
});