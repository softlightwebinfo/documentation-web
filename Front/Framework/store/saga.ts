import {all, takeLatest} from 'redux-saga/effects'
import es6promise from 'es6-promise'

import {actionTypes as actionTypeExample} from './example/actions'
import {loadDataSaga} from "./example/saga";
import {authRegisterUserSaga, actionTypes as actionTypeUser, authLoginUserSaga, authInitialUserSaga, authLogoutUserSaga} from "./user";
import {blogCreateSaga, actionTypes as actionBlog, blogListSaga, blogListItemSaga, blogTagsSaga, blogListTagItemSaga, blogUpdateSaga, blogDeleteSaga} from "./blog";
import {snippetCreateSaga, actionTypes as actionSnippet, snippetListSaga, snippetListItemSaga, snippetTagsSaga, snippetListTagItemSaga, snippetUpdateSaga, snippetDeleteSaga} from "./snippets";

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
        takeLatest(actionBlog.BLOG_TAGS, blogTagsSaga),
        takeLatest(actionBlog.BLOG_LIST_TAG, blogListTagItemSaga),
        takeLatest(actionBlog.BLOG_UPDATE, blogUpdateSaga),
        takeLatest(actionBlog.BLOG_DELETE, blogDeleteSaga),

        takeLatest(actionSnippet.SNIPPETS_CREATE, snippetCreateSaga),
        takeLatest(actionSnippet.SNIPPETS_LIST, snippetListSaga),
        takeLatest(actionSnippet.SNIPPETS_LIST_ITEM, snippetListItemSaga),
        takeLatest(actionSnippet.SNIPPETS_TAGS, snippetTagsSaga),
        takeLatest(actionSnippet.SNIPPETS_LIST_TAG, snippetListTagItemSaga),
        takeLatest(actionSnippet.SNIPPETS_UPDATE, snippetUpdateSaga),
        takeLatest(actionSnippet.SNIPPETS_DELETE, snippetDeleteSaga),
    ])
}

export default rootSaga
