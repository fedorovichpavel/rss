/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! namespace exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _js_func__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/func */ "./src/js/func.js");

//import './js/card';




//Main page generate cards







const card = document.querySelectorAll(".hero__wrapper > div"),
    checkbox = document.querySelector("#bopis"),
    burger = document.querySelector('.burger');
let cardPageGenerated = false;
let numAction = 0;

window.onload = function() {
    (0,_js_func__WEBPACK_IMPORTED_MODULE_1__.generateMain)();
    (0,_js_func__WEBPACK_IMPORTED_MODULE_1__.checkCheckbox)();
    checkbox.onclick = function() {
        (0,_js_func__WEBPACK_IMPORTED_MODULE_1__.checkCheckbox)();
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
                    _js_func__WEBPACK_IMPORTED_MODULE_1__.generateAction.reload(i)
                });
                document.querySelectorAll('.reload')[i].onclick = function() {
                    _js_func__WEBPACK_IMPORTED_MODULE_1__.generateAction.reload(i);
                };

                (0,_js_func__WEBPACK_IMPORTED_MODULE_1__.sayWord)(numAction, i);

                e.addEventListener('mouseleave', function() {
                    document.querySelectorAll('.cardpage')[i].style.transform = 'rotateY(0deg)';
                    document.querySelectorAll(".description__text")[i].style.display = 'flex';
                    document.querySelectorAll(".description__text_translate")[i].style.display = 'none';
                    document.querySelectorAll('.reload')[i].style.display = 'block';
                });
            } else {
                (0,_js_func__WEBPACK_IMPORTED_MODULE_1__.generateAction)(i + 1);
                cardPageGenerated = true;
                numAction = i + 1;
                document.querySelectorAll('.reload').forEach((e, i) => e.onclick = function() {
                    _js_func__WEBPACK_IMPORTED_MODULE_1__.generateAction.reload(i)
                });
            }
            (0,_js_func__WEBPACK_IMPORTED_MODULE_1__.checkCheckbox)();



        }

    });



};

const burgerUrl = document.querySelectorAll('.burger__url');
burgerUrl.forEach((e, i) => {
    e.onclick = function() {
        if (i == 0) {
            (0,_js_func__WEBPACK_IMPORTED_MODULE_1__.generateMain)();
            document.querySelector(".burger").style.transform = 'rotate(180deg)';
            document.querySelector(".mask").style.position = 'relative';
            document.querySelector("body > header > div > div.burger__menu").style.left = '-100%';
            cardPageGenerated = false;
            window.onscroll = function() {
                window.scrollTo();
            };
            (0,_js_func__WEBPACK_IMPORTED_MODULE_1__.checkCheckbox)();
        } else {
            (0,_js_func__WEBPACK_IMPORTED_MODULE_1__.generateAction)(i);
            cardPageGenerated = true;
            numAction = i;
            document.querySelector(".burger").style.transform = 'rotate(180deg)';
            document.querySelector(".mask").style.position = 'relative';
            document.querySelector("body > header > div > div.burger__menu").style.left = '-100%';
            window.onscroll = function() { window.scrollTo(); };
            (0,_js_func__WEBPACK_IMPORTED_MODULE_1__.checkCheckbox)();
        }
    }
});




//event delegation  для обработки событий кликов в игре
// createElement  append removeChild innerHtml

/***/ }),

/***/ "./src/js/card.js":
/*!************************!*\
  !*** ./src/js/card.js ***!
  \************************/
