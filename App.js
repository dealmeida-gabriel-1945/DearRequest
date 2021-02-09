import React from 'react';
import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import {MainRoutes} from "./src/main.routes";
import {ColorConstants} from "./src/util/constants/color.constants";

export default function App() {
    return (
        <PaperProvider theme={theme}>
            <MainRoutes />
        </PaperProvider>
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
