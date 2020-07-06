import {PureComponent} from "react";
import * as React from "react";
import {Avatar, Button, Card, CardActions, CardContent, CardHeader, IconButton, Typography} from "@material-ui/core";
import MoreVertIcon from '@material-ui/icons/MoreVert';
import {CardPro} from "./CardPro";
import StarIcon from '@material-ui/icons/Star';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import PublishIcon from '@material-ui/icons/Publish';

export class Directory extends PureComponent {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Card className={"Directory"}>
                <CardHeader
                    avatar={
                        <CardPro
                            title={"Profesional"}
                            image={"https://assets.entrepreneur.com/content/3x2/2000/20190312212557-tarjeta-presentacion.jpeg"}
                        />
                    }
                    action={
                        <IconButton aria-label="settings">
                            <MoreVertIcon/>
                        </IconButton>
                    }
                    title="Shrimp and Chorizo Paella"
                    subheader={(
                        <>
                            <div>Profesional inmobiliario</div>
                            <div>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                                <StarIcon/>
                            </div>
                        </>
                    )}
                />
                <CardContent style={{paddingTop: 0, paddingBottom: 0}}>
                    <Typography variant="body2" component="p">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five
                        centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including
                        versions of Lorem Ipsum.
                    </Typography>
                </CardContent>
                <CardActions disableSpacing>
                    <IconButton aria-label="add to favorites">
                        <FavoriteIcon/>
                    </IconButton>
                    <IconButton aria-label="share">
                        <ShareIcon/>
                    </IconButton>
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<PublishIcon/>}
                        size="small"
                        style={{marginLeft: 20}}
                    >
                        Pedir Presupuesto
                    </Button>
                    <Button
                        size="small"
                        style={{marginLeft: 20}}
                        variant="contained"
                        color="secondary"
                        startIcon={<PublishIcon/>}
                    >
                        Contactar
                    </Button>
                </CardActions>
            </Card>
        );
    }
}
