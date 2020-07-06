import * as React from "react";
import {DrawerDashboard} from "../Components/DrawerDashboard";
import {Box, Container, CssBaseline} from "@material-ui/core";
import {Copyright} from "../Components/Copyright";
import {makeStyles} from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBarSpacer: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
    },
    container: {
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
    },
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    },
}));

export const TemplateDashboard = ({children}) => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    const handleDrawerOpen = () => {
        setOpen(true);
    };
    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <DrawerDashboard
                handleDrawerClose={handleDrawerClose}
                handleDrawerOpen={handleDrawerOpen}
                open={open}
            />
            <main className={classes.content}>
                <div className={classes.appBarSpacer}/>
                <Container maxWidth="lg" className={classes.container}>
                    {children}
                    <Box pt={4}>
                        <Copyright/>
                    </Box>
                </Container>
            </main>
        </div>
    )
};
