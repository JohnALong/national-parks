API.parksData().then(parsedParks => {
    allParks.parkBreakDown(parsedParks);
})