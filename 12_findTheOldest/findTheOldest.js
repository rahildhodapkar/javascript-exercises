const findTheOldest = function(people) {
    res = people.sort((a, b) => {
        lastYearA = a.yearOfDeath == undefined ? 2024 : a.yearOfDeath;
        lastYearB = b.yearOfDeath == undefined ? 2024 : b.yearOfDeath;

        return (lastYearA - a.yearOfBirth) - (lastYearB - b.yearOfBirth);
    });

    return res[res.length - 1]
};

// Do not edit below this line
module.exports = findTheOldest;
