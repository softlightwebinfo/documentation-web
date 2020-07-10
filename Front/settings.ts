import {MenuGeneratorModel} from "./MenuGeneratorModel";

export const settingsMenu = [
    new MenuGeneratorModel("Header", "menu", "header"),
    new MenuGeneratorModel("Text", "menu", "text"),
    new MenuGeneratorModel("Container", "menu", "container"),
    new MenuGeneratorModel("Grid", "menu", "grid"),
    new MenuGeneratorModel("Ads", "menu", "ads"),
    new MenuGeneratorModel("Title", "menu", "title"),
    new MenuGeneratorModel("Card", "menu", "card"),
    new MenuGeneratorModel("List", "menu", "list"),
    new MenuGeneratorModel("Separator", "menu", "separator"),
];
export const settingsMenuLayouts = [
    new MenuGeneratorModel("Form", "menu","form"),
    new MenuGeneratorModel("Aside", "menu","aside"),
    new MenuGeneratorModel("Dashboard", "menu","dashboard"),
    new MenuGeneratorModel("Carousel", "menu","carousel"),
];

export const API = "http://localhost:3020/api";
//export const API = "https://codestackwiki.com/api";

export const getApi = (url: string) => `${API}/${url}/`;
