import {CardComponent, CardContentComponent, GridComponent} from "@codeunic/library-ui/build";
import * as React from "react";
import {Template} from "./Template";
import {IChildren} from "@codeunic/library-ui/build/Interfaces/IChildren";
// @ts-ignore
import {Link} from "../../server/routes";

export interface ITemplateDashboard {
    children: IChildren | IChildren[];
    title: string;
}

export const TemplateDashboard = (props: ITemplateDashboard) => {
    const links = () => {
        return [
            {label: "Pagina Principal", route: "/"},
            {label: "Listado de paginas", route: "list"},
            {label: "Crear nueva pagina", route: "new"},
            {label: "Listado de paginas", route: "dashboard-list"},
        ]
    };

    const content = () => {
        return (
            <GridComponent item container spacing={2} xs={12} xl={2}>
                <GridComponent item xs={12}>
                    {links().map((page, index) => (
                        <Link to={page.route} key={index}>
                            <a style={{marginBottom: 10, display: "block"}}>
                                <CardComponent>
                                    <CardContentComponent>
                                        {page.label}
                                    </CardContentComponent>
                                </CardComponent>
                            </a>
                        </Link>
                    ))}
                </GridComponent>
            </GridComponent>
        )
    }
    return (
        <Template
            title={props.title}
        >
            <GridComponent container item spacing={2}>
                {content()}
                <GridComponent xs={12} xl={10} item>
                    <div style={{marginTop: 7}}>
                        {props.children}
                    </div>
                </GridComponent>
            </GridComponent>
        </Template>
    )
};
