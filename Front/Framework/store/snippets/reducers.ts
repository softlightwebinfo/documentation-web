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
                ...action.payload.snippets, // apply delta from hydration
            };
            return nextState
        }
        case actionTypes.SNIPPETS_LIST_TAG_SUCCESS:
        case actionTypes.SNIPPETS_LIST_SUCCESS: {
            return {
                ...state,
                blogs: action.data,
            }
        }
        case actionTypes.SNIPPETS_LIST_ITEM_SUCCESS: {
            return {
                ...state,
                blog: action.data,
            }
        }
        case actionTypes.SNIPPETS_TAGS_SUCCESS: {
            return {
                ...state,
                tags: action.data,
            }
        }
        case actionTypes.SNIPPETS_DELETE_SUCCESS: {
            return {
                ...state,
                blogs: state.blogs.filter(i => i._id != action.id)
            }
        }
        default:
            return state
    }
}

export default reducers
