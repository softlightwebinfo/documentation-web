import titleCategoryContext from "./TitleCategoryContext";
import * as React from "react";

export const useTitleCategoryContext = () => {
    return React.useContext(titleCategoryContext);
};
