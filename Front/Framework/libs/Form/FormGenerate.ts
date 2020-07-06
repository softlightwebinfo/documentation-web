import {IFormGenerateConstructor} from "./interfaces/IFormGenerateConstructor";
import {TFormGenerateAdd} from "./interfaces/IFormGenerateAdd";

export class FormGenerate {
    private readonly _attr: IFormGenerateConstructor;
    private components: TFormGenerateAdd[] = [];

    constructor(attr: IFormGenerateConstructor) {
        this._attr = attr;
        return this;
    }

    get attr(): IFormGenerateConstructor {
        return this._attr;
    }

    add(obj: TFormGenerateAdd): number {
        return this.components.push(obj);
    }

    public GetComponents(): TFormGenerateAdd[] {
        return this.components;
    }
}
