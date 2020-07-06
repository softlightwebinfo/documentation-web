import * as React from "react";
import {IAds} from "../Props/IAds";

export const Ads: ({image, title}: IAds) => any = ({image, title}) => (
    <div className={"Ads"}>
        <span>Publicidad</span>
        <img src={image} alt={title}/>
    </div>
);
