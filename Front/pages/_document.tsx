/* eslint-disable react/no-danger, import/no-unresolved */
import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import {IDocument} from "../Framework/Props/Document";

export default class MyDocument extends Document<IDocument> {
    render() {
        return (
            <html lang="en">
            <Head>
                <meta charSet="utf-8" />
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
                <link href="/static/css/index.css" rel="stylesheet" />
            </Head>
            <body>
            <Main />
            <NextScript />
            </body>
            </html>
        )
    }
}
MyDocument.getInitialProps = async ctx => {
    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    // Render app and page and get the context of the page with collected side effects.
    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
    };
};
