import {FormComponent} from "../FormComponent";

export type TFormDatePickerType = "datetime-local";

export class FormDatePicker extends FormComponent {
    private readonly _name: string;
    private readonly _title: string;
    private _onChange: (e: any, component: this) => void;
    private _defaultValue: string = "2017-05-24T10:30";
    private _type: TFormDatePickerType = "datetime-local";

    constructor(name: string, title: string, type?: TFormDatePickerType = "datetime-local") {
        super();
        this._name = name;
        this._title = title;
        this._type = type;
        return this;
    }

    get type(): TFormDatePickerType {
        return this._type;
    }

    SetType(value: TFormDatePickerType): this {
        this._type = value;
        return this;
    }

    get defaultValue(): string {
        return this._defaultValue;
    }

    SetDefaultValue(value: string): this {
        this._defaultValue = value;
        return this;
    }

    get name(): string {
        return this._name;
    }

    get title(): string {
        return this._title;
    }

    get onChange(): (e: any, component: this) => void {
        return this._onChange;
    }

    set onChange(value: (e: any, component: this) => void) {
        this._onChange = value;
    }
}