/*! namespace exports */
/*! export cards [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cards": () => /* binding */ cards
/* harmony export */ });
const cards = [
    ['Action 1', 'Action 2', 'Animal 1', 'Animal 2', 'Clothes', 'Emotions', 'Fruit', 'Transport'],
    [{
            word: 'hug',
            translation: 'обнимать',
            image: './src/assets/img/hug.jpg',
            audioSrc: 'audio/hug.mp3'
        },
        {
            word: 'dance',
            translation: 'танцевать',
            image: './src/assets/img/dance.jpg',
            audioSrc: 'audio/dance.mp3'
        },
        {
            word: 'dive',
            translation: 'нырять',
            image: './src/assets/img/dive.jpg',
            audioSrc: 'audio/dive.mp3'
        },
        {
            word: 'draw',
            translation: 'рисовать',
            image: './src/assets/img/draw.jpg',
            audioSrc: 'audio/draw.mp3'
        },
        {
            word: 'fish',
            translation: 'ловить рыбу',
            image: './src/assets/img/fish.jpg',
            audioSrc: 'audio/fish.mp3'
        },
        {
            word: 'fly',
            translation: 'летать',
            image: './src/assets/img/fly.jpg',
            audioSrc: 'audio/fly.mp3'
        },
        {
            word: 'cry',
            translation: 'плакать',
            image: './src/assets/img/cry.jpg',
            audioSrc: 'audio/cry.mp3'
        },
        {
            word: 'jump',
            translation: 'прыгать',
            image: './src/assets/img/jump.jpg',
            audioSrc: 'audio/jump.mp3'
        }
    ],
    [{
            word: 'open',
            translation: 'открывать',
            image: './src/assets/img/open.jpg',
            audioSrc: 'audio/open.mp3'
        },
        {
            word: 'play',
            translation: 'играть',
            image: './src/assets/img/play.jpg',
            audioSrc: 'audio/play.mp3'
        },
        {
            word: 'point',
            translation: 'указывать',
            image: './src/assets/img/point.jpg',
            audioSrc: 'audio/point.mp3'
        },
        {
            word: 'ride',
            translation: 'ездить',
            image: './src/assets/img/ride.jpg',
            audioSrc: 'audio/ride.mp3'
        },
        {
            word: 'run',
            translation: 'бегать',
            image: './src/assets/img/run.jpg',
            audioSrc: 'audio/run.mp3'
        },
        {
            word: 'sing',
            translation: 'петь',
            image: './src/assets/img/sing.jpg',
            audioSrc: 'audio/sing.mp3'
        },
        {
            word: 'skip',
            translation: 'пропускать, прыгать',
            image: './src/assets/img/skip.jpg',
            audioSrc: 'audio/skip.mp3'
        },
        {
            word: 'swim',
            translation: 'плавать',
            image: './src/assets/img/swim.jpg',
            audioSrc: 'audio/swim.mp3'
        }
    ],
    [{
            word: 'cat',
            translation: 'кот',
            image: './src/assets/img/cat.jpg',
            audioSrc: 'audio/cat.mp3'
        },
        {
            word: 'chick',
            translation: 'цыплёнок',
            image: './src/assets/img/chick.jpg',
            audioSrc: 'audio/chick.mp3'
        },
        {
            word: 'chicken',
            translation: 'курица',
            image: './src/assets/img/chicken.jpg',
            audioSrc: 'audio/chicken.mp3'
        },
        {
            word: 'dog',
            translation: 'собака',
            image: './src/assets/img/dog.jpg',
            audioSrc: 'audio/dog.mp3'
        },
        {
            word: 'horse',
            translation: 'лошадь',
            image: './src/assets/img/horse.jpg',
            audioSrc: 'audio/horse.mp3'
        },
        {
            word: 'pig',
            translation: 'свинья',
            image: './src/assets/img/pig.jpg',
            audioSrc: 'audio/pig.mp3'
        },
        {
            word: 'rabbit',
            translation: 'кролик',
            image: './src/assets/img/rabbit.jpg',
            audioSrc: 'audio/rabbit.mp3'
        },
        {
            word: 'sheep',
            translation: 'овца',
            image: './src/assets/img/sheep.jpg',
            audioSrc: 'audio/sheep.mp3'
        }
    ],
    [{
            word: 'bird',
            translation: 'птица',
            image: './src/assets/img/bird.jpg',
            audioSrc: 'audio/bird.mp3'
        },
        {
            word: 'fish',
            translation: 'рыба',
            image: './src/assets/img/fish1.jpg',
            audioSrc: 'audio/fish.mp3'
        },
        {
            word: 'frog',
            translation: 'жаба',
            image: './src/assets/img/frog.jpg',
            audioSrc: 'audio/frog.mp3'
        },
        {
            word: 'giraffe',
            translation: 'жирафа',
            image: './src/assets/img/giraffe.jpg',
            audioSrc: 'audio/giraffe.mp3'
        },
        {
            word: 'lion',
            translation: 'лев',
            image: './src/assets/img/lion.jpg',
            audioSrc: 'audio/lion.mp3'
        },
        {
            word: 'mouse',
            translation: 'мышь',
            image: './src/assets/img/mouse.jpg',
            audioSrc: 'audio/mouse.mp3'
        },
        {
            word: 'turtle',
            translation: 'черепаха',
            image: './src/assets/img/turtle.jpg',
            audioSrc: 'audio/turtle.mp3'
        },
        {
            word: 'dolphin',
            translation: 'дельфин',
            image: './src/assets/img/dolphin.jpg',
            audioSrc: 'audio/dolphin.mp3'
        }
    ],
    [{
            word: 'skirt',
            translation: 'юбка',
            image: './src/assets/img/skirt.jpg',
            audioSrc: 'audio/skirt.mp3'
        },
        {
            word: 'pants',
            translation: 'брюки',
            image: './src/assets/img/pants.jpg',
            audioSrc: 'audio/pants.mp3'
        },
        {
            word: 'blouse',
            translation: 'блузка',
            image: './src/assets/img/blouse.jpg',
            audioSrc: 'audio/blouse.mp3'
        },
        {
            word: 'dress',
            translation: 'платье',
            image: './src/assets/img/dress.jpg',
            audioSrc: 'audio/dress.mp3'
        },
        {
            word: 'boot',
            translation: 'ботинок',
            image: './src/assets/img/boot.jpg',
            audioSrc: 'audio/boot.mp3'
        },
        {
            word: 'shirt',
            translation: 'рубашка',
            image: './src/assets/img/shirt.jpg',
            audioSrc: 'audio/shirt.mp3'
        },
        {
            word: 'coat',
            translation: 'пальто',
            image: './src/assets/img/coat.jpg',
            audioSrc: 'audio/coat.mp3'
        },
        {
            word: 'shoe',
            translation: 'туфли',
            image: './src/assets/img/shoe.jpg',
            audioSrc: 'audio/shoe.mp3'
        }
    ],
    [{
            word: 'sad',
            translation: 'грустный',
            image: './src/assets/img/sad.jpg',
            audioSrc: 'audio/sad.mp3'
        },
        {
            word: 'angry',
            translation: 'сердитый',
            image: './src/assets/img/angry.jpg',
            audioSrc: 'audio/angry.mp3'
        },
        {
            word: 'happy',
            translation: 'счастливый',
            image: './src/assets/img/happy.jpg',
            audioSrc: 'audio/happy.mp3'
        },
        {
            word: 'tired',
            translation: 'уставший',
            image: './src/assets/img/tired.jpg',
            audioSrc: 'audio/tired.mp3'
        },
        {
            word: 'surprised',
            translation: 'удивлённый',
            image: './src/assets/img/surprised.jpg',
            audioSrc: 'audio/surprised.mp3'
        },
        {
            word: 'scared',
            translation: 'испуганный',
            image: './src/assets/img/scared.jpg',
            audioSrc: 'audio/scared.mp3'
        },
        {
            word: 'smile',
            translation: 'улыбка',
            image: './src/assets/img/smile.jpg',
            audioSrc: 'audio/smile.mp3'
        },
        {
            word: 'laugh',
            translation: 'смех',
            image: './src/assets/img/laugh.jpg',
            audioSrc: 'audio/laugh.mp3'
        }
    ],
    [{
            word: 'apple',
            translation: 'яблоко',
            image: './src/assets/img/apple.jpg',
            audioSrc: 'audio/apple.mp3'
        },
        {
            word: 'avocado',
            translation: 'авокадо',
            image: './src/assets/img/avokado.jpg',
            audioSrc: 'audio/avocado.mp3'
        },
        {
            word: 'kiwi',
            translation: 'киви',
            image: './src/assets/img/kiwi.jpg',
            audioSrc: 'audio/kiwi.mp3'
        },
        {
            word: 'orange',
            translation: 'апельсин',
            image: './src/assets/img/orange.jpg',
            audioSrc: 'audio/orange.mp3'
        },
        {
            word: 'peach',
            translation: 'персик',
            image: './src/assets/img/peach.jpg',
            audioSrc: 'audio/peach.mp3'
        },
        {
            word: 'pear',
            translation: 'груша',
            image: './src/assets/img/pear.jpg',
            audioSrc: 'audio/pear.mp3'
        },
        {
            word: 'strawberry',
            translation: 'клубника',
            image: './src/assets/img/strawberry.jpg',
            audioSrc: 'audio/strawberry.mp3'
        },
        {
            word: 'lime',
            translation: 'лайм',
            image: './src/assets/img/lime.jpg',
            audioSrc: 'audio/lime.mp3'
        }
    ],
    [{
            word: 'balloon',
            translation: 'воздушный шар',
            image: './src/assets/img/balloon.jpg',
            audioSrc: 'audio/balloon.mp3'
        },
        {
            word: 'bicycle',
            translation: 'велосипед',
            image: './src/assets/img/bicycle.jpg',
            audioSrc: 'audio/bicycle.mp3'
        },
        {
            word: 'car',
            translation: 'машина',
            image: './src/assets/img/car.jpg',
            audioSrc: 'audio/car.mp3'
        },
        {
            word: 'motorcycle',
            translation: 'мотоцикл',
            image: './src/assets/img/motorcycle.jpg',
            audioSrc: 'audio/motorcycle.mp3'
        },
        {
            word: 'plane',
            translation: 'самолет',
            image: './src/assets/img/plane.jpg',
            audioSrc: 'audio/plane.mp3'
        },
        {
            word: 'scooter',
            translation: 'самокат',
            image: './src/assets/img/scooter.jpg',
            audioSrc: 'audio/scooter.mp3'
        },
        {
            word: 'ship',
            translation: 'корабль',
            image: './src/assets/img/ship.jpg',
            audioSrc: 'audio/ship.mp3'
        },
        {
            word: 'train',
            translation: 'поезд',
            image: './src/assets/img/train.jpg',
            audioSrc: 'audio/train.mp3'
        }
    ]
];

