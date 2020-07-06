import {IFormButtonType} from "../interfaces/IFormButtonType";
import {FormComponent} from "../FormComponent";

export class FormButton extends FormComponent {
    private readonly _label: string;
    private readonly _type: IFormButtonType;
    private _name: string = "button";

    constructor(label: string, type: IFormButtonType = "submit") {
        super();
        this._label = label;
        this._type = type;
        return this;
    }

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get label(): string {
        return this._label;
    }

    get type(): IFormButtonType {
        return this._type;
    }
}
