import {IPListArticlesAdminResult} from "./IPListArticlesAdmin";

export interface IPArticleContainer {
    article: IPListArticlesAdminResult;
    index: number;

    onDelete?: () => void;
}
