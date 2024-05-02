import { createCardArr } from "./arrayConv.js";
import { createField, createTimerAndCounter, createTitle, createBtn, createStartBtn } from "./createElements.js";
import { handleCardClick } from './handleCardClick.js';
import { timeGenerator, cleanTimer } from "./timer.js";

const main = document.querySelector('.main');
const container = document.querySelector('.container');
const startCont = document.querySelector('.start');

let cardNum, cardFieldArr;

const cardsArr = [
    'bee', 'crocodile', 'macaw', 'gorilla', 
    'tiger', 'monkey', 'chameleon', 'piranha',
    'anaconda', 'cockatoo', 'sloth', 'toucan'
];


const renderField = () => {

    container.innerHTML = '';
    cardFieldArr = createCardArr(cardsArr, cardNum);

    const { divTitle } = createTitle();
    const { divTC } = createTimerAndCounter();
    const divField = createField(cardFieldArr);
   
    divField.addEventListener('click', handleCardClick);
    container.append(divTitle, divTC, divField);

}


const createAgainBtn = () => {

    const againBtn = createBtn('Начать заново');
    againBtn.addEventListener('click', () => {
        againBtn.remove();
        startCont.style.display = 'flex';
        container.style.display = 'none';
    });
    againBtn.classList.add('again');

    main.append(againBtn);

}

const setGameInterval = () => {

    cleanTimer();
    let interval = setInterval(() => {
        if (document.querySelectorAll('.matched').length === cardNum) {
            clearInterval(interval);
            createAgainBtn();
        }
        else {
            timeGenerator(document.querySelector('.timer'));
        }
    }, 1000);

}

const startGame = (btn) => {

    cardNum = btn.num;

    startCont.style.display = 'none';
    container.style.display = 'block';
    renderField();
    setGameInterval();

}


const renderStartBtn = () => {

    const { h1, startBtn8, startBtn12, startBtn16, startBtn20 } = createStartBtn()

    startCont.addEventListener('click', (event) => {
        if (event.target.closest('button')) {
            startGame(event.target);
        }
    });

    startCont.append(h1, startBtn8, startBtn12, startBtn16, startBtn20);

}

document.addEventListener('DOMContentLoaded', renderStartBtn);