/***/ }),

/***/ "./src/js/func.js":
/*!************************!*\
  !*** ./src/js/func.js ***!
  \************************/
/*! namespace exports */
/*! export checkCheckbox [provided] [no usage info] [missing usage info prevents renaming] */
/*! export generateAction [provided] [no usage info] [missing usage info prevents renaming] */
/*! export generateMain [provided] [no usage info] [missing usage info prevents renaming] */
/*! export rotateCard [provided] [no usage info] [missing usage info prevents renaming] */
/*! export sayWord [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_require__, __webpack_require__.r, __webpack_exports__, __webpack_require__.d, __webpack_require__.* */
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "checkCheckbox": () => /* binding */ checkCheckbox,
/* harmony export */   "generateMain": () => /* binding */ generateMain,
/* harmony export */   "generateAction": () => /* binding */ generateAction,
/* harmony export */   "rotateCard": () => /* binding */ rotateCard,
/* harmony export */   "sayWord": () => /* binding */ sayWord
/* harmony export */ });
/* harmony import */ var _card__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./card */ "./src/js/card.js");


const cardConteiner = document.querySelectorAll('.card');
const checkbox = document.querySelector("#bopis");
function checkCheckbox() {
    if (checkbox.checked) {
        document.querySelectorAll(".point").forEach(e => e.style.backgroundColor = '#fa7900');
        document.querySelector(".burger__menu").style.backgroundColor = '#fa7900';
    } else {
        document.querySelectorAll(".point").forEach(e => e.style.backgroundColor = '#1132ee');
        document.querySelector(".burger__menu").style.backgroundColor = '#1132ee';
    }
}

