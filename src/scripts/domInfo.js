const allParks = {
    parkBreakDown: (parkArray) => {
        let htmlString = "";
        console.log("testdata", parkArray);
        parkArray.forEach(entry => {
            console.log("test test");
            htmlString += parkToDom.parkDataComponent(entry);
        })
        console.log("test 2");
        const parkDom = document.querySelector(".container");
        console.log("testdata2", parkDom);
        parkDom.innerHTML = htmlString;
    }
}