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
            <div class="parkState">${parkInfo.state}</div>
        </article>    
        `
    }
}   