import * as actionTypes from '../actions/actionsTypes';

const initialState = {
    results: []
}

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter((ele) => ele.id !== action.value)
    return {...state, updatedArray}
}
const reducer = (state = initialState, action) => {
    switch (action.type) { 
        case actionTypes.STORE_RESULT: 
            return {
                ...state,
                results: [...state.results, {id: new Date(), value: action.result}]
            } 
            // filter return a new array, and here it did not touch array element (object) itself
        case actionTypes.DELETE_RESULT: {
            return deleteResult(state, action)
        }       
        default: return state    
    }
};

export default reducer;