import {TitleCategory} from "./TitleCategory";
import {Separator} from "./Separator";
import {GridComponent} from "@codeunic/library-ui/build";
import * as React from "react";
import {ITitleCategoryContentProps} from "../Props/ITitleCategoryContentProps";

export const TitleCategoryContent = (props: ITitleCategoryContentProps) => {
    return (
        <div className={"TitleCategoryContent"}>
            <TitleCategory label={props.label}/>
            <Separator/>
            <GridComponent container spacing={1} item>
                <div className={"TitleCategoryContent__content"}>
                    {props.children}
                </div>
            </GridComponent>
        </div>
    );
}
