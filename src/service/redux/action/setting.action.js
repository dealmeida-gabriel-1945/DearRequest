import {ActionConstants} from "../../../util/constants/action.constants";

export const updateSettings = (settings) => ({
    type: ActionConstants.SETTINGS.UPDATE,
    settings,
});

