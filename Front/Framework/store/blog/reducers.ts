import {actionTypes} from "./actions";
import {HYDRATE} from "next-redux-wrapper";

export const exampleInitialState = {
    blogs: [],
    blog: null,
    tags: [],
};

function reducers(state = exampleInitialState, action) {
    switch (action.type) {
        case HYDRATE: {
            const nextState = {
                ...state, // use previous state
                ...action.payload.blog, // apply delta from hydration
            };
            return nextState
        }
        case actionTypes.BLOG_LIST_TAG_SUCCESS:
        case actionTypes.BLOG_LIST_SUCCESS: {
            return {
                ...state,
                blogs: action.data,
            }
        }
        case actionTypes.BLOG_LIST_ITEM_SUCCESS: {
            return {
                ...state,
                blog: action.data,
            }
        }
        case actionTypes.BLOG_TAGS_SUCCESS: {
            return {
                ...state,
                tags: action.data,
            }
        }
        default:
            return state
    }
}

export default reducers
