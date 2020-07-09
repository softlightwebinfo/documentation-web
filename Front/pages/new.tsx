import * as React from "react";
import {Template} from "../Framework/Components/Template";
import {ButtonComponent, ContainerComponent, DialogActionsComponent, DialogComponent, DialogContentComponent, DialogTitleComponent, DialogContentTextComponent, EditorComponent, EditorData, EditorDataEnum, EditorDataImage, TextFieldComponent} from "@codeunic/library-ui/build";
import {Component} from "react";
import {connect} from 'react-redux';
import {ActionBlogCreate} from "../Framework/store/blog";

class Index extends Component<{
    dispatch: any;
}> {
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
        this.props.dispatch(ActionBlogCreate(data));
    };

    render() {
        return (
            <Template
                title={"Crear nueva pagina"}
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
                        data={[
                            new EditorData(EditorDataEnum.HEADER, {
                                text: "Editor.js",
                                level: 2,
                            }),
                            new EditorData(EditorDataEnum.PARAGRAPH, {
                                text: "Hey. Meet the new Editor. On this page you can see it in action — try to edit this text."
                            }),
                            new EditorData(EditorDataEnum.HEADER, {
                                text: "Key features",
                                level: 3
                            }),
                            new EditorData(EditorDataEnum.LIST, {
                                style: "unordered",
                                items: [
                                    "It is a block-styled editor",
                                    "It returns clean data output in JSON",
                                    "Designed to be extendable and pluggable with a simple API"
                                ],
                            }),
                            new EditorData(EditorDataEnum.HEADER, {
                                text: "What does it mean «block-styled editor»",
                                level: 3
                            }),
                            new EditorData(EditorDataEnum.PARAGRAPH, {
                                text: 'Workspace in classic editors is made of a single contenteditable element, used to create different HTML markups. Editor.js <mark class="ce-Marker">workspace consists of separate Blocks: paragraphs, headings, images, lists, quotes, etc</mark>. Each of them is an independent contenteditable element (or more complex structure) provided by Plugin and united by Editor\'s Core.'
                            }),
                            new EditorData(EditorDataEnum.PARAGRAPH, {
                                text: 'There are dozens of <a href="https://github.com/editor-js">ready-to-use Blocks</a> and the <a href="https://editorjs.io/creating-a-block-tool">simple API</a> for creation any Block you need. For example, you can implement Blocks for Tweets, Instagram posts, surveys and polls, CTA-buttons and even games.'
                            }),
                            new EditorData(EditorDataEnum.LINK, {
                                text: "https://github.com/softlightwebinfo/codeunic-library-sass-react-ts",
                                level: 2,
                            }),
                            new EditorData(EditorDataEnum.HEADER, {
                                text: "What does it mean clean data output",
                                level: 3
                            }),
                            new EditorData(EditorDataEnum.PARAGRAPH, {
                                text: "Classic WYSIWYG-editors produce raw HTML-markup with both content data and content appearance. On the contrary, Editor.js outputs JSON object with data of each Block. You can see an example below"
                            }),
                            new EditorData(EditorDataEnum.PARAGRAPH, {
                                text: 'Given data can be used as you want: render with HTML for <code class="ce-InlineCode">Web clients</code>, render natively for <code class="ce-InlineCode">mobile apps</code>, create markup for <code class="ce-InlineCode">Facebook Instant Articles</code> or <code class="ce-InlineCode">Google AMP</code>, generate an <code class="ce-InlineCode">audio version</code> and so on.'
                            }),
                            new EditorData(EditorDataEnum.PARAGRAPH, {
                                text: "Clean data is useful to sanitize, validate and process on the backend."
                            }),
                            new EditorData(EditorDataEnum.DELIMITER, {}),
                            new EditorData(EditorDataEnum.PARAGRAPH, {
                                text: "We have been working on this project more than three years. Several large media projects help us to test and debug the Editor, to make it's core more stable. At the same time we significantly improved the API. Now, it can be used to create any plugin for any task. Hope you enjoy. 😏"
                            }),
                            new EditorData(EditorDataEnum.IMAGE, new EditorDataImage("https://www.gettyimages.pt/gi-resources/images/Homepage/Hero/PT/PT_hero_42_153645159.jpg"))
                        ]}
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
