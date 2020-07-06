import * as React from "react";
import {Component} from "react";
import {IForm} from "../Props/IForm";
import {FormInput} from "../libs/Form/Components/FormInput";
import {FormButton} from "../libs/Form/Components/FormButton";
import {TextField, Button, Grid, Select, MenuItem} from "@material-ui/core";
import {FormTextarea} from "../libs/Form/Components/FormTextarea";
import {FormSelect} from "../libs/Form/Components/FormSelect";
import {FormChange} from "../libs/Form/libs/FormChange";
import {FormDatePicker} from "../libs/Form/Components/FormDatePicker";

export class Form extends Component<IForm> {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <form
                id={this.props.form.attr.id}
                onSubmit={this.props.form.attr.onSubmit}
                noValidate
            >
                <Grid container spacing={2}>
                    {this.generate()}
                </Grid>
            </form>
        );
    }

    componentDidMount(): void {
        this.props.form.GetComponents().forEach((component, index) => {
            if (component.constructor.name == FormButton.name) return;
            let obj = new FormChange(component.name, "", "");
            this.props.form.attr.onChange(obj, component);
            // @ts-ignore
            component.onChange && component.onChange(obj, component);
        });
    }

    private generate() {
        return this.props.form.GetComponents().map((component, index) => {
            switch (component.constructor.name) {
                case FormInput.name: {
                    const input: FormInput = component as FormInput;
                    return (
                        <Grid item xs={input.col_xs} key={index}>
                            <TextField
                                onChange={e => this.onChange(e, component)}
                                autoComplete="fname"
                                name={input.name}
                                variant="outlined"
                                required={input.required}
                                fullWidth
                                label={input.title}
                                autoFocus={input.autoFocus}
                                placeholder={input.title}
                                type={input.type}
                            />
                        </Grid>
                    );
                }
                case FormTextarea.name: {
                    const textarea: FormTextarea = component as FormTextarea;
                    return (
                        <Grid item xs={textarea.col_xs} key={index}>
                            <TextField
                                onChange={e => this.onChange(e, component)}
                                placeholder={textarea.title}
                                name={textarea.name}
                                multiline
                                variant="outlined"
                                rows={textarea.rows}
                                required={textarea.required}
                                fullWidth
                                label={textarea.title}
                                autoFocus={textarea.autoFocus}
                                rowsMax={textarea.rowsMax}
                            />
                        </Grid>
                    );
                }
                case FormSelect.name: {
                    const select: FormSelect = component as FormSelect;
                    return (
                        <Grid item xs={select.col_xs} key={index}>
                            <Select
                                variant="outlined"
                                value={select.value}
                                fullWidth
                                name={select.name}
                                required={select.required}
                                label={select.title}
                                autoFocus={select.autoFocus}
                                placeholder={select.title}
                                onChange={e => this.onChange(e, component)}
                                displayEmpty
                            >
                                <MenuItem value="" disabled>
                                    {select.title}
                                </MenuItem>
                                {select.items.map((item) => (
                                    <MenuItem key={item.value} value={item.value}>{item.title}</MenuItem>
                                ))}
                            </Select>
                        </Grid>
                    )
                }
                case FormDatePicker.name: {
                    const field: FormDatePicker = component as FormDatePicker;

                    return (
                        <Grid item xs={field.col_xs} key={index}>
                            <TextField
                                id="datetime-local"
                                label={field.title}
                                name={field.name}
                                type={field.type}
                                variant="outlined"
                                fullWidth
                                autoFocus={field.autoFocus}
                                required={field.required}
                                defaultValue={field.defaultValue}
                                onChange={e => this.onChange(e, component)}
                                InputLabelProps={{
                                    shrink: true,
                                }}
                            />
                        </Grid>
                    )
                }
                case FormButton.name: {
                    const button: FormButton = component as FormButton;
                    return (
                        <Grid item xs={button.col_xs} key={index}>
                            <Button
                                type={button.type}
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                {button.label}
                            </Button>
                        </Grid>
                    );
                }
            }
        });
    }

    private onChange(e, component) {
        let obj = new FormChange(e.target.name, e.target.value, e.target.type);
        this.props.form.attr.onChange(obj, component);
        component.onChange && component.onChange(obj, component);
    }
}
