import {combineReducers} from "redux";
import reducerLink from "./reducer";

const rootReducer = combineReducers({
        link: reducerLink
    }
)
export default rootReducer;
