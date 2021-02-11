import React from "react";
import {
    View, Text, SafeAreaView, ScrollView, Clipboard
} from "react-native";
import {FlexStyle} from "../../style/flex.style";
import {PaddingStyle} from "../../style/padding.style";
import {Button, TextInput} from "react-native-paper";
import {ColorConstants} from "../../util/constants/color.constants";
import {AlignStyle} from "../../style/align.style";
import {TextStyle} from "../../style/text.style";
import {MarginStyle} from "../../style/margin.style";

export const ShowResponse = ({
    error = false,
    response = {}, voltar = () => {},
}) => {
    let text = JSON.stringify(response, null, "\t");
    return (
        <>

            <View style={[FlexStyle.makeFlex(1), AlignStyle.centerXY, {backgroundColor: (error) ? ColorConstants.VERMELHO : ColorConstants.VERDE}]}>
                <Text style={(error) ? TextStyle.textColor.branco : TextStyle.textColor.preto}>
                    {!error ? `Response: ${response.status}:`  : response.message}
                </Text>
            </View>

            <SafeAreaView style={[FlexStyle.makeFlex(20), FlexStyle.flexOrientation.flexColumn, PaddingStyle.makePadding(5,0,5,0)]}>
                <ScrollView>
                    <View style={FlexStyle.makeFlex(1)}>
                        <TextInput
                            label="Results"
                            type={'flat'}
                            value={text}
                            multiline={true}
                            numberOfLines={10}
                            onChangeText={ntext => text = ntext}
                        />
                    </View>
                </ScrollView>
            </SafeAreaView>

            <View style={FlexStyle.flexOrientation.flexRow}>
                <View style={[FlexStyle.makeFlex(1), MarginStyle.makeMargin(5,5,5,5)]}>
                    <Button icon="arrow-left" mode="contained" onPress={voltar} color={ColorConstants.VERMELHO}>
                        Back
                    </Button>
                </View>
                <View style={[FlexStyle.makeFlex(2), MarginStyle.makeMargin(5,5,5,5)]}>
                    <Button icon="clipboard" mode="contained" onPress={() => {Clipboard.setString(JSON.stringify(response, null, "\t"));}} color={ColorConstants.VERDE}>
                        Copy to Clipboard
                    </Button>
                </View>
            </View>
        </>
    );
};
