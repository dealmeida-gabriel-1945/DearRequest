import React from "react";
import {
    Header,
    Left,
    Right,
    Body,
    Title,
} from "native-base";
import {
    Text,
    View,
} from "react-native";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {PaddingStyle} from "../../style/padding.style";
import {TextStyle} from "../../style/text.style";
import {ColorConstants} from "../../util/constants/color.constants";

export const CustomHeaderComponent = ({drawerNavigation}) => (

    <Header style={myStyle} androidStatusBarColor={ColorConstants.PRETO}>
        <Left>
            <Icon name="menu" color={ColorConstants.BRANCO} size={25} onPress={() => drawerNavigation.toggleDrawer()}/>
        </Left>
        <Body style={[PaddingStyle.makePadding(100,0,0,0)]}>
        </Body>
    </Header>
);
const myStyle = {
    backgroundColor: ColorConstants.VERMELHO_PADRAO,
};
