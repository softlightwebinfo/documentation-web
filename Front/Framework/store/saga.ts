import {all, takeLatest} from 'redux-saga/effects'
import es6promise from 'es6-promise'

import {actionTypes as actionTypeExample} from './example/actions'
import {loadDataSaga} from "./example/saga";
import {authRegisterUserSaga, actionTypes as actionTypeUser, authLoginUserSaga, authInitialUserSaga, authLogoutUserSaga} from "./user";
import {blogCreateSaga, actionTypes as actionBlog, blogListSaga, blogListItemSaga} from "./blog";

es6promise.polyfill();

function* rootSaga() {
    yield all([
        //call(runClockSaga),
        takeLatest(actionTypeExample.LOAD_DATA, loadDataSaga),
        takeLatest(actionTypeUser.AUTH_REGISTER, authRegisterUserSaga),
        takeLatest(actionTypeUser.AUTH_LOGIN, authLoginUserSaga),
        takeLatest(actionTypeUser.AUTH_LOGIN_INICIAL, authInitialUserSaga),
        takeLatest(actionTypeUser.AUTH_LOGOUT, authLogoutUserSaga),
        takeLatest(actionTypeUser.AUTH_LOGOUT, authLogoutUserSaga),
        takeLatest(actionBlog.BLOG_CREATE, blogCreateSaga),
        takeLatest(actionBlog.BLOG_LIST, blogListSaga),
        takeLatest(actionBlog.BLOG_LIST_ITEM, blogListItemSaga),
    ])
}

export default rootSaga
