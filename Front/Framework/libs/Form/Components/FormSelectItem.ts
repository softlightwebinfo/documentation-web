import {FormComponent} from "../FormComponent";

export class FormSelectItem extends FormComponent {
    private readonly _title: string;
    private readonly _value: string;

    constructor(title: string, value: string) {
        super();
        this._title = title;
        this._value = value;
        return this;
    }

    get title(): string {
        return this._title;
    }

    get value(): string {
        return this._value;
    }
}
