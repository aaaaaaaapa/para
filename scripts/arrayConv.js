export const fisherYatesShuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr;
}

export const createCardArr = (arr, num) => {

    const randomNum = Math.round(Math.random() * 2);
    
    const halfArr = arr.slice(randomNum, Math.round(num / 2 + randomNum));
    const sortedArr = fisherYatesShuffle([...halfArr, ...halfArr]);
    let newArr = [];

    for (let i = 0; i < sortedArr.length; i += 4) {
        newArr.push(sortedArr.slice(i, i + 4));
    }
    return newArr;
}