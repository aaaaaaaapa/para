import { createCardArr } from "./arrayConv.js";
import { createField, createTitle } from "./createElements.js";
const container = document.querySelector('.container');

const cardNum = 16;
let firstCard, secondCard;

let cardsArr = [
    'bee', 'crocodile', 'macaw', 'gorilla', 
    'tiger', 'monkey', 'chameleon', 'piranha',
    'anaconda', 'cockatoo', 'sloth', 'toucan'
];

let cardFieldArr = createCardArr(cardsArr, cardNum);


const handleCardClick = (event) => {
    const tg = event.target;
    if (tg.closest('div').classList.contains('square') && tg.getAttribute('state') !== 'open') {
        tg.querySelector('.img').classList.remove('dis');
        tg.setAttribute('state', 'open');
        if (!firstCard) {
            firstCard = tg;
        }
        else {
            secondCard = tg;
            if (firstCard.classList !== secondCard.classList) {
                setTimeout(() => {
                    firstCard.querySelector('.img').classList.add('dis');
                    firstCard.setAttribute('state', 'closed');
                    secondCard.querySelector('.img').classList.add('dis');
                    secondCard.setAttribute('state', 'closed');
                }, 500)
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', () => {

    const { divTitle } = createTitle();
    const divField = createField(cardFieldArr);

    divField.addEventListener('click', handleCardClick);

    container.append(divTitle, divField);


});