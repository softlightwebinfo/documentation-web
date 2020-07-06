import * as React from "react";
import {Grid} from "@material-ui/core";
import {Oferta} from "../Components/Oferta";
import {MessageError} from "../Components/MessageError";
import {Router} from "../../server/routes";
import {IPListOffersAdmin, IPListOffersAdminResult} from "../Props/IPListOffersAdmin";


export const OfertasContainer = ({articles, onDelete}: { articles: IPListOffersAdmin, onDelete: (art: IPListOffersAdminResult) => void }) => {
    const getOffers = () => (
        articles.result.map((item, i) => {
            return (
                <Grid key={i} item xs={3}>
                    <Oferta
                        offer={item}
                    />
                </Grid>
            );
        })
    );
    return (
        <Grid container spacing={1}>
            {articles.result.length ? getOffers() : (
                <MessageError
                    buttons={[
                        {variant: "contained", label: "Publicar Oferta", color: "Primary", onClick: () => Router.pushRoute("dashboardPublishOffer")},
                        {variant: "outlined", label: "Pagina Principal", color: "Primary", onClick: () => Router.pushRoute("dashboard")},
                    ]}
                    title={"Lo sentimos"}
                    error={"Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas \"Letraset\", las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum."}
                />
            )}
        </Grid>
    )
};
