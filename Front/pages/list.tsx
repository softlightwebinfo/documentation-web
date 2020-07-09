import * as React from "react";
import {Template} from "../Framework/Components/Template";
import {BadgeComponent, CardComponent, CardContentComponent, ContainerComponent, GridComponent, TypographyComponent} from "@codeunic/library-ui/build";
import {TitleCategoryContent} from "../Framework/Components/TitleCategoryContent";
import {Component} from "react";
import {connect} from 'react-redux';
import {END} from "redux-saga";
import {ActionBlogList, ActionBlogListTag, ActionBlogTags} from "../Framework/store/blog";
// @ts-ignore
import {Link} from '../server/routes';

class Index extends Component<{
    blogs: any[];
    tag: string;
    tags: string[];
}> {
    static async getInitialProps(ctx) {
        if (ctx.query.tag) {
            if (ctx.query.tag == "Todos") {
                ctx.store.dispatch(ActionBlogList());
            } else {
                ctx.store.dispatch(ActionBlogListTag(ctx.query.tag));
            }
        } else {
            ctx.store.dispatch(ActionBlogList());
        }
        ctx.store.dispatch(ActionBlogTags());
        if (ctx.req) {
            ctx.store.dispatch(END);
            await ctx.store.sagaTask.toPromise();
        }
        return {
            tag: ctx.query.tag
        }
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Template
                title={"Listado de blogs"}
            >
                <ContainerComponent fixed maxWidth={false}>
                    <GridComponent spacing={4} item container>
                        <GridComponent item xs={12} sm={12} md={9} xl={10}>
                            {this.props.blogs.map((blog) => (
                                <Link to={"blog"} params={{id: blog._id, slug: blog.slug}} key={blog._id}>
                                    <a>
                                        <CardComponent style={{marginBottom: 5}}>
                                            <CardContentComponent>
                                                <TypographyComponent>
                                                    {blog.title}
                                                </TypographyComponent>
                                            </CardContentComponent>
                                        </CardComponent>
                                    </a>
                                </Link>
                            ))}
                        </GridComponent>
                        <GridComponent item xs={12} sm={12} md={3} xl={2}>
                            <div>
                                <TitleCategoryContent
                                    label={"Categorias"}
                                >
                                    {["Todos", ...this.props.tags].map((tag, index) => (
                                        <Link to={"list-tag"} params={{tag: tag}} key={index}>
                                            <a className={this.props.tag == tag || (tag == "Todos" && this.props.tag == undefined) ? "TitleCategoryContent-badge--selected" : null}>
                                                <BadgeComponent
                                                    style={{marginRight: 5}}
                                                    // @ts-ignore
                                                    badgeContent={tag}/>
                                            </a>
                                        </Link>
                                    ))}
                                </TitleCategoryContent>
                            </div>
                        </GridComponent>
                    </GridComponent>
                </ContainerComponent>
            </Template>
        );
    }
}

export default connect(state => ({
    blogs: state.blog.blogs || [],
    tags: state.blog.tags || []
}))(Index)
