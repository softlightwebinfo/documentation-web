import {Component} from "react";
import * as React from "react";
import {Directory} from "../Components/Directory";

export class DirectoryContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            [...new Array(30)].map((item, i) => {
                return (
                    <Directory
                        key={i}
                    />
                );
            })
        )
    }
}
