let seconds = 0, minutes = 0;

export const timeGenerator = (text) => {
    
    seconds += 1;

    if (seconds >= 60) {
        minutes += 1;
        seconds = 0;
    }

    let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
    let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
    text.textContent = `Время: ${minutesValue}:${secondsValue}`;

};

export const cleanTimer = () => {
    seconds = 0, minutes = 0;
}

