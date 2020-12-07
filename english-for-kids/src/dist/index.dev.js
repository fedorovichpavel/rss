"use strict";

require("./style.css");

var _func = require("./js/func");

//import './js/card';
//Main page generate cards
var card = document.querySelectorAll(".hero__wrapper > div"),
    checkbox = document.querySelector("#bopis"),
    burger = document.querySelector('.burger');
var cardPageGenerated = false;
var numAction = 0;

window.onload = function () {
  (0, _func.generateMain)();
  (0, _func.checkCheckbox)();

  checkbox.onclick = function () {
    (0, _func.checkCheckbox)();
  };

  document.querySelector("body > header > div > div.burger__menu").style.left = '-100%';
  document.querySelector(".mask").style.position = 'relative';
  document.querySelector(".burger").style.transform = 'rotate()';

  burger.onclick = function () {
    if (document.querySelector("body > header > div > div.burger__menu").style.left == '-100%') {
      document.querySelector("body > header > div > div.burger__menu").style.left = '0';
      document.querySelector(".burger").style.transform = 'rotate(90deg)';

      window.onscroll = function () {
        window.scrollTo(0, 0);
      };

      document.querySelector(".mask").style.position = 'absolute';
    } else {
      document.querySelector(".burger").style.transform = 'rotate(180deg)';
      document.querySelector(".mask").style.position = 'relative';
      document.querySelector("body > header > div > div.burger__menu").style.left = '-100%';

      window.onscroll = function () {
        window.scrollTo();
      };
    }
  };

  document.querySelector(".mask").onclick = function () {
    if (document.querySelector(".mask").style.position == 'absolute') {
      document.querySelector(".burger").style.transform = 'rotate(180deg)';
      document.querySelector(".mask").style.position = 'relative';
      document.querySelector("body > header > div > div.burger__menu").style.left = '-100%';

      window.onscroll = function () {
        window.scrollTo();
      };
    }
  };

  card.forEach(function (e, i) {
    e.onclick = function () {
      if (cardPageGenerated) {
        (0, _func.sayWord)(numAction, i);

        _func.generateAction.reload(i);
      } else {
        (0, _func.generateAction)(i + 1);
        cardPageGenerated = true;
        numAction = i + 1;
        document.querySelectorAll('.reload').forEach(function (el, ind) {
          return el.onclick = function () {
            document.querySelectorAll('.cardpage')[ind].style.transform = 'rotateY(180deg)';
          };
        });
      }

      (0, _func.checkCheckbox)();
    };
  });
};

var burgerUrl = document.querySelectorAll('.burger__url');
burgerUrl.forEach(function (e, i) {
  e.onclick = function () {
    if (i == 0) {
      (0, _func.generateMain)();
      document.querySelector(".burger").style.transform = 'rotate(180deg)';
      document.querySelector(".mask").style.position = 'relative';
      document.querySelector("body > header > div > div.burger__menu").style.left = '-100%';
      cardPageGenerated = false;

      window.onscroll = function () {
        window.scrollTo();
      };

      (0, _func.checkCheckbox)();
    } else {
      (0, _func.generateAction)(i);
      cardPageGenerated = true;
      numAction = i;
      document.querySelector(".burger").style.transform = 'rotate(180deg)';
      document.querySelector(".mask").style.position = 'relative';
      document.querySelector("body > header > div > div.burger__menu").style.left = '-100%';

      window.onscroll = function () {
        window.scrollTo();
      };

      (0, _func.checkCheckbox)();
    }
  };
}); //event delegation  для обработки событий кликов в игре
// createElement  append removeChild innerHtml