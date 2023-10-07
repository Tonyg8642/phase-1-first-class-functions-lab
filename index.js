const returnFirstTwoDrivers = (ScubersDrivers) => {
    return[ScubersDrivers[0], ScubersDrivers[1]]
}

const returnLastTwoDrivers = (ScubersDrivers) => {
    return[ScubersDrivers[2], ScubersDrivers[3]]
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (Number) => {
    return function(fare) {
        return fare * Number
    }
}

const fareDoubler = (fare) => {
    return fare * 2
}

const fareTripler = (fare) => {
    return fare * 3
}

const selectDifferentDrivers = (drivers, callback) => {
    return callback (drivers)

}