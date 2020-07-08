import {ITemplateProps} from "../Props/ITemplateProps";
import * as React from "react";
import {AppBarComponent, ToolbarComponent, TypographyComponent} from "@codeunic/library-ui/build";
// @ts-ignore
import {Router, Link} from '../../server/routes';

export const Template = (props: ITemplateProps) => (
    <div className={"Main-template"}>
        <AppBarComponent position={"static"}>
            <ToolbarComponent regular={true} gutters={true}>
                <TypographyComponent
                    style={{
                        flexGrow: 1,
                        cursor: "pointer"
                    }}
                    variant="h6"
                    onClick={() => Router.pushRoute("/")}
                >
                    {props.title.length > 60 ? props.title.slice(0, 60) + '...' : props.title}
                </TypographyComponent>
                <Link to="/">
                    <a style={{textDecoration: "none", color: "black"}}>
                        INICIO
                    </a>
                </Link>
            </ToolbarComponent>
        </AppBarComponent>
        <main className={"Main"}>
            {props.children}
        </main>
    </div>
);
