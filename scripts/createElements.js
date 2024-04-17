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

const createRow = (arr) => {

    const divRow = createElement('div', 'row');
    for (const elem of arr) {

        const square = createElement('div', 'square', elem);
        const img = createElement('img', 'img', 'dis');
        img.src = `./images/${elem}.png`;
        square.setAttribute('state', 'closed');

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