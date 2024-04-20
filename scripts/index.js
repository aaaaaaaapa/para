import { createCardArr } from "./arrayConv.js";
import { createField, createTimerAndCounter, createTitle, createBtn } from "./createElements.js";
import { handleCardClick } from './handleCardClick.js';
import { timeGenerator } from "./timer.js";

const main = document.querySelector('.main');
const container = document.querySelector('.container');
const cardNum = 16;

const cardsArr = [
    'bee', 'crocodile', 'macaw', 'gorilla', 
    'tiger', 'monkey', 'chameleon', 'piranha',
    'anaconda', 'cockatoo', 'sloth', 'toucan'
];
let cardFieldArr = createCardArr(cardsArr, cardNum);
let interval;

const startGame = () => {

    container.innerHTML = '';
    container.style.display = 'block';

    const { divTitle } = createTitle();
    const { divTC, timerText } = createTimerAndCounter();
    const divField = createField(cardFieldArr);
    const againBtn = createBtn('Начать заново');

    divField.addEventListener('click', handleCardClick);
    againBtn.addEventListener('click', startGame);
    againBtn.classList.add('again');

    container.append(divTitle, divTC, divField);

    interval = setInterval(() => {
        timeGenerator(timerText);
        if (document.querySelectorAll('.matched').length === cardNum) {
            clearInterval(interval);
            container.append(againBtn);
        }
    }, 1000);

}

document.addEventListener('DOMContentLoaded', () => {

    const startBtn = createBtn('Начать игру');

    startBtn.addEventListener('click', () => {
        startBtn.style.display = 'none';
        startGame();
    });

    main.append(startBtn);

});
