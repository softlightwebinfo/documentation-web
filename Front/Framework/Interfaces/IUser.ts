export interface IUser {
    token: string;
    user: IUserAuth;
}

export interface IUserAuth {
    id: string;
    active: boolean;
    createdAt: string;
    updatedAt: string;
    email: string;
    name: string;s
}
