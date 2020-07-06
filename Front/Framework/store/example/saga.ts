import {actionTypes, failure, loadDataSuccess, tickClock} from "./actions";
import {all, call, delay, put, take, takeLatest} from 'redux-saga/effects'


export function* runClockSaga() {
    yield take(actionTypes.START_CLOCK);
    while (true) {
        yield put(tickClock(false));
        yield delay(1000)
    }
}

export function* loadDataSaga() {
    try {
        const res = yield fetch('https://jsonplaceholder.typicode.com/users');
        const data = yield res.json();
        yield put(loadDataSuccess(data));
    } catch (err) {
        yield put(failure(err));
    }
}
