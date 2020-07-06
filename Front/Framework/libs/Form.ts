export class FormError {
    public type: string;
    public name: string;
    public value: string;

    constructor(type: string, name: string, value: string) {
        this.type = type;
        this.name = name;
        this.value = value;
    }
}

export interface IFormErrorsMessagesInitial {
    [p: string]: string;
}

export interface IFormErrorsMessages extends IFormErrorsMessagesInitial {
    common: string;
}

export class Form {
    private _fields = {};
    private _fieldsErrors = {};
    private _errorsMessages: IFormErrorsMessages = {
        common: "Error"
    };

    constructor(errors: IFormErrorsMessages, initial: IFormErrorsMessagesInitial) {
        this._errorsMessages = errors;
        this._fields = {
            ...initial
        };
        this._fieldsErrors = {
            ...initial
        };
    }

    public add(name: string, value: string, type: string) {
        if (!this._isErrorValidate(value, type)) {
            this._fields[name] = value;
            if (name in this._fieldsErrors) {
                delete this._fieldsErrors[name];
            }
        } else {
            this._fieldsErrors[name] = new FormError(type, name, value);
        }
    }

    private _isErrorValidate(value: string, type: string): boolean {
        switch (type) {
            case "tel": {
                return !Form.ValidatePhone(value);
            }

            case "email": {
                return !Form.ValidateEmail(value);
            }
        }
        return !value.length;
    }

    public static ValidatePhone(phone: string): boolean {
        let str = phone.toString().replace(/\s/g, '');
        return str.length === 9 && /^[679]{1}[0-9]{8}$/.test(str)
    }

    public static ValidateEmail(email: string) {
        let filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        return filter.test(email);
    }

    validate(): boolean {
        return !Object.keys(this._fieldsErrors).length;
    }

    getFields() {
        return this._fields;
    }

    getErrors() {
        return Object.keys(this._fieldsErrors).map((k) => this._errorsMessages[k]);
    }

    validatePasswords() {
        return ("password" in this._fields && "rpassword" in this._fields) && (this._fields["password"] === this._fields['rpassword']);
    }

    getErrorText(text: string) {
        return this._errorsMessages[text]
    }
}
