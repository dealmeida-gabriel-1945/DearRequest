import React from "react";
import {
    Text,
    View,
} from "react-native";
import {CustomHeaderComponent} from "../../components/custom-header/custom-header.component";

export class RequestFormPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            verbo: props.route.params.verbo
        };
    }

    render() {
        var {verbo} = this.state;
        return(
            <>
                <CustomHeaderComponent drawerNavigation={this.props.navigation}/>
                <View>
                    <Text>{verbo}</Text>
                </View>
            </>
        );
    }
}
