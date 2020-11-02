import React, { Component } from 'react';
import { TouchableOpacity, View, Text, ScrollView, } from 'react-native';
import { connect } from 'react-redux';
import { Footer, FooterTab, } from 'native-base';
import Colors from "../../src/assets/styles/Colors";
// fonts import
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// component
import Event from '../containers/app/event';
import ActiveEv from '../containers/app/active';

class AppContainer extends Component {
    constructor() {
        super()
        this.state = {
            rout: "Event",
        }
    }

    render() {
        return (
            <View style={{ flex: 1, width: "100%", }}>
                {/* //body// */}
                {
                    (this.state.rout === "Event") ? (
                        <ScrollView style={{ flex: 6, backgroundColor: "white" }}>
                            <Event navigation={this.props.navigation} />
                        </ScrollView>
                    ) : null
                }
                {
                    (this.state.rout === "Active") ? (
                        <ScrollView
                            contentContainerStyle={{ flex: 6, width: "100%", }}
                        >
                            <ActiveEv navigation={this.props.navigation} />
                        </ScrollView>
                    ) : null
                }
                {
                    (this.state.rout === "User") ? (
                        <ScrollView style={{ flex: 6, backgroundColor: "white" }}>
                            {/* <Event /> */}
                            <Text>
                                Hello world!
                            </Text>
                        </ScrollView>
                    ) : null
                }

                <Footer style={{ backgroundColor: "#F8F8F8", borderTopColor: "#8E8E93", borderTopWidth: 0.5 }}>
                    <FooterTab style={{ backgroundColor: "#F8F8F8", marginHorizontal: 12 }}>
                        <TouchableOpacity style={{ flex: 1, justifyContent: "center", alignItems: "center" }} onPress={() => { this.setState({ rout: "Event" }) }} >
                            {
                                (this.state.rout === "Event") ? (
                                    <MaterialIcons
                                        name={"event"}
                                        style={{ color: Colors.textPrimary, fontWeight: 'bold', fontSize: 20 }}
                                    />
                                ) : <MaterialIcons
                                        name={"event"}
                                        style={{ color: "#8E8E93", fontWeight: 'bold', fontSize: 20 }}
                                    />
                            }
                            <Text
                                style={{
                                    color: this.state.rout === "Event" ? Colors.textPrimary : "#8E8E93",
                                    textAlign: "center",
                                    fontSize: 10,
                                    fontWeight: 'bold',
                                }}>Event</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, justifyContent: "center", alignItems: "center" }} onPress={() => { this.setState({ rout: "Active" }) }}  >
                            {
                                (this.state.rout === "Active") ? (
                                    <Fontisto
                                        name={"checkbox-active"}
                                        style={{ color: Colors.textPrimary, fontWeight: 'bold', fontSize: 18 }}
                                    />
                                ) : <Fontisto
                                        name={"checkbox-active"}
                                        style={{ color: "#8E8E93", fontWeight: 'bold', fontSize: 18 }}
                                    />
                            }
                            <Text
                                style={{
                                    color: this.state.rout === "Active" ? Colors.textPrimary : "#8E8E93",
                                    textAlign: "center",
                                    fontSize: 10,
                                    fontWeight: 'bold',
                                }}>Active</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ flex: 1, justifyContent: "center", alignItems: "center" }} onPress={() => { this.setState({ rout: "User" }) }}  >
                            {
                                (this.state.rout === "User") ? (
                                    <FontAwesome5
                                        name={"users-cog"}
                                        style={{ color: Colors.textPrimary, fontWeight: 'bold', fontSize: 18 }}
                                    />
                                ) : <FontAwesome5
                                        name={"users-cog"}
                                        style={{ color: "#8E8E93", fontWeight: 'bold', fontSize: 18 }}
                                    />
                            }
                            <Text
                                style={{
                                    color: this.state.rout === "User" ? Colors.textPrimary : "#8E8E93",
                                    textAlign: "center",
                                    fontSize: 10,
                                    fontWeight: 'bold',
                                }}>User & profile</Text>
                        </TouchableOpacity>
                    </FooterTab>
                </Footer>
            </View >
        );
    }
}

function mapStateToProp(state) {
    return ({
    })
}
function mapDispatchToProp(dispatch) {
    return ({
    })
}
export default connect(mapStateToProp, mapDispatchToProp)(AppContainer);
