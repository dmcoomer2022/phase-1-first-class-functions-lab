// Code your solution in this file!
//function returnFirstTwoDrivers() {
    //const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
    //return ['Antonia', 'Nuru']

//}


const returnFirstTwoDrivers =  
  function(drivers) {
    console.log(drivers)
    return drivers.slice(0,2)
  } 

const returnLastTwoDrivers =
function(lastDrivers) {
    console.log(lastDrivers)
    return lastDrivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(int) {
    return function(fare) {
        return fare * int;
    }
}

const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
}

const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
}

function selectDifferentDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers);
}




