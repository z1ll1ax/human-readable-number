module.exports = function toReadable (number) {
    if (number === 0) return 'zero';
    return toNumber(number);
}
function toNumber(number){
    switch(true){
        case (number === 0): return '';
        case (number === 1): return 'one';
        case (number === 2): return 'two';
        case (number === 3): return 'three';
        case (number === 4): return 'four';
        case (number === 5): return 'five';
        case (number === 6): return 'six';
        case (number === 7): return 'seven';
        case (number === 8): return 'eight';
        case (number === 9): return 'nine';
        case (number === 10): return 'ten';
        case (number === 11): return 'eleven';
        case (number === 12): return 'twelve';
        case (number === 13): return 'thirteen';
        case (number === 14): return 'fourteen';
        case (number === 15): return 'fifteen';
        case (number === 16): return 'sixteen';
        case (number === 17): return 'seventeen';
        case (number === 18): return 'eighteen';
        case (number === 19): return 'nineteen';
        case (number === 20): return 'twenty';
        case (number > 20 && number < 30): return ('twenty '+ toNumber(number - 20)).trim();
        case (number >= 30 && number < 40): return ('thirty '+ toNumber(number - 30)).trim();
        case (number >= 40 && number < 50): return ('forty '+ toNumber(number - 40)).trim();
        case (number >= 50 && number < 60): return ('fifty '+ toNumber(number - 50)).trim();
        case (number >= 60 && number < 70): return ('sixty '+ toNumber(number - 60)).trim();
        case (number >= 70 && number < 80): return ('seventy '+ toNumber(number - 70)).trim();
        case (number >= 80 && number < 90): return ('eighty '+ toNumber(number - 80)).trim();
        case (number >= 90 && number < 100): return ('ninety '+ toNumber(number - 90)).trim();       
        default: return (toNumber(Math.floor(number/100)) + ' hundred '+ toNumber(number % 100)).trim();  
      }
}