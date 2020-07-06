import {CardComponent, TypographyComponent} from "@codeunic/library-ui/build";
import * as React from "react";
import {ITitleCategoryProps} from "../Props/ITitleCategoryProps";

export const TitleCategory = (props: ITitleCategoryProps) => (
    <CardComponent variant={"outlined"} style={{padding: 10}}>
        <TypographyComponent align={"center"}>{props.label}</TypographyComponent>
    </CardComponent>
);
