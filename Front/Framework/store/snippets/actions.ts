import {IDataBlogCreate} from "../../Interfaces/IDataBlogCreate";

export const actionTypes = {
    SNIPPETS_CREATE: 'SNIPPETS_CREATE',
    SNIPPETS_CREATE_SUCCESS: 'SNIPPETS_CREATE_SUCCESS',
    SNIPPETS_CREATE_FAILED: 'SNIPPETS_CREATE_FAILED',
    SNIPPETS_UPDATE: 'SNIPPETS_UPDATE',
    SNIPPETS_UPDATE_SUCCESS: 'SNIPPETS_UPDATE_SUCCESS',
    SNIPPETS_UPDATE_FAILED: 'SNIPPETS_UPDATE_FAILED',
    SNIPPETS_LIST: 'SNIPPETS_LIST',
    SNIPPETS_LIST_SUCCESS: 'SNIPPETS_LIST_SUCCESS',
    SNIPPETS_LIST_FAILED: 'SNIPPETS_LIST_FAILED',
    SNIPPETS_LIST_ITEM: 'SNIPPETS_LIST_ITEM',
    SNIPPETS_LIST_ITEM_SUCCESS: 'SNIPPETS_LIST_ITEM_SUCCESS',
    SNIPPETS_LIST_ITEM_FAILED: 'SNIPPETS_LIST_ITEM_FAILED',
    SNIPPETS_TAGS: 'SNIPPETS_TAGS',
    SNIPPETS_TAGS_SUCCESS: 'SNIPPETS_TAGS_SUCCESS',
    SNIPPETS_TAGS_FAILED: 'SNIPPETS_TAGS_FAILED',
    SNIPPETS_LIST_TAG: 'SNIPPETS_LIST_TAG',
    SNIPPETS_LIST_TAG_SUCCESS: 'SNIPPETS_LIST_TAG_SUCCESS',
    SNIPPETS_LIST_TAG_FAILED: 'SNIPPETS_LIST_TAG_FAILED',
    SNIPPETS_DELETE: 'SNIPPETS_DELETE',
    SNIPPETS_DELETE_SUCCESS: 'SNIPPETS_DELETE_SUCCESS',
    SNIPPETS_DELETE_FAILED: 'SNIPPETS_DELETE_FAILED',
};

export const ActionSnippetCreate = (data: IDataBlogCreate) => ({type: actionTypes.SNIPPETS_CREATE, data});
export const ActionSnippetCreateSuccess = (data) => ({type: actionTypes.SNIPPETS_CREATE_SUCCESS, data});
export const ActionSnippetCreateFailed = () => ({type: actionTypes.SNIPPETS_CREATE_FAILED});

export const ActionSnippetUpdate = (data: IDataBlogCreate, id) => ({type: actionTypes.SNIPPETS_UPDATE, data, id});
export const ActionSnippetUpdateSuccess = (data) => ({type: actionTypes.SNIPPETS_UPDATE_SUCCESS, data});
export const ActionSnippetUpdateFailed = () => ({type: actionTypes.SNIPPETS_UPDATE_FAILED});

export const ActionSnippetList = () => ({type: actionTypes.SNIPPETS_LIST});
export const ActionSnippetListSuccess = (data) => ({type: actionTypes.SNIPPETS_LIST_SUCCESS, data});
export const ActionSnippetListFailed = () => ({type: actionTypes.SNIPPETS_LIST_FAILED});

export const ActionSnippetListItem = (id) => ({type: actionTypes.SNIPPETS_LIST_ITEM, data: id});
export const ActionSnippetListItemSuccess = (data) => ({type: actionTypes.SNIPPETS_LIST_ITEM_SUCCESS, data});
export const ActionSnippetListItemFailed = () => ({type: actionTypes.SNIPPETS_LIST_ITEM_FAILED});

export const ActionSnippetDelete = (id) => ({type: actionTypes.SNIPPETS_DELETE, data: id});
export const ActionSnippetDeleteSuccess = (id) => ({type: actionTypes.SNIPPETS_DELETE_SUCCESS, id: id});
export const ActionSnippetDeleteFailed = () => ({type: actionTypes.SNIPPETS_DELETE_FAILED});

export const ActionSnippetTags = () => ({type: actionTypes.SNIPPETS_TAGS});
export const ActionSnippetTagsSuccess = (data) => ({type: actionTypes.SNIPPETS_TAGS_SUCCESS, data: data.tags || []});
export const ActionSnippetTagsFailed = () => ({type: actionTypes.SNIPPETS_TAGS_FAILED});

export const ActionSnippetListTag = (tag: string) => ({type: actionTypes.SNIPPETS_LIST_TAG, data: tag});
export const ActionSnippetListTagSuccess = (data) => ({type: actionTypes.SNIPPETS_LIST_TAG_SUCCESS, data: data});
export const ActionSnippetListTagFailed = () => ({type: actionTypes.SNIPPETS_LIST_TAG_FAILED});
