export const fisherYatesShuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr;
}

export const createCardArr = (arr, num) => {
    
    arr = fisherYatesShuffle([...arr.slice(0, num / 2), ...arr.slice(0, num / 2)]);
    let newArr = [];

    for (let i = 0; i < arr.length; i += Math.sqrt(num)) {
        newArr.push(arr.slice(i, i + Math.sqrt(num)));
    }
    return newArr;
}