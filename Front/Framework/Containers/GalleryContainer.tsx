import {Component} from "react"
import {Gallery} from "../Components/Gallery";
import * as React from "react";

export class GalleryContainer extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Gallery
                tileData={[...new Array(100)].map((_, i) => ({
                    key: i,
                    featured: i % 5 == 0,
                    title: `Titulo numero ${i}`,
                    title2: `Titulo numero 2 ${i}`,
                    author: "Defcon Inca",
                    img: "https://material-ui.com/static/images/grid-list/vegetables.jpg"
                }))}
            />
        );
    }
}
