import * as React from "react";
import {Template} from "../Framework/Components/Template";
import {ButtonComponent, ContainerComponent, DialogActionsComponent, DialogComponent, DialogContentComponent, DialogTitleComponent, DialogContentTextComponent, EditorComponent, TextFieldComponent} from "@codeunic/library-ui/build";
import {Component} from "react";
import {connect} from 'react-redux';
import {ActionSnippetCreate} from "../Framework/store/snippets";
// @ts-ignore
import {Router} from '../server/routes';
import {parseCookies} from "nookies";
import {END} from "redux-saga";

class Index extends Component<{
    dispatch: any;
}> {
    static async getInitialProps(ctx) {
        const cookies = parseCookies(ctx);
        if (ctx.req) {
            ctx.store.dispatch(END);
            await ctx.store.sagaTask.toPromise();
        }
        const login = !!cookies.auth || false
        if (!login) {
            ctx.res.redirect("/");
        }
        return {
            login,
            tag: ctx.query.tag
        }
    }

    state = {
        openModalSave: false,
        description: "",
        title: "",
        tags: [],
        editor: null,
    };

    constructor(props) {
        super(props);
    }

    handleClose = () => {
        this.setState({
            openModalSave: false,
        })
    };

    save = () => {
        let tags = this.state.tags.map(e => e.trim());
        let title = this.state.title;
        let description = this.state.description;
        let editorData = this.state.editor.data;
        const data = {
            title,
            description,
            tags,
            content: editorData,
        };
        if (!title.length) {
            return alert("Escribe un titulo");
        }
        if (!description.length) {
            return alert("Escribe una descripción corta")
        }
        // @ts-ignore
        this.props.dispatch(ActionSnippetCreate(data));
        Router.pushRoute("/snippets")
    };

    render() {
        return (
            <Template
                title={"Crear nuevo snippet"}
            >
                <ContainerComponent fixed maxWidth={false}>
                    <EditorComponent
                        isEditor={true}
                        onSave={(e) => {
                            this.setState({
                                editor: e,
                                openModalSave: true,
                            })
                        }}
                        data={[]}
                    />
                </ContainerComponent>
                <DialogComponent open={this.state.openModalSave} onClose={this.handleClose} portal={true}>
                    <DialogTitleComponent>Crear Blog</DialogTitleComponent>
                    <DialogContentComponent>
                        <DialogContentTextComponent>
                            Publica tu blog para mostrarlo en la pagina principal
                        </DialogContentTextComponent>
                        <TextFieldComponent placeholder={"Titulo del blog"} id={"eedit"} value={this.state.title} onChange={(e) => this.setState({title: e.target.value})}/>
                        <textarea value={this.state.description} onChange={e => this.setState({description: e.target.value})} placeholder={"Descripción corta"} style={{marginTop: 20, height: "auto"}} name="descripcion" cols={30} rows={5} className={"InputField-component__input"}/>
                        <TextFieldComponent id={"tags"} style={{marginTop: 20}} placeholder={"Tags"} value={this.state.tags.join(',')} onChange={(e) => {
                            this.setState({
                                tags: e.target.value.split(",")
                            })
                        }}/>
                    </DialogContentComponent>
                    <DialogActionsComponent>
                        <ButtonComponent
                            variant={"color"}
                            onClick={this.handleClose}
                            theme="primary">
                            Cancel
                        </ButtonComponent>
                        <ButtonComponent
                            variant={"color"}
                            onClick={() => {
                                this.save();
                            }}
                            theme="primary"
                        >
                            Save
                        </ButtonComponent>
                    </DialogActionsComponent>
                </DialogComponent>
            </Template>
        );
    }
}

export default connect(state => state)(Index);
