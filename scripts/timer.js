export const timeGenerator = (text) => {
    
    let seconds = 0, minutes = 0;
    seconds += 1;

    if (seconds >= 60) {
        minutes += 1;
        seconds = 0;
    }

    let secondsValue = seconds < 10 ? `0${seconds}` : seconds;
    let minutesValue = minutes < 10 ? `0${minutes}` : minutes;
    text.textContent = `Время: ${minutesValue}:${secondsValue}`;

};

