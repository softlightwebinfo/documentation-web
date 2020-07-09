import {CardComponent, CardHeaderComponent, BadgeComponent, CardContentComponent, CardActionAreaComponent, TypographyComponent, AvatarComponent, ButtonComponent} from "@codeunic/library-ui/build";
import * as React from "react";
import {ICardBlog} from "../Props/ICardBlog";
// @ts-ignore
import {Link} from '../../server/routes';

export const CardBlog = (props: ICardBlog) => {
    const description = () => (
        props.description.length > 200 ? props.description.slice(0, 200) + '...' : props.description
    );

    return (
        <CardComponent>
            <CardHeaderComponent
                title={props.title} subheader={props.subTitle}
                avatar={<AvatarComponent>Ad</AvatarComponent>}
            />
            <CardContentComponent>
                <TypographyComponent component={"p"}>{description()}</TypographyComponent>
                <div style={{marginTop: 15}}>
                    {props.tags.map((tag, index) => (
                        // @ts-ignore
                        <BadgeComponent style={{marginRight: 5}} key={index} badgeContent={tag}/>
                    ))}
                </div>
            </CardContentComponent>
            <CardActionAreaComponent>
                <Link to={`blog`} params={{id: props._id, slug: props.slug}}>
                    <a className={"button-component button-component--secondary button-component--color button-component--grouped"}>
                        <span className={"button-component__children"}>
                            Entrar
                        </span>
                    </a>
                </Link>
            </CardActionAreaComponent>
        </CardComponent>
    );
};