export class FormChange {
    private _name: string;
    private _value: string;
    private _type: string;

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get value(): string {
        return this._value;
    }

    set value(value: string) {
        this._value = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    constructor(name: string, value: string, type: string) {
        this._name = name;
        this._value = value;
        this._type = type;
    }
}
