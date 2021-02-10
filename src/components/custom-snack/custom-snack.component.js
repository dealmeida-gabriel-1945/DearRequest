import React from "react";
import {Snackbar} from "react-native-paper";

export const CustomSnack = ({
    visivel, onDismiss = () => {}, onLabelCLick = () => {},
    label = '', bodyText = ''
}) => (
    <Snackbar
        visible={visivel}
        onDismiss={onDismiss}
        action={{
            label: label,
            onPress: onLabelCLick,
        }}>
        {bodyText}
    </Snackbar>
);
