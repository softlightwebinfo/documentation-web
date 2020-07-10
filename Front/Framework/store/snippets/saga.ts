import {put} from 'redux-saga/effects'
import {getApi} from "../../../settings";
import {
    ActionSnippetCreateFailed,
    ActionSnippetCreateSuccess, ActionSnippetDeleteFailed, ActionSnippetDeleteSuccess,
    ActionSnippetListFailed,
    ActionSnippetListItemFailed,
    ActionSnippetListItemSuccess,
    ActionSnippetListSuccess,
    ActionSnippetListTagFailed,
    ActionSnippetListTagSuccess,
    ActionSnippetTagsFailed,
    ActionSnippetTagsSuccess,
    ActionSnippetUpdateFailed,
    ActionSnippetUpdateSuccess
} from "./actions";
//require('es6-promise').polyfill();
//require('isomorphic-fetch');
export function* snippetCreateSaga(data) {
    try {
        const res = yield fetch(getApi("snippet"), {
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST"
        });
        const response = yield res.json();
        yield put(ActionSnippetCreateSuccess(response));
    } catch (err) {
        yield put(ActionSnippetCreateFailed());
    }
}

export function* snippetDeleteSaga(data) {
    try {
        yield fetch(getApi(`snippet/${data.data}`), {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "DELETE"
        });
        yield put(ActionSnippetDeleteSuccess(data.data));
    } catch (err) {
        yield put(ActionSnippetDeleteFailed());
    }
}

export function* snippetUpdateSaga(data) {
    try {
        const res = yield fetch(getApi(`snippet/${data.id}`), {
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "PUT"
        });
        const response = yield res.json();
        yield put(ActionSnippetUpdateSuccess(response));
    } catch (err) {
        yield put(ActionSnippetUpdateFailed());
    }
}

export function* snippetListSaga() {
    try {
        const res = yield fetch(getApi("snippets"));
        const response = yield res.json();
        yield put(ActionSnippetListSuccess(response));
    } catch (err) {
        yield put(ActionSnippetListFailed());
    }
}

export function* snippetListItemSaga(data) {
    try {
        const res = yield fetch(getApi(`snippet/${data.data}`));
        const response = yield res.json();
        yield put(ActionSnippetListItemSuccess(response));
    } catch (err) {
        yield put(ActionSnippetListItemFailed());
    }
}

export function* snippetListTagItemSaga(data) {
    try {
        const res = yield fetch(getApi(`snippets/tag/${data.data}`));
        const response = yield res.json();
        yield put(ActionSnippetListTagSuccess(response));
    } catch (err) {
        yield put(ActionSnippetListTagFailed());
    }
}

export function* snippetTagsSaga() {
    try {
        const res = yield fetch(getApi(`snippets/tags`));
        const response = yield res.json();
        yield put(ActionSnippetTagsSuccess(response));
    } catch (err) {
        yield put(ActionSnippetTagsFailed());
    }
}
