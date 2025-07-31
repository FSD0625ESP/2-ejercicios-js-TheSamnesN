const findTheOldest = function(people) {

    const getAge = (person) => {
    const death = person.yearOfDeath || new Date(). getFullYear()
    return death - person.yearOfBirth
    };

     return people.reduce((oldestSoFar, currentPerson) => {
        return getAge (currentPerson) > getAge (oldestSoFar) ? currentPerson : oldestSoFar;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
