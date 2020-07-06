import * as React from "react";

export interface IPLogin {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    onSubmit: () => any;
    errors: string[];
}
