let firstCard, secondCard;
let counter = 0;

const openCard = (card) => {
    card.classList.remove('closed');
    card.querySelector('.img').classList.remove('dis');
}

const closeCard = (card) => {
    card.classList.add('closed');
    card.querySelector('.img').classList.add('dis');
}

const checkIsMatched = (card1, card2) => {

    if (card1.getAttribute('img') !== card2.getAttribute('img')) {
        setTimeout(() => {
            closeCard(card1);
            closeCard(card2);
        }, 600)
    }
    else {
        card1.classList.add('matched');
        card2.classList.add('matched');
        counter++;
        document.querySelector('.counter').textContent = `Кол-во очков: ${counter}`;
    }
}

export const handleCardClick = (event) => {
    const card = event.target.closest('div');
    if (card.classList.contains('square') && !card.classList.contains('matched')) {
        openCard(card);
        if (!firstCard) {
            firstCard = card;
        }
        else {
            secondCard = card;
            checkIsMatched(firstCard, secondCard);
            [firstCard, secondCard] = ['', ''];
        }
    }
    return counter;
}