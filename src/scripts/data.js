const API = {
    parksData: (searchParks) => {
        return fetch("http://localhost:8088/parks")
        .then(parks => parks.json())
    }
}