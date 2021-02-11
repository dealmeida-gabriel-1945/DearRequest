import {settingsReducer} from "./settings.reducer";
import {combineReducers} from "redux";

export const indexReducer =  combineReducers({
    settings: settingsReducer,
});
