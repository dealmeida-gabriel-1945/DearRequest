import {ActionConstants} from "../../../util/constants/action.constants";

const ACTIONS = ActionConstants.SETTINGS;

export const settingsReducer = (state = {}, action) =>{
    switch (action.type) {
        case ACTIONS.UPDATE:
            const {settings} = action;
            return {...state, settings}
        default:
            return state;
    }
};
