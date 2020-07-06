import {Component} from "react";
import * as React from "react";
import {Grid} from "@material-ui/core";
import {Projecto} from "../Components/Projecto";

export class ProjectosListContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid container spacing={1}>
                {
                    [...new Array(16)].map((_, i) => {
                        return (
                            <Grid key={i} item xs={3}>
                                <Projecto

                                />
                            </Grid>
                        );
                    })
                }
            </Grid>
        )
    }
}
