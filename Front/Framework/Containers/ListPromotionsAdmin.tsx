import * as React from "react";
import {IPListPromotionsAdmin, IPListPromotionsAdminResult} from "../Props/IPListPromotionsAdmin";
import {PromocionesContainer} from "./PromocionesContainer";

export const ListPromotionsAdmin = ({articles, onDelete}: { articles: IPListPromotionsAdmin, onDelete: (art: IPListPromotionsAdminResult) => void }) => {
    return (
       <PromocionesContainer

       />
    );
};
