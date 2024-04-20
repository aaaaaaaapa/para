export const fisherYatesShuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr;
}

export const createCardArr = (arr, num) => {

    const randomNum = Math.round(Math.random() * Math.sqrt(num));

    const halfArr = arr.slice(randomNum, Math.round(num / 2 + randomNum));
    const sortedArr = fisherYatesShuffle([...halfArr, ...halfArr]);
    let newArr = [];

    for (let i = 0; i < sortedArr.length; i += Math.sqrt(num)) {
        newArr.push(sortedArr.slice(i, i + Math.sqrt(num)));
    }
    return newArr;
}