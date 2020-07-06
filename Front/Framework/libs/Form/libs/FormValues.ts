import {FormChange} from "./FormChange";
import {TFormGenerateAdd} from "../interfaces/IFormGenerateAdd";

export interface IFormValuesData {
    values: FormChange;
    component: TFormGenerateAdd;
}

export class FormValues {
    private _data: Map<string, IFormValuesData>;
    private _errors = {};

    constructor(errors = {}) {
        this._data = new Map();
        this._errors = errors;
    }

    Add(data: FormChange, component: TFormGenerateAdd) {
        this._data.set(data.name, {
            component,
            values: data,
        });
    }

    ToDataJson() {
        let obj = {};
        this._data.forEach(function (value, key) {
            obj[key] = value.values.value;
        });
        return obj;
    }

    Validate() {
        let error = {};
        this._data.forEach((value) => {
            if (value.component.required && !value.values.value.length) {
                error[value.values.name] = this._errors[value.values.name];
            }
        });
        return error;
    }
}
