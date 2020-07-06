import React, {Fragment} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import {makeStyles} from "@material-ui/core/styles";
import {Link as Href} from '../../server/routes';
import {IPRegister} from "../Props/IPRegister";
import Alert from '@material-ui/lab/Alert';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: '100vh',
    },
    image: {
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundRepeat: 'no-repeat',
        backgroundColor:
            theme.palette.type === 'light' ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: 'cover',
        backgroundPosition: 'center',
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


export default function Register({onChange, onSubmit, errors = []}: IPRegister) {
    const classes = useStyles();
    return (
        <>
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography component="h1" variant="h5">
                    Crea tu nueva cuenta
                </Typography>
                <form onSubmit={onSubmit} className={classes.form} noValidate>
                    {errors.map((item, index) => (
                        <Fragment key={index}>
                            <Alert severity="error">{item}</Alert>
                            <div style={{marginBottom: 5}}/>
                        </Fragment>
                    ))}
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                onChange={onChange}
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                label="Nombre"
                                autoFocus
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                onChange={onChange}
                                variant="outlined"
                                required
                                fullWidth
                                label="Apellidos"
                                name="lastName"
                                autoComplete="lname"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                onChange={onChange}
                                variant="outlined"
                                required
                                fullWidth
                                label="Correo electronico"
                                name="email"
                                type="email"
                                autoComplete="email"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                onChange={onChange}
                                variant="outlined"
                                required
                                fullWidth
                                label="Telefono"
                                name="phone"
                                type="tel"
                                autoComplete="phone"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                onChange={onChange}
                                variant="outlined"
                                required
                                fullWidth
                                name="password"
                                label="Contraseña"
                                type="password"
                                autoComplete="current-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                onChange={onChange}
                                variant="outlined"
                                required
                                fullWidth
                                name="rpassword"
                                label="Repetir Contraseña"
                                type="password"
                                autoComplete="repeat-password"
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value="allowExtraEmails" color="primary"/>}
                                label="Quiero recibir inspiración, promociones de marketing y actualizaciones por correo electrónico."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Crear cuenta
                    </Button>
                    <Grid container justify="flex-end">
                        <Grid item>
                            <Href route={"login"}>
                                <Link href="#" variant="body2">
                                    ¿Ya tienes una cuenta? Inicia sesión
                                </Link>
                            </Href>
                        </Grid>
                    </Grid>
                </form>
            </div>
            <Box mt={5}>
                <Copyright/>
            </Box>
        </>
    );
}
