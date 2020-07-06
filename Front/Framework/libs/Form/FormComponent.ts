export class FormComponent {
    protected _col_xs: number = 12;
    protected _required: boolean = true;
    private _autoFocus: boolean = false;

    get col_xs(): number {
        return this._col_xs;
    }

    get required(): boolean {
        return this._required;
    }

    setRequired(required: boolean) {
        this._required = required;
        return this;
    }

    SetAutoFocus(autoFocus: boolean): this {
        this._autoFocus = autoFocus;
        return this;
    }

    public setColXs(value: number) {
        this._col_xs = value;
        return this;
    }

    get autoFocus(): any {
        return this._autoFocus;
    }

    constructor() {

    }

}
