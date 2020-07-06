import {Component} from "react";
import Register from "../Components/Register";
import * as React from "react";
import {ISRegisterContainer} from "../states/ISRegisterContainer";
import {Form} from "../libs/Form";
import {connect} from 'react-redux';
import {IPRegisterContainer} from "../Props/IPRegisterContainer";
import {ActionUserRegister} from "../store/user";
import {IAuthRegister} from "../Interfaces/IAuth";
// @ts-ignore
import {Router} from "../../server/routes";

@connect(state => ({isLogin: state.user.isLogin, error: state.user.error}))
export class RegisterContainer extends Component<IPRegisterContainer, ISRegisterContainer> {
    public state: ISRegisterContainer = {
        form: new Form({
            firstName: "El nombre no puede estar vacio",
            lastName: "Los apellidos no pueden estar vacios",
            email: "El email no es valido",
            phone: "El telefono no es valido",
            password: "La contraseña no puede estar vacia",
            rpassword: "La confirmación de contraseña no puede estar vacia",
            common: "Los campos no pueden estar vacios",
            confirmPassword: "Las contraseñas no son iguales"
        }, {
            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            password: "",
            rpassword: "",
        }),
        error: [],
        lastError: "",
        isSend: false
    };

    constructor(props) {
        super(props);
    }

    onChange = (e) => {
        this.state.form.add(e.target.name, e.target.value, e.target.type);
        this.setState({
            form: this.state.form,
        });
    };


    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.error != prevState.lastError && prevState.isSend) {
            let error = [];
            error = [
                ...prevState.error,
                nextProps.error
            ];
            return {
                error: error,
                lastError: nextProps.error,
            };
        }
        return {};
    }

    componentDidUpdate(nextProps) {
        if (this.props.isLogin && !nextProps.isLogin) {
            Router.pushRoute("dashboard");
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.setState({isSend: false, error: [], lastError: ""});
        if (!this.state.form.validatePasswords()) {
            this.setState({
                error: [this.state.form.getErrorText("confirmPassword")],
            });
            return;
        }

        if (!this.state.form.validate()) {
            this.setState({
                error: this.state.form.getErrors()
            });
            return;
        }
        this.setState({isSend: true});
        let result = this.state.form.getFields();
        let user: IAuthRegister = result as IAuthRegister;
        user.name = `${result['firstName']} ${result['lastName']}`;
        this.props.dispatch(ActionUserRegister(user));
    };

    render() {
        return (
            <Register
                errors={this.state.error}
                onSubmit={this.onSubmit}
                onChange={this.onChange}
            />
        );
    }
}
