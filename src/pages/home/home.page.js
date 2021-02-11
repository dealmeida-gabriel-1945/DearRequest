import React from "react";
import {
    Text,
    View,
    Linking
} from "react-native";
import {CustomHeaderComponent} from "../../components/custom-header/custom-header.component";
import {AlignStyle} from "../../style/align.style";
import {FlexStyle} from "../../style/flex.style";
import {PaddingStyle} from "../../style/padding.style";
import {TextStyle} from "../../style/text.style";
import {MarginStyle} from "../../style/margin.style";
import {updateSettings} from "../../service/redux/action/setting.action";
import {connect} from "react-redux";
import {SettingsService} from "../../service/settings.service";

class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        SettingsService.getSettings()
            .then(res => {
                this.props.dipatchUpdateSettings(JSON.parse(res));
            }).catch(err => {})
    }

    render() {
        return(
            <>
                <CustomHeaderComponent drawerNavigation={this.props.navigation}/>
                <View style={[FlexStyle.makeFlex(9), AlignStyle.centerX, PaddingStyle.makePadding(5,10,5,10)]}>
                    <Text style={[TextStyle.makeFontSize(25), TextStyle.textDecoration.negrito]}>Wellcome!</Text>
                    <Text style={[TextStyle.makeFontSize(15)]}>Select a http request type  and enjoy!!</Text>
                </View>
                <View style={[FlexStyle.makeFlex(1), AlignStyle.centerX, PaddingStyle.makePadding(5,10,5,10)]}>
                    <Text style={[TextStyle.makeFontSize(15), MarginStyle.makeMargin(0,0,0,10)]}>Made by Gabriel Guimarães de Almeida</Text>
                    <Text style={[TextStyle.makeFontSize(13), TextStyle.textColor.azul]} onPress={() => Linking.openURL('https://github.com/dealmeida-gabriel-1945/DearRequest')}>Access the Github repository here!</Text>
                </View>
            </>
        );
    }
}

const myMapDispatchToProps ={
    dipatchUpdateSettings: updateSettings,
};

//currying
export default connect(null, myMapDispatchToProps)(HomePage);
