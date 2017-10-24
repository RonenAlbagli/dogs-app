import { combineReducers } from 'redux';
import { GET_DOG,SELECT_DOG, GET_IMG } from '../actions'

function dogs( state =[], action) {
    switch(action.type){
        case GET_DOG:
            return action.items;
        default:
            return state;
    }
}
function selectDog ( state=[] , action) {
    switch (action.type) {
        case SELECT_DOG:
            state= [state, action.dogs]
            return state;
        default:
            return state;
    }
}

function getIMG (state=[], action){
    switch(action.type) {
        case GET_IMG:
            return action.items;
        default:
            return state;
    }
}

const rootReducer = combineReducers({dogs, selectDog, getIMG});

export default rootReducer;