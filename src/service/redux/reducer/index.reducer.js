import {combineReducers} from "redux";
import {settingsReducer} from "./setting.reducer";

export const indexReducer =  combineReducers({
    settings: settingsReducer,
});
