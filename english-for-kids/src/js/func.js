import { cards } from './card';

const cardConteiner = document.querySelectorAll('.card');
const checkbox = document.querySelector("#bopis");
export function checkCheckbox() {
    if (checkbox.checked) {
        document.querySelectorAll(".point").forEach(e => e.style.backgroundColor = '#fa7900');
        document.querySelector(".burger__menu").style.backgroundColor = '#fa7900';
    } else {
        document.querySelectorAll(".point").forEach(e => e.style.backgroundColor = '#1132ee');
        document.querySelector(".burger__menu").style.backgroundColor = '#1132ee';
    }
}

export function generateMain() {

    cardConteiner.forEach((e, i) => {
        e.innerHTML = `<img src='${cards[i+1][0].image}' alt='${cards[0][i]}' class='card__img'>
        <div class='description'>
            <div class='description__text'>${cards[0][i]}</div>
            <div class='point'></div>
            </div>
            `;
    });

};

export function generateAction(cardnum) {
    cardConteiner.forEach(e => e.classList.add('cardpage'));
    cardConteiner.forEach(e => e.classList.remove('card'));
    cardConteiner.forEach((e, i) => {
        e.innerHTML = `<img src='${cards[cardnum][i].image}' alt='${cards[cardnum][i].word}' class='card__img2'>
        <div class='description'>
            <div class='description__text'>${cards[cardnum][i].word}</div>
            <div class='description__text_translate' style='display:none;'>${cards[cardnum][i].translation}</div>
            <div class='reload'></div>
            </div>
            `;
    });

};



generateAction.reload = function(ind) {
    document.querySelectorAll('.cardpage')[ind].style.transform = 'rotateY(180deg)';
    document.querySelectorAll(".description__text")[ind].style.display = 'none';
    document.querySelectorAll(".description__text_translate")[ind].style.display = 'flex';
    document.querySelectorAll('.reload')[ind].style.display = 'none';
}


export function rotateCard(ind) {
    document.querySelectorAll('.cardpage')[ind].style.transform = 'rotateY(0deg)';
    document.querySelectorAll(".description__text")[ind].style.display = 'flex';
    document.querySelectorAll(".description__text_translate")[ind].style.display = 'none';
}


const audio = document.querySelector("body > audio");
export function sayWord(numAction, ind) {
    audio.src = `./src/assets/${cards[numAction][ind].audioSrc}`;
    audio.play();
}