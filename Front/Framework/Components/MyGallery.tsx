import ImageGallery from 'react-image-gallery';
import * as React from "react";
import {Chip} from "@material-ui/core";

const images = [
    {
        original: 'https://picsum.photos/id/1018/1000/600/',
        thumbnail: 'https://picsum.photos/id/1018/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1015/1000/600/',
        thumbnail: 'https://picsum.photos/id/1015/250/150/',
    },
    {
        original: 'https://picsum.photos/id/1019/1000/600/',
        thumbnail: 'https://picsum.photos/id/1019/250/150/',
    },
];

export class MyGallery extends React.Component {
    render() {
        return <ImageGallery
            items={images}
            infinite
            lazyLoad={true}
            showThumbnails={false}
            showFullscreenButton={false}
            showPlayButton={false}
            showBullets={true}
            showIndex={false}
            autoPlay={true}
            renderItem={(data) => {
                return (
                    <div className={"MyGallery__item"}>
                        <div className={"MyGallery__item__content"}>
                            <h2>Titulo del articulo</h2>
                            <p>900 €</p>
                        </div>
                        <div className={"MyGallery__item__right"}>
                            <div>
                                <Chip color="secondary" variant="outlined" size="small" label="Etiqueta"/>
                            </div>
                        </div>
                        <div className={"MyGallery__item__center"}>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                        </div>
                        <img src={data.original} alt=""/>
                    </div>
                )
            }}
        />;
    }
}
