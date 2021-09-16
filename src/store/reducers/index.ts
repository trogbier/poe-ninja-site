import {combineReducers} from "redux";
import reducerLink from "./reducer";
import itemsReducer from "./itemsReducer";

const rootReducer = combineReducers({
        link: reducerLink,
        items:itemsReducer
    }
)
export default rootReducer;
