import * as React from "react";
import {Component} from "react";
import {connect} from 'react-redux';
import {END} from "redux-saga";
// @ts-ignore
import {Router, Link} from '../server/routes';
import {parseCookies} from "nookies";
import {TemplateDashboard} from "../Framework/Components/TemplateDashboard";
import {ButtonComponent, GridComponent} from "@codeunic/library-ui/build";
import {ActionBlogList, ActionBlogDelete} from "../Framework/store/blog";
import {CardBlog} from "../Framework/Components/CardBlog";
import moment from "moment";

class Index extends Component<{
    login: boolean;
    dispatch: any;
    blogs: any[];
}> {
    static async getInitialProps(ctx) {
        const cookies = parseCookies(ctx);
        ctx.store.dispatch(ActionBlogList());

        if (ctx.req) {
            ctx.store.dispatch(END);
            await ctx.store.sagaTask.toPromise();
        }
        const login = !!cookies.auth || false;
        if (!login) {
            ctx.res.redirect("/");
        }
        return {
            login,
            tag: ctx.query.tag
        }
    }

    delete = (id) => {
        if (confirm("Estas seguro de eliminar la pagina?")) {
            this.props.dispatch(ActionBlogDelete(id));
        }
    };
    edit = (id) => {
        Router.pushRoute("dashboard-edit", {id})
    };

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <TemplateDashboard
                title={"Listado de blogs"}
            >
                <GridComponent container spacing={2}>
                    {this.props.blogs.map((blog) => (
                        <GridComponent key={blog._id} item xs={12} sm={12} md={4} xl={3} className={"CardBlogParent"}>
                            <CardBlog
                                actions={[
                                    <ButtonComponent key={1} onClick={() => this.edit(blog._id)}>Editar</ButtonComponent>,
                                    <ButtonComponent key={2} onClick={() => this.delete(blog._id)}>Eliminar</ButtonComponent>
                                ]}
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

            </TemplateDashboard>
        );
    }
}

export default connect(state => ({
    blogs: state.blog.blogs || [],
    tags: state.blog.tags || []
}))(Index)
