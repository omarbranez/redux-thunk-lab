// step 3: write and export your action creator function here
export const fetchCats = () => {
    return (dispatch) => {
        dispatch({ type: "LOADING_CATS"}) // let store know that we are loading cats
        fetch("https://learn-co-curriculum.github.io/cat-api/cats.json")
        .then( (response) => {
            return response.json()
        })
        .then( (responseJSON) => {
            dispatch({ type: "ADD_CATS", cats: responseJSON.images}) //we only need images, so we can pass them directly
        })

    }
}