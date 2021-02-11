import React from "react";
import {SafeAreaView, View} from "react-native";
import {Button} from "react-native-paper";

import {FlexStyle} from "../../style/flex.style";
import {MarginStyle} from "../../style/margin.style";
import {ColorConstants} from "../../util/constants/color.constants";

export const EndFormComponent = ({
     isCancel = true, onCancel = () => null,
     isWipeOut= true, onWipeOut = () => null,
     isSubmit = true, onSubmit = () => null,
     isRefresh= false, onRefresh = () => null,
}) => (
    <View style={[FlexStyle.makeFlex(1), FlexStyle.flexOrientation.flexRow]}>
        {(isRefresh) ? renderRefresh(onRefresh) : null}
        {(isCancel) ? renderCancel(onCancel) : null}
        {(isWipeOut) ? renderWipeOut(onWipeOut) : null}
        {(isSubmit) ? renderSubmit(onSubmit) : null}
    </View>
);
const renderCancel = (onClick) => (
    <View style={[FlexStyle.makeFlex(1), MarginStyle.makeMargin(5,5,5,5)]}>
        <Button icon="cancel" mode="contained" onPress={() => onClick()} color={ColorConstants.VERMELHO}>
            Back
        </Button>
    </View>
);
const renderWipeOut = (onClick) => (
    <View style={[FlexStyle.makeFlex(1), MarginStyle.makeMargin(5,5,5,5)]}>
        <Button icon="alert" mode="contained" onPress={() => onClick()} color={ColorConstants.AMARELO}>
            Clear
        </Button>
    </View>
);
const renderSubmit = (onClick) => (
    <View style={[FlexStyle.makeFlex(1), MarginStyle.makeMargin(5,5,5,5)]}>
        <Button icon="login" mode="contained" onPress={() => onClick()} color={ColorConstants.VERDE}>
            Submit
        </Button>
    </View>
);
const renderRefresh = (onClick) => (
    <View style={[FlexStyle.makeFlex(1), MarginStyle.makeMargin(5,5,5,5)]}>
        <Button icon="refresh" mode="contained" onPress={() => onClick()} color={ColorConstants.AZUL}>
            Refresh
        </Button>
    </View>
);
