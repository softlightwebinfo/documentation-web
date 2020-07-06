import {Component} from "react";
import * as React from "react";
import {Grid} from "@material-ui/core";
import {CategoryItem} from "../Components/CategoryItem";

export class CategoriasListContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid container spacing={0}>
                {
                    [...new Array(48)].map((item,i) => {
                        return (
                            <Grid key={i} item xs={2}>
                                <CategoryItem

                                />
                            </Grid>
                        );
                    })
                }
            </Grid>
        )
    }
}
