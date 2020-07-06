import * as React from "react";

export interface IPRegister {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: () => any;
    errors: string[];
}
