import {ReactElement} from "react";

export interface ICardBlog {
    slug: string;
    _id: string;
    description: string;
    title: string;
    subTitle: string;
    tags: string[];
    snippet?: boolean;
    actions?: ReactElement[];
}
