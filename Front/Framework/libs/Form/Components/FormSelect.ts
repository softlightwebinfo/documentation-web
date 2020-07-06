import {FormComponent} from "../FormComponent";
import {FormSelectItem} from "./FormSelectItem";

export class FormSelect extends FormComponent {
    private readonly _name: string;
    private readonly _title: string;
    private readonly _required: boolean = true;
    private _value: string = "";
    private _autoFocus: boolean = false;
    private _onChange: (e: any, component: this) => void;
    private _items: FormSelectItem[] = [];

    constructor(name: string, title: string, items: FormSelectItem[]) {
        super();
        this._name = name;
        this._items = items;
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

    get items(): FormSelectItem[] {
        return this._items;
    }

    get value(): string {
        return this._value;
    }

    SetValue(value: string) {
        this._value = value;
        return this;
    }

    SetItems(value: FormSelectItem[]) {
        this._items = value;
        return this;
    }

    AddItem(value: FormSelectItem) {
        this._items.push(value);
        return this;
    }

    SetAutoFocus(autoFocus: boolean): this {
        this._autoFocus = autoFocus;
        return this;
    }
}
