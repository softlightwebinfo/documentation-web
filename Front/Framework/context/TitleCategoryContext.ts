import * as React from "react";
import {MenuModel} from "../../MenuModel";

const TitleCategoryContext = React.createContext({content: []});
TitleCategoryContext.displayName = 'TitleCategoryContext';
export default TitleCategoryContext;

export interface ICntxTitleCategory {
    onClick: (e: MenuModel) => void;
    content: MenuModel[];
}
