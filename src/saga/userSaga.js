// файл для экшенов пользователя
import {put, takeEvery, call} from "redux-saga/effects";
import {FETCH_USERS, addCustomerAction} from "../store/customerReducer";

const fetchUsersFromApi = () => fetch('https://jsonplaceholder.typicode.com/users?_limit=10')

function* fetchUserWorker() {
    const data = yield call(fetchUsersFromApi)
    const json = yield call(() => new Promise(resolve => resolve(data)))
    yield put(addCustomerAction (json))
}

export function* userWatcher() {
   yield takeEvery(FETCH_USERS, fetchUserWorker)
}