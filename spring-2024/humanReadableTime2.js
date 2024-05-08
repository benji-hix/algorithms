//* write a function which formats a duration, given as a number of seconds, 
//* in a human-friendly way.The function must accept a non-negative integer. 
//* If it is zero, it just returns "now". Otherwise, the duration is expressed 
//* as a combination of years, days, hours, minutes and seconds.

function formatDuration(seconds) {
    function formatEnglish(arr) {
        const int = arr[0];
        const unit = arr[1];
        return (int > 1) ? `${int} ${unit}s` : `${int} ${unit}`;
    }

    if (seconds <= 0) return 'now';

    let timeArr = []
    let timeStr = ``
    let year = Math.floor(seconds / 31536000);
    let day = Math.floor(seconds / 86400 % 365);
    let hour = Math.floor(seconds / 3600 % 24 );
    let minute = Math.floor(seconds / 60 % 60);
    let second = (seconds % 60);


    if (year >= 1) {
        timeArr.push([year, 'year'])
    }
    if (day >= 1) {
        timeArr.push([day, 'day'])
    }
    if (hour >= 1) {
        timeArr.push([hour, 'hour'])
    }
    if (minute >= 1) {
        timeArr.push([minute, 'minute'])
    }
    if (second >= 1) {
        timeArr.push([second, 'second'])
    }
    
    if (timeArr.length) {
        timeArr = timeArr.map( x => formatEnglish(x))
    }

    if (timeArr.length > 1) {
        timeStr += timeArr.slice(0, -1).join(', ')
        timeStr += ` and ${timeArr.pop()}`
        return timeStr;
    }
    
    else return timeArr[0];
}

console.log(formatDuration(60000001));