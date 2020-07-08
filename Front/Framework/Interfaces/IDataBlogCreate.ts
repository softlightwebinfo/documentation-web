import {EditorData} from "@codeunic/library-ui/build";

export interface IDataBlogCreate {
    title: string;
    description: string;
    tags: string[];
    data: EditorData[],
}
