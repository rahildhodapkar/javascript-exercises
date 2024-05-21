const palindromes = function (str) {
    str = str.toUpperCase();

    str = str.replace(/[^a-zA-Z]+/g, '');

    let L = 0;
    let R = str.length - 1;

    while (L < R) {
        if (str[L] !== str[R]) {
            return false;
        } 

        L++;
        R--;
    }

    return true;
};

// Do not edit below this line
module.exports = palindromes;
