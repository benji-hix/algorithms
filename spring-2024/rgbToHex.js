//* Create a function that, given three integers representing
//* rbg values, returns  a string of the equivalent hexadecimal value

function rgb(r, g, b) {    
    function rangeCorrect(val) {
        if (val < 0 ) return 0;
        else if (val > 255) return 255;
        else return val;
    }

    const hexadecimal = {
        0: '0', 1:'1', 2:'2', 3:'3', 4:'4',
        5:'5', 6:'6', 7:'7', 8:'8', 9:'9',
        10: 'A', 11: 'B', 12: 'C',
        13: 'D', 14: 'E', 15: 'F', 16: 'G'
    }

    r = rangeCorrect(r);
    g = rangeCorrect(g);
    b = rangeCorrect(b)
    let rDigit = hexadecimal[parseInt(r / 16)] + hexadecimal[r % 16]
    let gDigit = hexadecimal[parseInt(g / 16)] + hexadecimal[g % 16]
    let bDigit = hexadecimal[parseInt(b / 16)] + hexadecimal[b % 16]

    return rDigit + gDigit + bDigit
}
 
console.log(rgb(100, 265, 81));