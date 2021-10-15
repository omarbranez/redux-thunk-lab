// step 2: add the catsReducer
const catsReducer = (state = {
    cats: [],
    loading: false // initially not loading data
}, action) => {
    switch(action.type) {
        case "LOADING_CATS":
            return { //returning an object
                ...state,
                cats: [...state.cats], // expecting a payload with cats key
                loading: true // now we are loading something
            }
        case "ADD_CATS":
            return {
                ...state,
                cats: action.cats,
                loading: false // adding a new cat is not loading!
            }
        default:
            return state
    }
}

export default catsReducer