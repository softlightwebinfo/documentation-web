import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Look from '@material-ui/icons/Lock';
import {settingsMenu} from "../../settings";
// @ts-ignore
import {Link} from '../../server/routes';
import {useSelector, useDispatch} from 'react-redux';
import {Logout} from "../store/user";

const useStyles = makeStyles({
    list: {
        width: 250,
    },
    fullList: {
        width: 'auto',
    },
});

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export const DrawerMenu: ({trigger, anchor}: { trigger: any; anchor: Anchor }) => any = ({trigger, anchor}) => {
    const dispatch = useDispatch();
    const {isLogin} = useSelector((state) => state.user);
    const classes = useStyles();
    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
    });

    const toggleDrawer = (anchor: Anchor, open: boolean) => (
        event: React.KeyboardEvent | React.MouseEvent,
    ) => {
        if (
            event.type === 'keydown' &&
            ((event as React.KeyboardEvent).key === 'Tab' ||
                (event as React.KeyboardEvent).key === 'Shift')
        ) {
            return;
        }

        setState({...state, [anchor]: open});
    };

    const cerrarSession = () => {
        dispatch(Logout());
    };

    const list = (anchor: Anchor) => (
        <div
            className={clsx(classes.list, {
                [classes.fullList]: anchor === 'top' || anchor === 'bottom',
            })}
            role="presentation"
            onClick={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {settingsMenu.map((text, index) => {
                    const Icon = text.icon;
                    return (
                        <Link key={index} route={text.route}>
                            <a>
                                <ListItem button>
                                    <ListItemIcon><Icon/></ListItemIcon>
                                    <ListItemText primary={text.name}/>
                                </ListItem>
                            </a>
                        </Link>
                    )
                })}
            </List>
            <Divider/>
            <List>
                {!isLogin && (
                    <>
                        <Link route={"login"}>
                            <a>
                                <ListItem button>
                                    <ListItemIcon><Look/></ListItemIcon>
                                    <ListItemText primary={"Iniciar sesión"}/>
                                </ListItem>
                            </a>
                        </Link>
                        <Link route={"register"}>
                            <a>
                                <ListItem button>
                                    <ListItemIcon><Look/></ListItemIcon>
                                    <ListItemText primary={"Crear cuenta"}/>
                                </ListItem>
                            </a>
                        </Link>
                    </>
                )}
                {isLogin && (
                    <ListItem button onClick={cerrarSession}>
                        <ListItemIcon><Look/></ListItemIcon>
                        <ListItemText primary={"Cerrar sesión"}/>
                    </ListItem>
                )}
            </List>
        </div>
    );
    return (
        <div>
            {(['left', 'right', 'top', 'bottom'] as Anchor[]).map((anch) => {
                if (anchor == anch)
                    return (
                        <React.Fragment key={anchor}>
                            {React.cloneElement(trigger, {
                                onClick: toggleDrawer(anchor, true),
                            })}
                            <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
                                {list(anchor)}
                            </Drawer>
                        </React.Fragment>
                    )
            })}
        </div>
    );
}
