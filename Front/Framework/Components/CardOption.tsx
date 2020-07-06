import {CardComponent, IconComponent, TypographyComponent} from "@codeunic/library-ui/build";
import * as React from "react";
import {ICardOption} from "../Props/ICardOption";

export const CardOption = (props: ICardOption) => (
    <CardComponent
        style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            padding: 10,
        }}
        onClick={props.onClick}
    >
        <IconComponent icon={props.icon} style={{color: "white"}}/>
        <TypographyComponent component={"span"} variant={"caption"} align={"center"} style={{marginTop: 5}}>
            {props.name}
        </TypographyComponent>
    </CardComponent>
);
