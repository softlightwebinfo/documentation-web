import {PageGenerated} from "./PageGenerated";
import * as React from "react";
import {useTitleCategoryContext} from "../context/useTitleCategoryContext";

export const PageComponentProps = () => {
    const use = useTitleCategoryContext();
    return (
        <PageGenerated
            content={use.content}
        />
    )
};
