import React from 'react';
import App from 'next/app';
import Head from 'next/head';
import {wrapper} from "../Framework/store/store";

class MyApp extends App {
    static async getInitialProps({Component, ctx}) {
        const pageProps = {
            ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
        };

        return {pageProps}
    }

    componentDidMount() {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }

    render() {
        const {Component, pageProps} = this.props;
        return (
            <>
                <Head>
                    <title>My page</title>
                </Head>
                <Component {...pageProps} />
            </>
        );
    }
}

export default wrapper.withRedux(MyApp)


