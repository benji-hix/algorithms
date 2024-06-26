//* Write a function, which takes a non-negative integer (seconds) as 
//* input and returns the time in a human-readable format (HH:MM:SS)

//~ version before learning parseInt()
function humanReadable(seconds) {
    if (seconds > 359999) return 'error';

    let hours
    let minutes

    if (seconds >= 3600) {
        hours = Math.floor(seconds/3600);
        if (hours < 10) {
            hours = '0' + hours;
        }
        seconds = seconds % 3600;
    }
    else hours = '00'
    if (seconds >= 60 ) {
        minutes = Math.floor(seconds/60);
        if (minutes < 10) {
            minutes = '0' + minutes;
        }
        seconds = seconds % 60;
    }
    else minutes = '00'
    if (seconds < 10) {
        seconds = '0' + seconds;
    }
    return (`${hours}:${minutes}:${seconds}`)
}

console.log(humanReadable(3600));

//~ version utilizing parseInt() learning
function humanReadableRefactored(seconds) {
    //| helper function for abstraction
    function pad (int) {
        return (int < 10) ? '0' + int : int;
    }

    const hours = parseInt(seconds/3600);
    const minutes = parseInt(seconds / 60 % 60);
    seconds = parseInt(seconds % 60);

    return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`
}

console.log(humanReadableRefactored(60));