const removeFromArray = function(arr, ...args) {
    for (const item of args) {
        arr = arr.filter(function(value) {
            return value !== item;
        });
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
