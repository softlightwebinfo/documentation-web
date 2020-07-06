export interface IPListArticlesAdmin {
    count: string;
    result: IPListArticlesAdminResult[];
}

export interface IPListArticlesAdminResult {
    id: string;
    description: string;
    offer: string;
    price: string;
    title: string;
    updatedAt: string;
    image: string;
}
