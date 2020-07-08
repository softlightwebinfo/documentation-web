import * as React from "react";
import {Template} from "../Framework/Components/Template";
import {ContainerComponent, GridComponent} from "@codeunic/library-ui/build";
import {TitleCategoryContent} from "../Framework/Components/TitleCategoryContent";
import {Separator} from "../Framework/Components/Separator";
import {Component} from "react";
import {connect} from 'react-redux';
import {END} from "redux-saga";
import {ActionBlogList} from "../Framework/store/blog";
import {CardBlog} from "../Framework/Components/CardBlog";
import moment from 'moment';

class Index extends Component<{
    blogs: any[];
}> {
    static async getInitialProps(ctx) {
        ctx.store.dispatch(ActionBlogList());
        ctx.store.dispatch(END);
        await ctx.store.sagaTask.toPromise();
        return {}
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
                                    <GridComponent key={blog._id} item xs={12} sm={12} md={4} xl={3}>
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
                                />
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

export default connect(state => ({blogs: state.blog.blogs || []}))(Index)
