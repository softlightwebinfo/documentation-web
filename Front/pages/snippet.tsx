import * as React from "react";
import {Template} from "../Framework/Components/Template";
import {ContainerComponent, EditorComponent} from "@codeunic/library-ui/build";
import {Component} from "react";
import {connect} from 'react-redux';
import {END} from "redux-saga";
import {ActionSnippetListItem} from "../Framework/store/snippets";

class Index extends Component<{
    blog: any;
}> {
    static async getInitialProps(ctx) {
        const data = ctx.store.getState();

        if (data.snippets.blogs.length) {
            const blog = data.snippets.blogs.find(i => i._id == ctx.query.id);
            if (blog) return {
                blog,
            };
        }
        ctx.store.dispatch(ActionSnippetListItem(ctx.query.id));
        ctx.store.dispatch(END);
        await ctx.store.sagaTask.toPromise();
        const blog = ctx.store.getState().snippets.blog;
        if (!blog) {
            console.error("El blog no se encuentra");
        }
        return {
            blog,
        }

    }

    state = {};

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Template
                title={this.props.blog.title}
            >
                <ContainerComponent fixed maxWidth={false}>
                    <EditorComponent
                        data={this.props.blog.content}
                    />
                </ContainerComponent>
            </Template>
        );
    }
}

export default connect(() => ({}))(Index);
