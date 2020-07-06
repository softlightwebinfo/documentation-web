import {Failure, FailureLogin, Success, SuccessLogin, SetLogin} from "./actions";
import {delay, put} from 'redux-saga/effects'
import {getApi} from "../../../settings";
import {parseCookies, destroyCookie} from 'nookies'
//require('es6-promise').polyfill();
//require('isomorphic-fetch');
export function* authRegisterUserSaga(data) {
    try {
        const res = yield fetch(getApi("user/register"), {
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST"
        });
        const response = yield res.json();
        if (!res.ok) {
            yield put(Failure(response.error));
            return;
        }
        yield put(Success(response));
        yield put(SetLogin(response));
        delay(2000);
        yield put(Success(null));
    } catch (err) {
        yield put(Failure(err));
    }
}

export function* authLoginUserSaga(data) {
    try {
        const res = yield fetch(getApi("user/login"), {
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST"
        });
        const response = yield res.json();
        if (!res.ok) {
            yield put(FailureLogin(response.error));
            return;
        }
        yield put(SuccessLogin(response));
        yield put(SetLogin(response));
        delay(2000);
        yield put(SuccessLogin(null));
    } catch (err) {
        yield put(FailureLogin(err));
    }
}

export function* authInitialUserSaga(data) {
    try {
        const res = yield fetch(getApi("user/initial"), {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'cookie': data.ctx.req.headers.cookie,
            },
            method: "POST",
        });
        const response = yield res.json();
        yield put(SetLogin(response));
    } catch (err) {
        yield put(FailureLogin(err));
    }
}

export function* authLogoutUserSaga() {
    //const cookies = parseCookies();

    destroyCookie(null, 'user');
    destroyCookie(null, 'token');
}
