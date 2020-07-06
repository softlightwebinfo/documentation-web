import {Form} from "../libs/Form";

export interface ISLoginContainer {
    form: Form;
    isSend: boolean;
    error: string[];
    lastError: string;
}
