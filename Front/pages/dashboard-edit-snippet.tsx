import * as React from "react";
import {Component} from "react";
import {connect} from 'react-redux';
import {END} from "redux-saga";
// @ts-ignore
import {Router, Link} from '../server/routes';
import {parseCookies} from "nookies";
import {TemplateDashboard} from "../Framework/Components/TemplateDashboard";
import {ActionSnippetListItem, ActionSnippetUpdate} from "../Framework/store/snippets";
import {ButtonComponent, ContainerComponent, DialogActionsComponent, DialogComponent, DialogContentComponent, DialogContentTextComponent, DialogTitleComponent, EditorComponent, TextFieldComponent} from "@codeunic/library-ui/build";

class Index extends Component<{
    login: boolean;
    blog: any;
    dispatch: any;
}> {
    static async getInitialProps(ctx) {
        const cookies = parseCookies(ctx);
        ctx.store.dispatch(ActionSnippetListItem(ctx.query.id));

        if (ctx.req) {
            ctx.store.dispatch(END);
            await ctx.store.sagaTask.toPromise();
        }
        const login = !!cookies.auth || false;
        if (!login) {
            ctx.res.redirect("/");
            return {};
        }
        return {
            login,
            tag: ctx.query.tag
        }
    }

    state = {
        openModalSave: false,
        description: this.props.blog.description || "",
        title: this.props.blog.title || "",
        tags: this.props.blog.tags || [],
        editor: null,
        content: this.props.blog.content || [],
        id: null,
    };
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
        this.props.dispatch(ActionSnippetUpdate(data, this.props.blog._id));
        Router.pushRoute("dashboard");
    };


    constructor(props) {
        super(props);
    }

    componentDidUpdate(prevProps): void {
        if (this.props.blog._id != prevProps.blog._id) {
            this.setState({
                title: this.props.blog.title,
                description: this.props.blog.description,
                tags: this.props.blog.tags,
                content: this.props.blog.content,
                id: this.props.blog._id
            });
        }
    }

    render() {
        return (
            <TemplateDashboard
                title={"Listado de snippets"}
            >
                <ContainerComponent fixed maxWidth={false}>
                    <EditorComponent
                        key={this.state.id}
                        isEditor={true}
                        onSave={(e) => {
                            this.setState({
                                editor: e,
                                openModalSave: true,
                            })
                        }}
                        data={this.state.content || []}
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
            </TemplateDashboard>
        );
    }
}

export default connect(state => ({
    blog: state.snippets.blog || {},
    blogs: state.snippets.blogs || [],
    tags: state.snippets.tags || []
}))(Index)
