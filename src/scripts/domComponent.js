const parkToDom = {
    parkDataComponent: (parkInfo) => {
        console.log("domTest", parkInfo.name);
        let parkVisited = ""
        if (parkInfo.visited === true) {
            parkVisited = "visited";
        } else {
            parkVisited = "notVisited"
        }
        return `
        <article class="${parkVisited}">
            <h3 class="parkName">${parkInfo.name}</h3>
            <p class="parkState">${parkInfo.state}</p>
        </article>    
        `
    }
}   