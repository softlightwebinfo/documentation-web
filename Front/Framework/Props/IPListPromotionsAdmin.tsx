export interface IPListPromotionsAdmin {
    count: string;
    result: IPListPromotionsAdminResult[];
}

export interface IPListPromotionsAdminResult {
    id: string;
    description: string;
    title: string;
    updatedAt: string;
    image: string;
}
