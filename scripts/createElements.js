const createElement = (elem, ...className) => {
    
    const element = document.createElement(elem);
    element.classList.add(...className);

    return element;
}

export const createTitle = (text='Найди пару') => {

    const divTitle = createElement('div', 'title');
    const h1 = createElement('h1', 'title-text');
    h1.textContent = text;
    divTitle.append(h1);

    return {
        divTitle,
        h1
    };

}

export const createTimerAndCounter = () => {

    const divTC = createElement('div', 'timer-counter');
    const timerText = createElement('p', 'timer');
    const counterText = createElement('p', 'counter');

    timerText.textContent = 'Время: 00:00';
    counterText.textContent = 'Кол-во очков: 0';

    divTC.append(timerText, counterText);

    return {
        divTC,
        timerText,
        counterText
    };
}

const createRow = (arr) => {

    const divRow = createElement('div', 'row');
    for (const elem of arr) {

        const square = createElement('div', 'square', 'closed');
        square.setAttribute('img', elem);
        const img = createElement('img', 'img', 'dis');
        img.src = `./images/${elem}.png`;

        square.append(img);
        divRow.append(square);
    }

    return divRow;
}

export const createField = (arr) => {

    const divField = createElement('div', 'field');

    for (let i = 0; i < arr.length; i++) {
        const divRow = createRow(arr[i]);
        divField.append(divRow);
    }
    return divField;
}

export const createBtn = (text) => {

    const btn = createElement('button', 'btn');
    btn.textContent = text;
    return btn;

}