import {MenuModel} from "./MenuModel";

export class MenuGeneratorModel extends MenuModel {
    private _props: any;


    constructor(name: string, icon: string, key: string) {
        super(name, icon, key);
    }

    get props(): any {
        return this._props;
    }

    set props(value: any) {
        this._props = value;
    }
}
