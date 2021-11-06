import { combineReducers } from "redux";
import appReducer from "./app/app.reducer"

const RootReducer = combineReducers({
    app: appReducer,
});

export default RootReducer;