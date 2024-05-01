import { createCardArr } from "./arrayConv.js";
import { createField, createTimerAndCounter, createTitle, createBtn } from "./createElements.js";
import { handleCardClick } from './handleCardClick.js';
import { timeGenerator, cleanTimer } from "./timer.js";

const main = document.querySelector('.main');
const container = document.querySelector('.container');

const cardNum = 16;

const cardsArr = [
    'bee', 'crocodile', 'macaw', 'gorilla', 
    'tiger', 'monkey', 'chameleon', 'piranha',
    'anaconda', 'cockatoo', 'sloth', 'toucan'
];

let cardFieldArr = createCardArr(cardsArr, cardNum);


const renderField = () => {

    const { divTitle } = createTitle();
    const { divTC } = createTimerAndCounter();
    const divField = createField(cardFieldArr);
   
    divField.addEventListener('click', handleCardClick);
    container.append(divTitle, divTC, divField);

}

const createAgainBtn = () => {

    const againBtn = createBtn('Начать заново');
    againBtn.addEventListener('click', startGame);
    againBtn.classList.add('again');

    container.append(againBtn);

}

const createStartBtn = () => {

    const startBtn = createBtn('Начать игру');
    startBtn.classList.add('start-btn');

    startBtn.addEventListener('click', startGame);
    main.append(startBtn);

}

const setGameInterval = () => {

    cleanTimer();
    let interval = setInterval(() => {
        timeGenerator(document.querySelector('.timer'));
        if (document.querySelectorAll('.matched').length === cardNum) {
            clearInterval(interval);
            createAgainBtn();
        }
    }, 1000);

}

const startGame = (event) => {

    container.innerHTML = '';
    event.target.style.display = 'none';
    container.style.display = 'block';
    renderField();
    setGameInterval();

}

document.addEventListener('DOMContentLoaded', createStartBtn);
