import React from "react";
import {
    View,
    Text,
    Image,
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
                    <View style={[FlexStyle.makeFlex(1), AlignStyle.centerXY, PaddingStyle.makePadding(0,5)]}>
                        <Image source={require('../../../assets/custom-splash.png')} style={{borderRadius: 10}}/>
                    </View>
                    {this.renderDrawerItens()}
                </DrawerContentScrollView>
                <Drawer.Section>
                    <DrawerItem label={'Settings'} style={[TextStyle.textColor.verdePadrao]}
                                icon={(color, size) => (<Icon name={'cog'} color={ColorConstants.VERMELHO_PADRAO} size={25}/>)}
                                onPress={() => this.redirectTo('SETTINGS')}
                    />
                </Drawer.Section>
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
                <DrawerItem label={'Requisição GET'} onPress={() => this.redirectTo('REQUEST_GET', 'GET')}
                            icon={(color, size) => (<Icon name={'plus'} color={ColorConstants.VERMELHO_PADRAO} size={25}/>)}
                />
                <DrawerItem label={'Requisição POST'} onPress={() => this.redirectTo('REQUEST_POST', 'POST')}
                            icon={(color, size) => (<Icon name={'rocket-launch-outline'} color={ColorConstants.VERMELHO_PADRAO} size={25}/>)}
                />
                <DrawerItem label={'Requisição PUT'} onPress={() => this.redirectTo('REQUEST_PUT', 'PUT')}
                            icon={(color, size) => (<Icon name={'pencil'} color={ColorConstants.VERMELHO_PADRAO} size={25}/>)}
                />
                <DrawerItem label={'Requisição DELETE'} onPress={() => this.redirectTo('REQUEST_DELETE', 'DELETE')}
                            icon={(color, size) => (<Icon name={'bullseye'} color={ColorConstants.VERMELHO_PADRAO} size={25}/>)}
                />
            </>
        );
    }
}
