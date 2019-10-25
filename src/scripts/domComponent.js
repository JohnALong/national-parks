const parkToDom = {
    parkDataComponent: (parkInfo) => {
        console.log("domTest", parkInfo.name);
        return `
        <article>
            <h3 class="parkName">${parkInfo.name}</h3>
            <div class="parkState">${parkInfo.state}</div>
        </article>    
        `
    }
}   