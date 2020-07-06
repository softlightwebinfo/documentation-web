export class MenuModel {
    get key(): string {
        return this._key;
    }

    set key(value: string) {
        this._key = value;
    }

    private _icon: any;
    private _name: string;
    private _key: string;

    get icon(): any {
        return this._icon;
    }

    set icon(value: any) {
        this._icon = value;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    constructor(name: string, icon: any, key: string) {
        this._name = name;
        this._icon = icon;
        this._key = key;
    }
}
