import React from "react";
import {
    View,
    Text,
} from "react-native";
import {
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
} from "react-native-paper";
import {DrawerContentScrollView, DrawerItem} from "@react-navigation/drawer";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {FlexStyle} from "../../style/flex.style";
import {TESTE} from "../../style/teste.style";
import {TextStyle} from "../../style/text.style";
import {AlignStyle} from "../../style/align.style";
import {PaddingStyle} from "../../style/padding.style";
import {ColorConstants} from "../../util/constants/color.constants";


export class DrawerContentComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            props: props,
            navigation: props.navigation,
        };
    }

    render() {
        var {navigation, props} = this.state;
        return(
            <View style={FlexStyle.makeFlex(1)}>
                <DrawerContentScrollView {...props}>
                    <View style={[FlexStyle.makeFlex(1), AlignStyle.centerXY, PaddingStyle.makePadding(0,15)]}>
                        <Text style={[TextStyle.makeFontSize(30), TextStyle.textDecoration.negrito]}>DearHttp</Text>
                    </View>
                    {this.renderDrawerItens()}
                </DrawerContentScrollView>
            </View>
        );
    }

    redirectTo(screen, verbo){
        this.props.navigation.navigate(screen, {verbo});
    }

    renderDrawerItens() {
        return(
            <>
                <DrawerItem label={'Home'} onPress={() => this.redirectTo('HOME')}
                            icon={(color, size) => (<Icon name={'home-outline'} color={ColorConstants.VERMELHO_PADRAO} size={25}/>)}
                />
                <DrawerItem label={'Requisição GET'} onPress={() => this.redirectTo('HOME')}
                            icon={(color, size) => (<Icon name={'plus'} color={ColorConstants.VERMELHO_PADRAO} size={25}/>)}
                />
                <DrawerItem label={'Requisição POST'} onPress={() => this.redirectTo('HOME')}
                            icon={(color, size) => (<Icon name={'rocket-launch-outline'} color={ColorConstants.VERMELHO_PADRAO} size={25}/>)}
                />
                <DrawerItem label={'Requisição UPDATE'} onPress={() => this.redirectTo('HOME')}
                            icon={(color, size) => (<Icon name={'pencil'} color={ColorConstants.VERMELHO_PADRAO} size={25}/>)}
                />
                <DrawerItem label={'Requisição DELETE'} onPress={() => this.redirectTo('HOME')}
                            icon={(color, size) => (<Icon name={'bullseye'} color={ColorConstants.VERMELHO_PADRAO} size={25}/>)}
                />
            </>
        );
    }
}
