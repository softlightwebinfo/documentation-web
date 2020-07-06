export interface IPListOffersAdmin {
    count: string;
    result: IPListOffersAdminResult[];
}

export interface IPListOffersAdminResult {
    id: string;
    description: string;
    title: string;
    offer: string;
    updatedAt: string;
    startAt: string;
    endAt: string;
    image: string;
}
