export interface IAuth {
    email: string;
    password: string;
}

export interface IAuthRegister extends IAuth {
    phone: string;
    name: string;
}

export interface IAuthLogin extends IAuth {

}
