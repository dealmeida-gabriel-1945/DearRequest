import React from "react";
import {
    Text,
    View,
} from "react-native";
import {CustomHeaderComponent} from "../../components/custom-header/custom-header.component";

export class HomePage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        return(
            <>
                <CustomHeaderComponent drawerNavigation={this.props.navigation}/>
                <View>
                    <Text>Home</Text>
                </View>
            </>
        );
    }
}
