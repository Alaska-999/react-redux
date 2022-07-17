export const ADD_CASH = 'ADD_CASH'
export const ASYNC_ADD_CASH = 'ASYNC_ADD_CASH'
export const GET_CASH = 'GET_CASH'
export const ASYNC_GET_CASH = 'ASYNC_GET_CASH'

const defaultState = {
    cash: 5,
}

export const cashReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_CASH:
            return {...state, cash: state.cash + action.payload}

        case GET_CASH:
            return {...state, cash: state.cash - action.payload}

        default: return state
    }
}

export const cashAddCreator = (payload) => ({type: ADD_CASH, payload})
export const asyncCashAddCreator = (payload) => ({type: ASYNC_ADD_CASH, payload})
export const cashGetCreator = (payload) => ({type: ADD_CASH, payload})
export const asyncCashGetCreator = (payload) => ({type: ASYNC_GET_CASH, payload})
