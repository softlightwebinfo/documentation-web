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
    BLOG_TAGS: 'BLOG_TAGS',
    BLOG_TAGS_SUCCESS: 'BLOG_TAGS_SUCCESS',
    BLOG_TAGS_FAILED: 'BLOG_TAGS_FAILED',
    BLOG_LIST_TAG: 'BLOG_LIST_TAG',
    BLOG_LIST_TAG_SUCCESS: 'BLOG_LIST_TAG_SUCCESS',
    BLOG_LIST_TAG_FAILED: 'BLOG_LIST_TAG_FAILED',
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

export const ActionBlogTags = () => ({type: actionTypes.BLOG_TAGS});
export const ActionBlogTagsSuccess = (data) => ({type: actionTypes.BLOG_TAGS_SUCCESS, data: data.tags || []});
export const ActionBlogTagsFailed = () => ({type: actionTypes.BLOG_TAGS_FAILED});

export const ActionBlogListTag = (tag: string) => ({type: actionTypes.BLOG_LIST_TAG, data: tag});
export const ActionBlogListTagSuccess = (data) => ({type: actionTypes.BLOG_LIST_TAG_SUCCESS, data: data});
export const ActionBlogListTagFailed = () => ({type: actionTypes.BLOG_LIST_TAG_FAILED});
