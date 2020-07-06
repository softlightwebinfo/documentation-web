import {combineReducers} from "redux";
import userReducer from "./user/reducers";
import exampleReducer from "./example/reducers";

export default combineReducers({
    example: exampleReducer,
    user: userReducer,
});
