import {Button, Container, Grid, Typography} from "@material-ui/core";
import * as React from "react";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    icon: {
        marginRight: theme.spacing(2),
    },
    heroContent: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
    card: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    footer: {
        backgroundColor: theme.palette.background.paper,
        padding: theme.spacing(6),
    },
}));

export interface IPMessageError {
    title: string;
    error: string;
    buttons?: {
        variant: "contained" | "outlined";
        label: string;
        color: string | "primary";
        onClick: () => void;
    }[]
}

export const MessageError: ({title, error, buttons}: IPMessageError) => any = ({title, error, buttons = []}: IPMessageError) => {
    const classes = useStyles();

    return (
        <div className={classes.heroContent}>
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
                {title}
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                {error}
            </Typography>
            <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                    {buttons.map((item, index) => (
                        <Grid item key={index}>
                            <Button onClick={item.onClick} variant={item.variant} color={item.color}>
                                {item.label}
                            </Button>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </div>
    );
}
