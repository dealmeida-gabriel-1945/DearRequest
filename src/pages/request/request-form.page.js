import React from "react";
import {
    Text,
    View,
    ScrollView,
    SafeAreaView
} from "react-native";
import {CustomHeaderComponent} from "../../components/custom-header/custom-header.component";
import {PaddingStyle} from "../../style/padding.style";
import {FlexStyle} from "../../style/flex.style";
import {EndFormComponent} from "../../components/end-form/end-form.component";
import {RequestModel} from "../../model/request.model";
import {Button, Paragraph, Snackbar, TextInput} from "react-native-paper";
import {MarginStyle} from "../../style/margin.style";
import {ColorConstants} from "../../util/constants/color.constants";
import {HeaderModel} from "../../model/header.model";
import {AlignStyle} from "../../style/align.style";
import {CustomSnack} from "../../components/custom-snack/custom-snack.component";
import {RequestService} from "../../service/request.service";
import {TextStyle} from "../../style/text.style";
import {ShowResponse} from "../../components/show-response/show-response.component";

export class RequestFormPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            verbo: props.route.params.verbo,
            requisicao: new RequestModel(),
            headerToAdd: new HeaderModel(),
            headers: [],
            haveError: false,
            response: null,
            error: null,
        };
    }

    render() {
        var {verbo, requisicao, response, error} = this.state;
        if(response) return <ShowResponse error={false} response={response} voltar={() => this.setState({response: null, error: null})}/>
        if(error) return <ShowResponse error={true} response={error} voltar={() => this.setState({response: null, error: null})}/>
        return(
            <>
                <CustomHeaderComponent drawerNavigation={this.props.navigation}/>
                <View style={[FlexStyle.makeFlex(1), AlignStyle.centerXY]}>
                    <Text style={[TextStyle.makeFontSize(30), TextStyle.textDecoration.negrito]}>{verbo}</Text>
                </View>
                <SafeAreaView style={[FlexStyle.makeFlex(9), FlexStyle.flexOrientation.flexColumn, PaddingStyle.makePadding(5,0,5,0)]}>
                    <ScrollView>
                        <View style={MarginStyle.makeMargin(0,10)}>
                            <Paragraph>URL:</Paragraph>
                            <TextInput
                                type={'flat'}
                                value={requisicao.url}
                                onChangeText={text => this.setState({requisicao: requisicao.setField('url', text)})}
                            />
                        </View>
                        <View style={MarginStyle.makeMargin(0,10)}>
                            <Paragraph>Request Body:</Paragraph>
                            <TextInput
                                type={'flat'}
                                value={requisicao.body}
                                multiline={true}
                                numberOfLines={10}
                                onChangeText={text => this.setState({requisicao: requisicao.setField('body', text)})}
                            />
                        </View>
                        <View style={MarginStyle.makeMargin(0,10)}>
                            {this.renderInputHeaders()}
                        </View>
                        <View style={MarginStyle.makeMargin(0,10)}>
                            {this.renderHeadersPt1()}
                        </View>
                    </ScrollView>
                </SafeAreaView>
                <View style={[FlexStyle.makeFlex(1)]}>
                    <EndFormComponent
                        isCancel={false}
                        onWipeOut={() => requisicao.emptyMe()}
                        onSubmit={() => this.submete()}
                    />
                </View>
            </>
        );
    }


    renderInputHeaders() {
        var {headerToAdd} = this.state;
        return(
            <>
                <Paragraph>Headers:</Paragraph>
                <View style={[FlexStyle.flexOrientation.flexRow, MarginStyle.makeMargin(0,0,0,10)]}>
                    <View style={[FlexStyle.makeFlex(1),  MarginStyle.makeMargin(1,1,1,1)]}>
                        <TextInput
                            label="Key"
                            type={'flat'}
                            value={headerToAdd.key}
                            onChangeText={text => this.setState({headerToAdd: headerToAdd.setField('key', text)})}
                        />
                    </View>
                    <View style={[FlexStyle.makeFlex(1),  MarginStyle.makeMargin(1,1,1,1)]}>
                        <TextInput
                            label="Value"
                            type={'flat'}
                            value={headerToAdd.value}
                            onChangeText={text => this.setState({headerToAdd: headerToAdd.setField('value', text)})}
                        />
                    </View>
                </View>
                <View>
                    <Button icon="plus" mode="contained" onPress={() => this.adicionaHeader()} color={ColorConstants.VERDE}>
                        Adicionar
                    </Button>
                </View>
            </>
        );
    }

    adicionaHeader() {
        if(!this.state.headerToAdd.key){
            alert('Fill the key input!')
            return
        }
        let aux = this.state.headers;
        aux.push(this.state.headerToAdd);
        this.setState({headers: aux, headerToAdd: new HeaderModel('', '')})
    }

    renderHeadersPt1() {
        return(
            <View style={[FlexStyle.flexOrientation.flexColumn, MarginStyle.makeMargin(0,0,0,10)]}>
                {this.renderHeadersPt2()}
            </View>
        );
    }

    renderHeadersPt2() {
        return this.state.headers.map(
            (item, i) => (
                <View style={FlexStyle.flexOrientation.flexRow} key={i}>
                    <View style={[FlexStyle.makeFlex(2),  MarginStyle.makeMargin(1,1,1,1)]}>
                        <TextInput
                            disabled={true}
                            label="Key"
                            type={'flat'}
                            value={item.key}
                            disabled={true}
                        />
                    </View>
                    <View style={[FlexStyle.makeFlex(2),  MarginStyle.makeMargin(1,1,1,1)]}>
                        <TextInput
                            disabled={true}
                            label="Value"
                            type={'flat'}
                            value={item.value}
                        />
                    </View>
                    <View style={[FlexStyle.makeFlex(1), MarginStyle.makeMargin(1,1,1,1), AlignStyle.centerXY]}>
                        <Button mode="contained" onPress={() => this.removeItemHeader(item)} color={ColorConstants.VERMELHO}>X</Button>
                    </View>
                </View>
            )
        );
    }

    removeItemHeader(header) {
        let aux = this.state.headers.filter(item => (item.key !== header.key) && (item.value !== header.value));
        this.setState({headers: aux})
    }

    submete() {
        this.state.headers.map(
            item => this.setState({requisicao: this.state.requisicao.addHeader(item)})
        );
        RequestService.DISPATCH_REQUEST(this.state.requisicao, this.state.verbo)
            .then(response => {
                this.setState({response})
            }).catch(error =>{
            this.setState({error})
            })
    }
}
