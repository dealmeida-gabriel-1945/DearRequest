import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

import {Provider} from "react-redux";
import { StyleSheet } from 'react-native';
import {MainRoutes} from "./src/main.routes";
import {ColorConstants} from "./src/util/constants/color.constants";
import {createStore} from "redux";
import {indexReducer} from "./src/util/redux/reducers/index.reducer";

//criacao da store
const store = createStore(indexReducer);

export default function App() {
    return (
        <Provider store={store}>
            <PaperProvider theme={theme}>
                <MainRoutes />
            </PaperProvider>
        </Provider>
    );
}
const theme = {
    ...DefaultTheme,
    colors: {
        ...DefaultTheme.colors,
        primary: ColorConstants.VERMELHO_PADRAO,
        accent: '#fff',
    },
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});
