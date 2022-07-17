//будут асинхронные экшены для работы по счетчиками
import {put, takeEvery} from 'redux-saga/effects'
import {ASYNC_ADD_CASH, ASYNC_GET_CASH, cashAddCreator, cashGetCreator} from "../store/cashReducer";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms))

function* incrementWorker() {
    yield delay(1000)
    yield put(cashAddCreator(10))
}

function* decrementWorker() {
    yield delay(1000)

    yield put(cashGetCreator(-10))
}

export function* countWatcher() {
    yield takeEvery(ASYNC_ADD_CASH, incrementWorker)
    yield takeEvery(ASYNC_GET_CASH, decrementWorker)
}


