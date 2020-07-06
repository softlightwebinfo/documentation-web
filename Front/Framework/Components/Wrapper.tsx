import * as React from "react";
import {Header} from "./Header";
import {Footer} from "./Footer";

export const Wrapper: ({children}: any) => any = ({children}: any): any => (
    <div>
        <Header/>
        <div style={{height: 60}}/>
        {children}
        <Footer/>
    </div>
);
