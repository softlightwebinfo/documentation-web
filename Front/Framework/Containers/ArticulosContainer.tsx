import {Component} from "react";
import CardCategory from "../Components/CardCategory";
import * as React from "react";
import {Grid} from "@material-ui/core";
import {Article} from "../Components/Article";

export class ArticulosContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Grid container spacing={1}>
                {
                    [...new Array(16)].map((item, i) => {
                        return (
                            <Grid key={i} item xs={3}>
                                <Article
                                    article={{
                                        id: "",
                                        title: "",
                                        description: "",
                                        image: "",
                                        offer: "",
                                        price: "",
                                        updatedAt: "",
                                    }}
                                />
                            </Grid>
                        );
                    })
                }
            </Grid>
        )
    }
}
