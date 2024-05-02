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

export const createBtn = (text, className) => {

    const btn = createElement('button', 'btn', className);
    btn.textContent = text;
    return btn;

}

export const createStartBtn = () => {

    const {h1} = createTitle('Выберите размер поля');
    const startBtn8 = createBtn('4x2', 'start-btn');
    const startBtn12 = createBtn('4x3', 'start-btn');
    const startBtn16 = createBtn('4x4', 'start-btn');
    const startBtn20 = createBtn('4x5', 'start-btn')

    startBtn8.num = 8;
    startBtn12.num = 12;
    startBtn16.num = 16;
    startBtn20.num = 20;

    h1.classList.add('field-title');

    return {
        h1,
        startBtn8,
        startBtn12,
        startBtn16,
        startBtn20
    }

}