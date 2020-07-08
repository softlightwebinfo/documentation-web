import {combineReducers} from "redux";
import userReducer from "./user/reducers";
import exampleReducer from "./example/reducers";
import blogReducer from "./blog/reducers";

export default combineReducers({
    example: exampleReducer,
    user: userReducer,
    blog: blogReducer,
});
