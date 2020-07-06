import React from 'react';
import {makeStyles, Theme, createStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import {red} from '@material-ui/core/colors';
import {IPCardFile} from "../Props/IPCardFile";
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            maxWidth: 345,
            flex: 1,
            height: '100%',
            minHeight: 86,
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
        expandOpen: {
            transform: 'rotate(180deg)',
        },
        avatar: {
            backgroundColor: red[500],
        },
    }),
);

export function CardFile(props: IPCardFile) {
    const classes = useStyles();

    const onChange = (event) => {
        let files = event.target.files;
        let reader = new FileReader();
        reader.onloadend = () => {
            props.onChangeFile && props.onChangeFile(files[0], reader.result);
        };
        reader.readAsDataURL(event.target.files[0])
    };
    return (
        <Card className={classes.root}>
            {props.plus ? (
                <label title={"Selecciona una imagen"} className={"PlusButton"}>
                    <AddIcon/>
                    <input type="file" name="file" onChange={onChange}/>
                </label>
            ) : (
                <CardMedia
                    className={classes.media}
                    image={props.image}
                />
            )}
        </Card>
    );
}
