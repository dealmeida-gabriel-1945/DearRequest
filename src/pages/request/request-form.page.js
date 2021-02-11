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
import {Button, Checkbox, Paragraph, Snackbar, TextInput} from "react-native-paper";
import {MarginStyle} from "../../style/margin.style";
import {ColorConstants} from "../../util/constants/color.constants";
import {HeaderModel} from "../../model/header.model";
import {AlignStyle} from "../../style/align.style";
import {RequestService} from "../../service/request.service";
import {TextStyle} from "../../style/text.style";
import {ShowResponse} from "../../components/show-response/show-response.component";
import {updateSettings} from "../../service/redux/action/setting.action";
import {connect} from "react-redux";
import {SettingsModel} from "../../model/settings.model";
import {SettingsService} from "../../service/settings.service";

class RequestFormPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            settings: props.settings,
            toPersist: false,
            verbo: props.route.params.verbo,
            requisicao: new RequestModel(),
            headerToAdd: new HeaderModel(),
            response: null,
            error: null,

            isSettings : (props.route.params.verbo === 'SETTINGS'),
        };
        if(props.settings.settings){
            let settings = this.state.settings.settings;
            this.state.requisicao.url = settings.url;
            this.state.requisicao.body = settings.body;
            this.state.requisicao.headers = settings.headers;
            this.state.toPersist = settings.toPersist;
        }
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
                    {this.renderSettingsDesxcription()}
                </View>
                <SafeAreaView style={[FlexStyle.makeFlex(9), FlexStyle.flexOrientation.flexColumn, PaddingStyle.makePadding(5,0,5,0)]}>
                    <ScrollView>
                        <View style={MarginStyle.makeMargin(0,10)}>
                            <TextInput
                                label="URL"
                                type={'flat'}
                                value={requisicao.url}
                                onChangeText={text => this.setState({requisicao: requisicao.setField('url', text)})}
                            />
                        </View>
                        <View style={[FlexStyle.makeFlex(1), MarginStyle.makeMargin(0,10)]}>
                            <TextInput
                                label="Request Body"
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
                        <View style={MarginStyle.makeMargin(0,10)}>
                            {this.renderCheckToPersist()}
                        </View>
                    </ScrollView>
                </SafeAreaView>
                <View style={[FlexStyle.makeFlex(1)]}>
                    <EndFormComponent
                        isCancel={false}
                        isRefresh={true}
                        onWipeOut={() => this.setState({requisicao: new RequestModel()})}
                        onSubmit={() => this.submete()}
                        onRefresh={() => this.refresh()}
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
                        Add Header
                    </Button>
                </View>
            </>
        );
    }

    renderHeadersPt1() {
        return(
            <View style={[FlexStyle.flexOrientation.flexColumn, MarginStyle.makeMargin(0,0,0,10)]}>
                {this.renderHeadersPt2()}
            </View>
        );
    }

    renderHeadersPt2() {
        return this.state.requisicao.headers.map(
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

    renderCheckToPersist(){
        if(!this.state.isSettings) return;
        return(
            <View style={[FlexStyle.flexOrientation.flexRow]}>
                <View style={[FlexStyle.makeFlex(1)]}>
                    <Checkbox.Item label="Persist"
                        status={this.state.toPersist ? 'checked' : 'unchecked'}
                        onPress={() => this.setState({toPersist: !this.state.toPersist})}
                        color={ColorConstants.VERMELHO_PADRAO}
                    />
                </View>
                <View style={FlexStyle.makeFlex(2)}></View>
            </View>
        );
    }

    adicionaHeader() {
        if(!this.state.headerToAdd.key){
            alert('Fill the key input!')
            return
        }
        let aux = this.state.requisicao.headers;
        aux.push(this.state.headerToAdd);
        this.setState({requisicao: this.state.requisicao.setField('headers', aux), headerToAdd: new HeaderModel('', '')})
    }

    removeItemHeader(header) {
        let aux = this.state.requisicao.headers.filter(item => (item.key !== header.key) && (item.value !== header.value));
        this.setState({requisicao: this.state.requisicao.setField('headers', aux)})
    }

    submete() {
        if(this.state.isSettings){
            let toSave = new SettingsModel(this.state.requisicao, this.state.toPersist);
            this.props.dipatchUpdateSettings(toSave);
            if(!this.state.toPersist) return;
            SettingsService.storeSettings(toSave)
                .then(res => {}).catch(err => {});
        }else{
            RequestService.DISPATCH_REQUEST(this.state.requisicao, this.state.verbo)
                .then(response => {
                    this.setState({response})
                }).catch(error =>{
                this.setState({error})
            });
        }

    }



    refresh(){
        if(!this.props.settings.settings) return
        let settings = this.props.settings.settings;
        let requisicao = this.state.requisicao;
        requisicao.url = settings.url;
        requisicao.body = settings.body;
        requisicao.headers = settings.headers;

        let aux = this.props.settings.settings;
        aux.request = requisicao;
        this.setState({requisicao, updateSettings: {settings:aux}})
    }

    renderSettingsDesxcription() {
        if(!this.state.isSettings) return;
        return(<Paragraph>Put the default request in this page.</Paragraph>);
    }
}

const myMapDispatchToProps ={
    dipatchUpdateSettings: updateSettings,
};

const mapStateToProps = state => {
    const {settings} = state;
    return {settings};
}

//currying
export default connect(mapStateToProps, myMapDispatchToProps)(RequestFormPage);
