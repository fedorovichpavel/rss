"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkCheckbox = checkCheckbox;
exports.generateMain = generateMain;
exports.generateAction = generateAction;
exports.sayWord = sayWord;

var _card = require("./card");

var cardConteiner = document.querySelectorAll('.card');
var checkbox = document.querySelector("#bopis");

function checkCheckbox() {
  if (checkbox.checked) {
    document.querySelectorAll(".point").forEach(function (e) {
      return e.style.backgroundColor = '#fa7900';
    });
    document.querySelector(".burger__menu").style.backgroundColor = '#fa7900';
  } else {
    document.querySelectorAll(".point").forEach(function (e) {
      return e.style.backgroundColor = '#1132ee';
    });
    document.querySelector(".burger__menu").style.backgroundColor = '#1132ee';
  }
}

function generateMain(imgStyle) {
  for (var i = 0; i < cardConteiner.length; i++) {
    cardConteiner[i].innerHTML = "<img src='".concat(_card.cards[i + 1][0].image, "' alt='").concat(_card.cards[0][i], "' class='card__img'>\n             <div class='description'>\n                 <div class='description__text'>").concat(_card.cards[0][i], "</div>\n                 <div class='point'></div>\n                 ");
  }
}

;

function generateAction(cardnum) {
  cardConteiner.forEach(function (e) {
    return e.classList.add('cardpage');
  });
  cardConteiner.forEach(function (e) {
    return e.classList.remove('card');
  });

  for (var i = 0; i < cardConteiner.length; i++) {
    cardConteiner[i].innerHTML = "<img src='".concat(_card.cards[cardnum][i].image, "' alt='").concat(_card.cards[cardnum][i].word, "' class='card__img2'>\n             <div class='description'>\n                 <div class='description__text'>").concat(_card.cards[cardnum][i].word, "</div>\n                 <div class='reload'></div>\n                 ");
  }
}

;

generateAction.reload = function (ind) {
  document.querySelectorAll('.reload')[ind].onclick = function () {
    cardConteiner[ind].style.transform = 'rotateY(180deg)';
  };
};

var audio = document.querySelector("body > audio");

function sayWord(numAction, ind) {
  audio.src = "./src/assets/".concat(_card.cards[numAction][ind].audioSrc);
  audio.play();
}