import { combineReducers } from "redux";
import authReducer from "./authReducer";
import homeReducer from "./homeReducer";

const reducer = combineReducers({authReducer, homeReducer});

export default reducer;