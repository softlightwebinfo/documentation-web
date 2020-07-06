export interface IPCardFile {
    image?: string;
    plus?: boolean;
    onChangeFile?: (file: File, preview: string) => void;
}
