import * as React from "react";
import {Component} from "react";
import {connect} from 'react-redux';
import {END} from "redux-saga";
// @ts-ignore
import {Link} from '../server/routes';
import {parseCookies} from "nookies";
import {TemplateDashboard} from "../Framework/Components/TemplateDashboard";
import {CardComponent, CardContentComponent, TypographyComponent} from "@codeunic/library-ui/build";

class Index extends Component<{
    login: boolean;
}> {
    static async getInitialProps(ctx) {
        const cookies = parseCookies(ctx);
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

    constructor(props) {
        super(props);
    }


    render() {
        return (
            <TemplateDashboard
                title={"Listado de blogs"}
            >
                <CardComponent>
                    <CardContentComponent>
                        <TypographyComponent component={"h1"} variant={"h1"} align={"center"}>
                            Panel de desarrollo
                        </TypographyComponent>
                    </CardContentComponent>
                </CardComponent>
            </TemplateDashboard>
        );
    }
}

export default connect(state => ({
    blogs: state.blog.blogs || [],
    tags: state.blog.tags || []
}))(Index)
