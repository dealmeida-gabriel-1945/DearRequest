import AsyncStorage from '@react-native-async-storage/async-storage';
import {MessageConstans} from "../util/constants/message.constants";

const SETTINGS_KEY = '@SETTINGS';

export const SettingsService = {
    storeSettings: async (value) => {
        try {
            await AsyncStorage.setItem(SETTINGS_KEY, JSON.stringify(value))
        } catch (e) {
            alert(MessageConstans.ACTION_FAIL);
        }
    },
    getSettings: async () => {
        try {
            return await AsyncStorage.getItem(SETTINGS_KEY)
        } catch (e) {
            alert(MessageConstans.ACTION_FAIL);
        }
    },
};
