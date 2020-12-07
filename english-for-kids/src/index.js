import './style.css';
//import './js/card';

import { generateMain, sayWord, generateAction, checkCheckbox, rotateCard } from './js/func';


//Main page generate cards







const card = document.querySelectorAll(".hero__wrapper > div"),
    checkbox = document.querySelector("#bopis"),
    burger = document.querySelector('.burger');
let cardPageGenerated = false;
let numAction = 0;

window.onload = function() {
    generateMain();
    checkCheckbox();
    checkbox.onclick = function() {
        checkCheckbox();
    }

    document.querySelector("body > header > div > div.burger__menu").style.left = '-100%';
    document.querySelector(".mask").style.position = 'relative';
    document.querySelector(".burger").style.transform = 'rotate()';
    burger.onclick = function() {
        if (document.querySelector("body > header > div > div.burger__menu").style.left == '-100%') {
            document.querySelector("body > header > div > div.burger__menu").style.left = '0';
            document.querySelector(".burger").style.transform = 'rotate(90deg)';
            window.onscroll = function() { window.scrollTo(0, 0); };
            document.querySelector(".mask").style.position = 'absolute';
        } else {
            document.querySelector(".burger").style.transform = 'rotate(180deg)';
            document.querySelector(".mask").style.position = 'relative';
            document.querySelector("body > header > div > div.burger__menu").style.left = '-100%';
            window.onscroll = function() { window.scrollTo(); };

        }

    }
    document.querySelector(".mask").onclick = function() {
        if (document.querySelector(".mask").style.position == 'absolute') {
            document.querySelector(".burger").style.transform = 'rotate(180deg)';
            document.querySelector(".mask").style.position = 'relative';
            document.querySelector("body > header > div > div.burger__menu").style.left = '-100%';
            window.onscroll = function() { window.scrollTo(); };
        }
    }

    card.forEach((e, i) => {
        e.onclick = function() {
            if (cardPageGenerated) {
                document.querySelectorAll('.reload').forEach((e, i) => e.onclick = function() {
                    generateAction.reload(i)
                });
                document.querySelectorAll('.reload')[i].onclick = function() {
                    generateAction.reload(i);
                };

                sayWord(numAction, i);

                e.addEventListener('mouseleave', function() {
                    document.querySelectorAll('.cardpage')[i].style.transform = 'rotateY(0deg)';
                    document.querySelectorAll(".description__text")[i].style.display = 'flex';
                    document.querySelectorAll(".description__text_translate")[i].style.display = 'none';
                    document.querySelectorAll('.reload')[i].style.display = 'block';
                });
            } else {
                generateAction(i + 1);
                cardPageGenerated = true;
                numAction = i + 1;
                document.querySelectorAll('.reload').forEach((e, i) => e.onclick = function() {
                    generateAction.reload(i)
                });
            }
            checkCheckbox();



        }

    });



};

const burgerUrl = document.querySelectorAll('.burger__url');
burgerUrl.forEach((e, i) => {
    e.onclick = function() {
        if (i == 0) {
            generateMain();
            document.querySelector(".burger").style.transform = 'rotate(180deg)';
            document.querySelector(".mask").style.position = 'relative';
            document.querySelector("body > header > div > div.burger__menu").style.left = '-100%';
            cardPageGenerated = false;
            window.onscroll = function() {
                window.scrollTo();
            };
            checkCheckbox();
        } else {
            generateAction(i);
            cardPageGenerated = true;
            numAction = i;
            document.querySelector(".burger").style.transform = 'rotate(180deg)';
            document.querySelector(".mask").style.position = 'relative';
            document.querySelector("body > header > div > div.burger__menu").style.left = '-100%';
            window.onscroll = function() { window.scrollTo(); };
            checkCheckbox();
        }
    }
});




//event delegation  для обработки событий кликов в игре
// createElement  append removeChild innerHtml