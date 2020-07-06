import React from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ViewDetailIcon from '@material-ui/icons/Visibility';
import {IPArticle} from "../Props/IPArticle";
import moment from "moment";

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: 'flex',
            flexDirection: 'column',
            flex: 1,
            height: "100%",
        },
        media: {
            height: 0,
            paddingTop: '56.25%', // 16:9
        },
        expand: {
            transform: 'rotate(0deg)',
            marginLeft: 'auto',
            transition: theme.transitions.create('transform', {
                duration: theme.transitions.duration.shortest,
            }),
        },
        content: {
            flex: 1,
        },
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: red[500],
        },
    }),
);

export const Article = ({article, isAdmin, admin}: IPArticle) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    const getActions = () => (
        <>
            <IconButton aria-label="add to favorites">
                <FavoriteIcon/>
            </IconButton>
            <IconButton aria-label="share">
                <ShareIcon/>
            </IconButton>
        </>
    );
    const getActionsAdmin = () => (
        <>
            <IconButton onClick={admin.onDelete} aria-label="Eliminar" title={"ELiminar"}>
                <DeleteIcon/>
            </IconButton>
            <IconButton onClick={admin.onEdit} aria-label="Editar" title={"Editar"}>
                <EditIcon/>
            </IconButton>
            <IconButton onClick={admin.onVisualize} aria-label="Visualizar Detalle" title={"Visualizar Detalle"}>
                <ViewDetailIcon/>
            </IconButton>
        </>
    );
    return (
        <Card className={classes.root}>
            <CardHeader
                avatar={
                    <Avatar aria-label="recipe" className={classes.avatar}>
                        R
                    </Avatar>
                }
                action={
                    <IconButton aria-label="settings">
                        <MoreVertIcon/>
                    </IconButton>
                }
                title={article.title.substr(0, 20) + '...'}
                subheader={moment(article.updatedAt).format("DD/MM/YYYY HH:mm:ss")}
            />
            <CardMedia
                className={classes.media}
                image={article.image ? `/images/resized/${article.image}` : "/static/images/badImage.png"}
                title="Paella dish"
            />
            <CardContent className={classes.content}>
                <Typography variant="body2" color="textSecondary" component="p">
                    {expanded ? article.description : article.description.substr(0, 100) + '...'}
                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                {isAdmin ? getActionsAdmin() : getActions()}

                <IconButton
                    className={clsx(classes.expand, {
                        [classes.expandOpen]: expanded,
                    })}
                    onClick={handleExpandClick}
                    aria-expanded={expanded}
                    aria-label="show more"
                >
                    <ExpandMoreIcon/>
                </IconButton>
            </CardActions>
        </Card>
    );
}
