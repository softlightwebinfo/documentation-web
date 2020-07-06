import * as React from "react";
import {Article} from "../Components/Article";
import {IPArticleContainer} from "../Props/IPArticleContainer";
import {ConfirmationDialogRaw} from "../Components/DialogConfirm";
import {useState} from "react";
import {Services} from "../libs/Services";

export const ArticleContainer = ({article, onDelete}: IPArticleContainer) => {
    const [open, setOpen] = useState(false);
    return (
        <>
            <Article
                article={article}
                isAdmin
                admin={{
                    onEdit: () => console.log("On edit"),
                    onDelete: () => {
                        setOpen(true);
                    },
                    onVisualize: () => {
                        console.log("On Visualize")
                    }
                }}
            />
            <ConfirmationDialogRaw
                id={article.id}
                classes={{paper: ""}}
                keepMounted={true}
                onClose={async (e) => {
                    if (e) {
                        const xhr = await Services.DeleteArticle(article.id);
                        const json = await xhr.json();
                        if (json.success) {
                            onDelete();
                            setOpen(false);
                        } else {
                            alert("Error");
                        }
                    } else {
                        setOpen(false)
                    }
                }}
                open={open}
                title={`Eliminar articulo (${article.title.substr(0, 20) + '...'})`}
                children={(
                    "¿Quieres eliminar el articulo?, el articulo se guardará en el apartado de articulos eliminados"
                )}
            />
        </>
    );
};
