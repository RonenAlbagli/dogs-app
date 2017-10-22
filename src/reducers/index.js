import { combineReducers } from 'redux';
import { GET_DOG } from '../actions'

function dogs( state =[], action) {
    switch(action.type){
        case GET_DOG:
            return action.items;
        default:
            return state;
    }
}

const rootReducer = combineReducers({dogs});

export default rootReducer;