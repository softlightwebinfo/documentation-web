import {TitleCategory} from "./TitleCategory";
import {Separator} from "./Separator";
import {GridComponent} from "@codeunic/library-ui/build";
import {CardOption} from "./CardOption";
import * as React from "react";
import {ITitleCategoryContentProps} from "../Props/ITitleCategoryContentProps";
import {useTitleCategoryContext} from "../context/useTitleCategoryContext";
// @ts-ignore
import {ICntxTitleCategory} from "../context/TitleCategoryContext";

export const TitleCategoryContent = (props: ITitleCategoryContentProps) => {
    const use: ICntxTitleCategory = useTitleCategoryContext() as unknown as ICntxTitleCategory;
    return (
        <div className={"TitleCategoryContent"}>
            <TitleCategory label={props.label}/>
            <Separator/>
            <GridComponent container spacing={1} item>
                {props.menu.map((menu, index) => (
                    <GridComponent key={index} item xs={12} sm={3}>
                        <CardOption
                            onClick={() => use.onClick(menu)}
                            icon={menu.icon}
                            name={menu.name}
                        />
                    </GridComponent>
                ))}
            </GridComponent>
        </div>
    );
}
