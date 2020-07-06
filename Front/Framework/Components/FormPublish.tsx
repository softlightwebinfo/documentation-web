import {Component} from "react";
import * as React from "react";
import {Form} from "./Form";
import {FormGenerate} from "../libs/Form/FormGenerate";
import {FormInput} from "../libs/Form/Components/FormInput";
import {FormButton} from "../libs/Form/Components/FormButton";
import {FormTextarea} from "../libs/Form/Components/FormTextarea";
import {FormSelect} from "../libs/Form/Components/FormSelect";
import {FormSelectItem} from "../libs/Form/Components/FormSelectItem";
import {Grid} from "@material-ui/core";
import {FormValues} from "../libs/Form/libs/FormValues";
import {Services} from "../libs/Services";
import {IArticlesPublish} from "../Interfaces/IArticlesPublish";
import {Alert} from "@material-ui/lab";
import {CardFile} from "./CardFile";
import {Separator} from "./Separator";
import {Router} from '../../server/routes';

export class FormPublish extends Component<{}, { form: FormValues, files: [], filesPreview: [], maxFiles: number, error: { [p: string]: string } }> {

    public state = {
        form: new FormValues({
            category: "Selecciona una categoria",
            description: "La descripción no puede estar vacia",
            price: "El precio no puede estar vacio",
            subcategory: "Selecciona una subcategoria",
            title: "El titulo no puede estar vacio",
        }),
        error: {},
        files: [],
        filesPreview: [],
        maxFiles: 1,
    };

    constructor(props) {
        super(props);
    }

    onChangeFile = (ev, preview) => {
        this.setState((e: any) => ({
            ...e,
            files: [...e.files, ev],
            filesPreview: [...e.filesPreview, preview],
        }));
    };

    render() {
        //console.log(this.state.form);
        const col = 3;
        return (
            <Grid container spacing={2}>
                <Grid item xs={5}>
                    {Object.values(this.state.error).map((item, index) => (
                        <React.Fragment key={index}>
                            <Alert severity="error">{item}</Alert>
                            <div style={{marginBottom: 5}}/>
                        </React.Fragment>
                    ))}
                    <Form
                        form={this.form()}
                    />
                </Grid>
                <Grid item xs={7}>
                    <Alert severity="warning">Solo puedes subir {this.state.maxFiles} imagen</Alert>
                    <Separator/>
                    <Grid container spacing={2}>
                        {this.state.filesPreview.map((item, index) => (
                            <Grid item xs={col} key={index}>
                                <CardFile
                                    image={item}
                                />
                            </Grid>
                        ))}
                        {this.state.files.length < this.state.maxFiles && (
                            <Grid item xs={col}>
                                <CardFile
                                    plus
                                    onChangeFile={this.onChangeFile}
                                />
                            </Grid>
                        )}
                    </Grid>
                </Grid>
            </Grid>
        );
    }

    private form(): FormGenerate {
        let form = new FormGenerate({
            id: "publishIdForm",
            onSubmit: async (e) => {
                e.preventDefault();
                this.setState({error: {}});
                let validate = this.state.form.Validate();
                if (Object.keys(validate).length) {
                    this.setState({
                        error: validate,
                    });
                    return;
                }
                try {
                    await Services.PublishArticles(this.state.form.ToDataJson() as IArticlesPublish, this.state.files);
                    Router.reload()
                } catch (e) {
                    console.log("Error", e);
                }
            },
            onChange: (e: any, component: any): void => {
                this.state.form.Add(e, component);
                this.setState({
                    form: this.state.form,
                });
            }
        });
        form.add(new FormInput("title", "Titulo").SetAutoFocus(true));
        form.add(new FormTextarea("description", "Descripción"));
        form.add(new FormInput("price", "Precio").setColXs(6));
        form.add(new FormInput("offer", "Descuento").setRequired(false).setColXs(6));
        form.add(new FormSelect("category", "Categoria", [
            new FormSelectItem("Informatica", "1"),
            new FormSelectItem("Carpinteria", "2"),
            new FormSelectItem("Albañileria", "3"),
            new FormSelectItem("Fontaneria", "4"),
        ]).setColXs(6));
        form.add(new FormSelect("subcategory", "Sub Categoria", [
            new FormSelectItem("Informatica", "1"),
            new FormSelectItem("Carpinteria", "2"),
            new FormSelectItem("Albañileria", "3"),
            new FormSelectItem("Fontaneria", "4"),
        ]).setColXs(6));
        //form.add(new FormInput("file", "", "file"));
        form.add(new FormButton("Publicar"));
        return form;
    }
}
