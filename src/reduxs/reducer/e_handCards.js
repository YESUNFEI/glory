import {
    // ADD_E_HANDCARDS,
    // DELETE_E_HANDCARDS,
    // UPDATE_E_HANDCARDS,
    // QUERY_E_HANDCARDS
} from 'reduxs/constant'

const initState = {
    cards: [1,2,3]
}



export default function E_HandCards(state = initState, action){
    switch(action.type){
        default:
            return state
    }
}



