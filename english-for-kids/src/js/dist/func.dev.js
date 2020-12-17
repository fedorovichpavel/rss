"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkCheckbox = checkCheckbox;
exports.generateMain = generateMain;
exports.generateAction = generateAction;
exports.rotateCard = rotateCard;
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

function generateMain() {
  cardConteiner.forEach(function (e, i) {
    e.innerHTML = "<img src='".concat(_card.cards[i + 1][0].image, "' alt='").concat(_card.cards[0][i], "' class='card__img'>\n        <div class='description'>\n            <div class='description__text'>").concat(_card.cards[0][i], "</div>\n            <div class='point'></div>\n            </div>\n            ");
  });
}

;

function generateAction(cardnum) {
  cardConteiner.forEach(function (e) {
    return e.classList.add('cardpage');
  });
  cardConteiner.forEach(function (e) {
    return e.classList.remove('card');
  });
  cardConteiner.forEach(function (e, i) {
    e.innerHTML = "<img src='".concat(_card.cards[cardnum][i].image, "' alt='").concat(_card.cards[cardnum][i].word, "' class='card__img2'>\n        <div class='description'>\n            <div class='description__text'>").concat(_card.cards[cardnum][i].word, "</div>\n            <div class='description__text_translate' style='display:none;'>").concat(_card.cards[cardnum][i].translation, "</div>\n            <div class='reload'></div>\n            </div>\n            ");
  });
}

;

generateAction.reload = function (ind) {
  document.querySelectorAll('.cardpage')[ind].style.transform = 'rotateY(180deg)';
  document.querySelectorAll(".description__text")[ind].style.display = 'none';
  document.querySelectorAll(".description__text_translate")[ind].style.display = 'flex';
  document.querySelectorAll('.reload')[ind].style.display = 'none';
};

function rotateCard(ind) {
  document.querySelectorAll('.cardpage')[ind].style.transform = 'rotateY(0deg)';
  document.querySelectorAll(".description__text")[ind].style.display = 'flex';
  document.querySelectorAll(".description__text_translate")[ind].style.display = 'none';
}

var audio = document.querySelector("body > audio");

function sayWord(numAction, ind) {
  audio.src = "./src/assets/".concat(_card.cards[numAction][ind].audioSrc);
  audio.play();
}