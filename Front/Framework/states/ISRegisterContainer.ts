import {Form} from "../libs/Form";

export interface ISRegisterContainer {
    form: Form;
    isSend: boolean;
    error: string[];
    lastError: string;
}
