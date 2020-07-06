export interface IGallery {
    tileData: IGalleryItem[]
}

export interface IGalleryItem {
    img: string;
    title: string;
    title2: string;
    featured: boolean;
    key: number;
    author: string;
}