function generateMain() {

    for (let i = 0; i < cardConteiner.length; i++) {
        cardConteiner[i].innerHTML = `<img src='${_card__WEBPACK_IMPORTED_MODULE_0__.cards[i+1][0].image}' alt='${_card__WEBPACK_IMPORTED_MODULE_0__.cards[0][i]}' class='card__img'>
             <div class='description'>
                 <div class='description__text'>${_card__WEBPACK_IMPORTED_MODULE_0__.cards[0][i]}</div>
                 <div class='point'></div>
                 
                 `;

    }

};

function generateAction(cardnum) {
    cardConteiner.forEach(e => e.classList.add('cardpage'));
    cardConteiner.forEach(e => e.classList.remove('card'));
    for (let i = 0; i < cardConteiner.length; i++) {
        cardConteiner[i].innerHTML = `<img src='${_card__WEBPACK_IMPORTED_MODULE_0__.cards[cardnum][i].image}' alt='${_card__WEBPACK_IMPORTED_MODULE_0__.cards[cardnum][i].word}' class='card__img2'>
             <div class='description'>
                 <div class='description__text'>${_card__WEBPACK_IMPORTED_MODULE_0__.cards[cardnum][i].word}</div>
                 <div class='description__text_translate' style='display:none;'>${_card__WEBPACK_IMPORTED_MODULE_0__.cards[cardnum][i].translation}</div>
                 <div class='reload'></div>
                 `;
    }

};



generateAction.reload = function(ind) {
    document.querySelectorAll('.cardpage')[ind].style.transform = 'rotateY(180deg)';
    document.querySelectorAll(".description__text")[ind].style.display = 'none';
    document.querySelectorAll(".description__text_translate")[ind].style.display = 'flex';
    document.querySelectorAll('.reload')[ind].style.display = 'none';
}


function rotateCard(ind) {
    document.querySelectorAll('.cardpage')[ind].style.transform = 'rotateY(0deg)';
    document.querySelectorAll(".description__text")[ind].style.display = 'flex';
    document.querySelectorAll(".description__text_translate")[ind].style.display = 'none';
}


const audio = document.querySelector("body > audio");
function sayWord(numAction, ind) {
    audio.src = `./src/assets/${_card__WEBPACK_IMPORTED_MODULE_0__.cards[numAction][ind].audioSrc}`;
    audio.play();
}

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;
//# sourceMappingURL=script.js.map