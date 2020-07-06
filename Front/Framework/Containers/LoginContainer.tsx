import * as React from "react";
import {Component} from "react";
import {ISLoginContainer} from "../states/ISLoginContainer";
import {Form} from "../libs/Form";
import {connect} from 'react-redux';
import {IPLoginContainer} from "../Props/IPLoginContainer";
import {ActionUserLogin} from "../store/user";
import {IAuthLogin} from "../Interfaces/IAuth";
import {Login} from "../Components/Login";
import {Router} from "../../server/routes";

@connect(state => ({isLogin: state.user.isLogin, error: state.user.error}))
export class LoginContainer extends Component<IPLoginContainer, ISLoginContainer> {
    public state: ISLoginContainer = {
        form: new Form({
            email: "El email no es valido",
            password: "La contraseña no es valida",
            common: "Los campos no pueden estar vacios"
        }, {
            email: "",
            password: "",
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
        if (!this.state.form.validate()) {
            this.setState({
                error: this.state.form.getErrors()
            });
            return;
        }
        this.setState({isSend: true});
        let result = this.state.form.getFields();
        let user: IAuthLogin = result as IAuthLogin;
        this.props.dispatch(ActionUserLogin(user));
    };

    render() {
        return (
            <Login
                //errors={this.state.error}
                onSubmit={this.onSubmit}
                onChange={this.onChange}
            />
        );
    }
}
