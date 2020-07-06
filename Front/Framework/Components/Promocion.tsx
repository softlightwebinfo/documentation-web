import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {IPPromotion} from "../Props/IPPromotion";

const useStyles = makeStyles({
    root: {
        maxWidth: 345,
        height: "100%",
        display: "flex",
        flexDirection: "column",
    },
    media: {
        height: 140,
    },
    content: {
        flex: 1,
    }
});

export const Promocion = ({promotion}: IPPromotion) => {
    const classes = useStyles();
    const [open, setOpen] = useState(false);
    const onclick = () => {
        setOpen(!open);
    };

    return (
        <Card className={classes.root}>
            <CardActionArea  className={classes.content}>
                <CardMedia
                    className={classes.media}
                    image={promotion.image ? `/images/promotions/${promotion.image}` : `/static/images/badImage.png`}
                    title={promotion.title}
                />
                <CardContent>
                    <Typography title={promotion.title} gutterBottom variant="h5" component="h2">
                        {promotion.title.substr(0, 20) + '...'}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        {open ? promotion.description : promotion.description.substr(0, 100) + '...'}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Compartir
                </Button>
                <Button onClick={onclick} size="small" color="primary">
                    Leer Más
                </Button>
            </CardActions>
        </Card>
    );
}
