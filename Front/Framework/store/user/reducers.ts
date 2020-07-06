import {actionTypes} from "./actions";

export const exampleInitialState = {
    token: "",
    isLogin: false,
    user: null,
    error: "",
};

function reducers(state = exampleInitialState, action) {
    switch (action.type) {
        case '__NEXT_REDUX_WRAPPER_HYDRATE__': {
            const nextState = {
                ...state, // use previous state
                ...action.payload.user, // apply delta from hydration
            };
            if (state.user) nextState.user = state.user;
            if (state.isLogin) nextState.isLogin = state.isLogin;
            if (state.token) nextState.token = state.token;
            return nextState
        }
        case actionTypes.AUTH_USER: {
            return {
                ...state,
                isLogin: !!(action.data.token.length && Object.keys(action.data.user).length),
                token: action.data.token,
                user: action.data.user,
            }
        }
        case actionTypes.AUTH_LOGOUT: {
            return {
                ...state,
                isLogin: false,
                token: "",
                user: null,
            }
        }
        case actionTypes.AUTH_REGISTER_FAILURE:
        case actionTypes.AUTH_LOGIN_FAILURE: {
            return {
                ...state,
                error: action.data,
            }
        }
        default:
            return state
    }
}

export default reducers
