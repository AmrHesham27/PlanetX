function fetchAllGames(setParentState) {
    fetch("https://planetxegy.herokuapp.com/games/all", {
    method: "GET",
    headers: {
        "Content-type": "application/json; charset=UTF-8"
    }})
    .then(async function(response) {
        const res = await response.json()
        if (res.status === true) {
            setParentState(res.data)
        }
    })       
    .catch(err => {
        console.log(err)
    })
}

export default fetchAllGames
