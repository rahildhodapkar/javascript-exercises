const fibonacci = function(idx) {
    idx = Number(idx);

    if (idx < 0) {
        return "OOPS";
    } else if (idx == 0) {
        return 0;
    }


    let x = 1;
    let y = 1;

    for (let i = 2; i < idx; i++) {
        temp = x + y;
        x = y;
        y = temp;
    }

    return y;
};

// Do not edit below this line
module.exports = fibonacci;
