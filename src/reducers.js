import { combineReducers } from 'redux'
import {ADD_TODO, MY_PENTA, QUAN} from './actions';

const initiSate = {
    longHai: 22,
    cogai: false
};

function todos(state = initiSate, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                longHai: action.text
            };
        case MY_PENTA:
            return  {
                ...state,
                longHai: action.text
            };
        case QUAN:
            return  {
                ...state,
                cogai: !state.cogai
            }
        default:
            return state
    }
}

const todoApp = combineReducers({
    todos
});

export default todoApp