import {actionTypes} from "./actions";

export const exampleInitialState = {
    blogs: [],
    blog: null,
};

function reducers(state = exampleInitialState, action) {
    switch (action.type) {
        case '__NEXT_REDUX_WRAPPER_HYDRATE__': {
            const nextState = {
                ...state, // use previous state
                ...action.payload.blog, // apply delta from hydration
            };
            //if (state.blogs) nextState.blogs = state.blogs;
            return nextState
        }
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
        default:
            return state
    }
}

export default reducers
