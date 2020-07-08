import {IDataBlogCreate} from "../../Interfaces/IDataBlogCreate";

export const actionTypes = {
    BLOG_CREATE: 'BLOG_CREATE',
    BLOG_CREATE_SUCCESS: 'BLOG_CREATE_SUCCESS',
    BLOG_CREATE_FAILED: 'BLOG_CREATE_FAILED',
    BLOG_LIST: 'BLOG_LIST',
    BLOG_LIST_SUCCESS: 'BLOG_LIST_SUCCESS',
    BLOG_LIST_FAILED: 'BLOG_LIST_FAILED',
    BLOG_LIST_ITEM: 'BLOG_LIST_ITEM',
    BLOG_LIST_ITEM_SUCCESS: 'BLOG_LIST_ITEM_SUCCESS',
    BLOG_LIST_ITEM_FAILED: 'BLOG_LIST_ITEM_FAILED',
};

export const ActionBlogCreate = (data: IDataBlogCreate) => ({type: actionTypes.BLOG_CREATE, data});
export const ActionBlogCreateSuccess = (data) => ({type: actionTypes.BLOG_CREATE_SUCCESS, data});
export const ActionBlogCreateFailed = () => ({type: actionTypes.BLOG_CREATE_FAILED});

export const ActionBlogList = () => ({type: actionTypes.BLOG_LIST});
export const ActionBlogListSuccess = (data) => ({type: actionTypes.BLOG_LIST_SUCCESS, data});
export const ActionBlogListFailed = () => ({type: actionTypes.BLOG_LIST_FAILED});

export const ActionBlogListItem = (id) => ({type: actionTypes.BLOG_LIST_ITEM, data: id});
export const ActionBlogListItemSuccess = (data) => ({type: actionTypes.BLOG_LIST_ITEM_SUCCESS, data});
export const ActionBlogListItemFailed = () => ({type: actionTypes.BLOG_LIST_ITEM_FAILED});
