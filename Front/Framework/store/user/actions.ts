import {IAuthLogin, IAuthRegister} from "../../Interfaces/IAuth";
import {IUser} from "../../Interfaces/IUser";

export const actionTypes = {
    AUTH_LOGOUT: 'AUTH_LOGOUT',
    AUTH_USER: 'AUTH_USER',
    AUTH_USER_FAIL: 'AUTH_USER_FAIL',
    AUTH_REGISTER: 'AUTH_REGISTER',
    AUTH_REGISTER_SUCCESS: "AUTH_REGISTER_SUCCESS",
    AUTH_REGISTER_FAILURE: "AUTH_REGISTER_FAILURE",
    AUTH_LOGIN: 'AUTH_LOGIN',
    AUTH_LOGIN_SUCCESS: 'AUTH_LOGIN_SUCCESS',
    AUTH_LOGIN_FAILURE: 'AUTH_LOGIN_FAILURE',
    AUTH_LOGIN_INICIAL: 'AUTH_LOGIN_INICIAL'
};

export const ActionUserRegister = (data: IAuthRegister) => ({type: actionTypes.AUTH_REGISTER, data});
export const ActionUserLogin = (data: IAuthLogin) => ({type: actionTypes.AUTH_LOGIN, data});
export const ActionInitialLogin = (ctx) => ({type: actionTypes.AUTH_LOGIN_INICIAL, ctx});

export const SetLogin = (data: IUser) => ({type: actionTypes.AUTH_USER, data});
export const Logout = () => ({type: actionTypes.AUTH_LOGOUT});


export const Success = (data: any) => ({type: actionTypes.AUTH_REGISTER_SUCCESS, data});
export const Failure = (data: any) => ({type: actionTypes.AUTH_REGISTER_FAILURE, data});

export const SuccessLogin = (data: any) => ({type: actionTypes.AUTH_LOGIN_SUCCESS, data});
export const FailureLogin = (data: any) => ({type: actionTypes.AUTH_LOGIN_FAILURE, data});
