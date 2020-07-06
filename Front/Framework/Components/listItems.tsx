import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import ViewListProducts from '@material-ui/icons/ViewList';
import LocalOffer from '@material-ui/icons/LocalOffer';
import PublishIcon from '@material-ui/icons/Publish';
// @ts-ignore
import {Link} from '../../server/routes';

export const mainListItems = (
    <div>
        <Link route={"dashboard"}>
            <a>
                <ListItem button>
                    <ListItemIcon>
                        <DashboardIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Dashboard"/>
                </ListItem>
            </a>
        </Link>
        <Link route={"dashboardPublish"}>
            <a>
                <ListItem button>
                    <ListItemIcon>
                        <PublishIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Publicar articulo"/>
                </ListItem>
            </a>
        </Link>
        <Link route={"dashboardArticles"}>
            <a>
                <ListItem button>
                    <ListItemIcon>
                        <ViewListProducts/>
                    </ListItemIcon>
                    <ListItemText primary="Productos"/>
                </ListItem>
            </a>
        </Link>
        <Link route={"dashboardPromotions"}>
            <a>
                <ListItem button>
                    <ListItemIcon>
                        <BarChartIcon/>
                    </ListItemIcon>
                    <ListItemText primary="Promociones"/>
                </ListItem>
            </a>
        </Link>
        <Link route={"dashboardOffers"}>
            <a>
                <ListItem button>
                    <ListItemIcon>
                        <LocalOffer/>
                    </ListItemIcon>
                    <ListItemText primary="Ofertas"/>
                </ListItem>
            </a>
        </Link>
        <ListItem button disabled>
            <ListItemIcon>
                <BarChartIcon/>
            </ListItemIcon>
            <ListItemText primary="Presupuestos"/>
        </ListItem>
        <ListItem button disabled>
            <ListItemIcon>
                <ShoppingCartIcon/>
            </ListItemIcon>
            <ListItemText primary="Pedidos"/>
        </ListItem>
        <ListItem button disabled>
            <ListItemIcon>
                <PeopleIcon/>
            </ListItemIcon>
            <ListItemText primary="Clientes"/>
        </ListItem>
    </div>
);

export const secondaryListItems = (
    <div>
        <ListSubheader inset>Reportes Guardados</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon/>
            </ListItemIcon>
            <ListItemText primary="Current month"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon/>
            </ListItemIcon>
            <ListItemText primary="Last quarter"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon/>
            </ListItemIcon>
            <ListItemText primary="Year-end sale"/>
        </ListItem>
    </div>
);
export const settingsListItems = (
    <div>
        <ListSubheader inset>Opciones</ListSubheader>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon/>
            </ListItemIcon>
            <ListItemText primary="Configuración"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon/>
            </ListItemIcon>
            <ListItemText primary="Escaparate"/>
        </ListItem>
        <ListItem button>
            <ListItemIcon>
                <AssignmentIcon/>
            </ListItemIcon>
            <ListItemText primary="Cerrar sesión"/>
        </ListItem>
    </div>
);
