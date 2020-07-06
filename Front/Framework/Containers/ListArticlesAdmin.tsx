import {Grid} from "@material-ui/core";
import * as React from "react";
import {IPListArticlesAdmin, IPListArticlesAdminResult} from "../Props/IPListArticlesAdmin";
import {ArticleContainer} from "./ArticleContainer";

export const ListArticlesAdmin = ({articles, onDelete}: { articles: IPListArticlesAdmin, onDelete: (art: IPListArticlesAdminResult) => void }) => {
    return (
        <Grid container spacing={3}>
            {articles.result.map((item, index) => (
                <Grid
                    item
                    xs={3}
                    key={item.id}
                >
                    <ArticleContainer
                        onDelete={e => onDelete(item)}
                        article={item}
                        index={index}
                    />
                </Grid>
            ))}
        </Grid>
    );
};
