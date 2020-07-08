import {put} from 'redux-saga/effects'
import {getApi} from "../../../settings";
import {ActionBlogCreateFailed, ActionBlogCreateSuccess, ActionBlogListFailed, ActionBlogListItemFailed, ActionBlogListItemSuccess, ActionBlogListSuccess} from "./actions";
//require('es6-promise').polyfill();
//require('isomorphic-fetch');
export function* blogCreateSaga(data) {
    try {
        const res = yield fetch(getApi("article"), {
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST"
        });
        const response = yield res.json();
        yield put(ActionBlogCreateSuccess(response));
    } catch (err) {
        yield put(ActionBlogCreateFailed());
    }
}

export function* blogListSaga() {
    try {
        const res = yield fetch(getApi("articles"));
        const response = yield res.json();
        yield put(ActionBlogListSuccess(response));
    } catch (err) {
        yield put(ActionBlogListFailed());
    }
}

export function* blogListItemSaga(data) {
    try {
        const res = yield fetch(getApi(`article/${data.data}`));
        const response = yield res.json();
        yield put(ActionBlogListItemSuccess(response));
    } catch (err) {
        yield put(ActionBlogListItemFailed());
    }
}
