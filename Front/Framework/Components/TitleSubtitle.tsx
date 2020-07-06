import * as React from "react";
import {ITitleSubtitle} from "../Props/ITitleSubtitle";

export const TitleSubtitle: ({title, description}: ITitleSubtitle) => any = ({title, description}) => (
    <div className={"TitleSubtitle"}>
        <h2>{title}</h2>
        <p>{description}</p>
    </div>
);
