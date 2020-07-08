import * as React from "react";
import {Template} from "../Framework/Components/Template";
import {BadgeComponent, ContainerComponent, GridComponent} from "@codeunic/library-ui/build";
import {TitleCategoryContent} from "../Framework/Components/TitleCategoryContent";
import {Separator} from "../Framework/Components/Separator";
import {Component} from "react";
import {connect} from 'react-redux';
import {END} from "redux-saga";
import {ActionBlogList, ActionBlogListTag, ActionBlogTags} from "../Framework/store/blog";
import {CardBlog} from "../Framework/Components/CardBlog";
import moment from 'moment';
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
                            <GridComponent spacing={4} item container>
                                {this.props.blogs.map((blog, index) => (
                                    <GridComponent key={blog._id} item xs={12} sm={12} md={4} xl={3} className={"CardBlogParent"}>
                                        <CardBlog
                                            _id={blog._id}
                                            slug={blog.slug}
                                            title={blog.title}
                                            subTitle={moment(blog.created).format("DD/MM/YYYY HH:mm")}
                                            description={blog.description}
                                            tags={blog.tags}
                                        />
                                    </GridComponent>
                                ))}
                            </GridComponent>
                        </GridComponent>
                        <GridComponent item xs={12} sm={12} md={3} xl={2}>
                            <div>
                                <TitleCategoryContent
                                    label={"Categorias"}
                                >
                                    {["Todos", ...this.props.tags].map((tag, index) => (
                                        <Link to={"tag"} params={{tag: tag}} key={index}>
                                            <a className={this.props.tag == tag || (tag == "Todos" && this.props.tag == undefined) ? "TitleCategoryContent-badge--selected" : null}>
                                                <BadgeComponent style={{marginRight: 5}} badgeContent={tag}/>
                                            </a>
                                        </Link>
                                    ))}
                                </TitleCategoryContent>
                                <Separator/>
                                <TitleCategoryContent
                                    label={"Destacados"}
                                />
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
