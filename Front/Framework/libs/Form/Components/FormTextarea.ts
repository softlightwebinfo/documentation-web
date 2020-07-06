import {FormComponent} from "../FormComponent";

export class FormTextarea extends FormComponent {
    private readonly _name: string;
    private readonly _title: string;
    private readonly _required: boolean = true;
    private _autoFocus: boolean = false;
    private _onChange: (e: any, component: this) => void;
    private _rows: number = 4;
    private _rowsMax: number = 10;

    constructor(name: string, title: string) {
        super();
        this._name = name;
        this._title = title;
        return this;
    }

    get name(): string {
        return this._name;
    }

    get title(): string {
        return this._title;
    }

    get required(): boolean {
        return this._required;
    }

    get autoFocus(): any {
        return this._autoFocus;
    }

    get onChange(): (e: any, component: this) => void {
        return this._onChange;
    }

    set onChange(value: (e: any, component: this) => void) {
        this._onChange = value;
    }

    get rows(): number {
        return this._rows;
    }

    set rows(value: number) {
        this._rows = value;
    }

    get rowsMax(): number {
        return this._rowsMax;
    }

    set rowsMax(value: number) {
        this._rowsMax = value;
    }

    SetAutoFocus(autoFocus: boolean): this {
        this._autoFocus = autoFocus;
        return this;
    }
}
