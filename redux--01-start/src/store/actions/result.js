import {STORE_RESULT, DELETE_RESULT} from './actionsTypes'
const storeR = (result) => {
    return {
        type: STORE_RESULT,
        result: result
    }
}

export const storeResult = (result) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            // const oldCounter = getState().ctr.counter
            // console.log(oldCounter)
            dispatch(storeR(result))
        }, 5000)
    }
}

export const deleteResult = (deleteId) => {
    return {
        type: DELETE_RESULT,
        value: deleteId
    }
}