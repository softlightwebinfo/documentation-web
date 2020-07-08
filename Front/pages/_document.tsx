/* eslint-disable react/no-danger, import/no-unresolved */
import React from 'react';
import Document, {Head, Main, NextScript} from 'next/document';
import {IDocument} from "../Framework/Props/Document";

export default class MyDocument extends Document<IDocument> {
    render() {
        return (
            <html lang="en">
            <Head>
                <meta charSet="utf-8"/>
                <meta
                    name="viewport"
                    content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no"
                />
                <link
                    rel="stylesheet"
                    href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
                />
                <link href="/static/css/index.css" rel="stylesheet"/>
            </Head>
            <body>
            <Main/>
            <NextScript/>
            </body>
            </html>
        )
    }
}
