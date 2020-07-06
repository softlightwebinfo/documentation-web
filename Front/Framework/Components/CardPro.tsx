import * as React from "react";
import {ICardPro} from "../Props/ICardPro";

export const CardPro: ({title, image}: ICardPro) => any = ({title, image}) => (
    <img className={"CardPro"} src={image} alt={title} title={title}/>
);
