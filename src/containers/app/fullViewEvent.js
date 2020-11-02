import React, { Component } from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text, TextInput, ScrollView, Alert, RefreshControl, ActivityIndicator, Dimensions } from 'react-native';
import { connect } from "react-redux";
import Colors from "../../../src/assets/styles/Colors";
//icons import
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

class FullViewEvent extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <View
                style={{
                    flex: 1,
                    width: "100%",
                    alignItems: "center",
                    justifyContent: "center",
                    // backgroundColor: "green",
                }}>

                <View style={{
                    flex: 1,
                    width: "100%",
                    justifyContent: "center",
                    backgroundColor: Colors.textPrimary
                }}>
                    <TouchableOpacity
                        onPress={() => { this.props.navigation.goBack() }}
                        style={{
                            flexDirection: "row",
                            alignItems: "center",
                        }}>
                        <MaterialIcons name={"arrow-back"} style={{ color: Colors.primaryColor, fontWeight: 'bold', fontSize: 25, marginLeft: "5%" }} />
                        <Text style={{ marginLeft: 10, color: Colors.primaryColor, }}>BACK TO ALL EVENTS</Text>
                    </TouchableOpacity>
                </View>

                <View style={{
                    flex: 12,
                    width: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                    // backgroundColor: "yellow",
                }}>
                    <ScrollView contentContainerStyle={{ paddingBottom: 80, padding: 20, }}>
                        <Text style={{ fontSize: 25, color: Colors.textPrimary, fontWeight: "bold" }}>LoneStar Ribhouse, Penrith</Text>
                        <Text style={{ fontSize: 20, color: Colors.textPrimary }}>Saturday, November 7, 2020</Text>
                        <Text style={{ fontSize: 20, color: Colors.textPrimary }}>12:00 PM  3:00 PM</Text>
                        <Text style={{ fontSize: 20, color: Colors.textPrimary }}>Fee: $300</Text>
                        <Text style={{ fontSize: 20, color: Colors.textPrimary, fontWeight: "bold", marginTop: 10 }}>INVOICE STATUS: UNPAID</Text>


                        <Text style={{ marginTop: 30, fontSize: 15, color: "grey" }}>Must Read:</Text>
                        <Text style={{ marginTop: 10, fontSize: 15, color: Colors.textPrimary }}>ADDRESS:</Text>
                        <Text style={{ marginTop: 10, fontSize: 15, color: "grey" }}>78-88 Tench Ave, Jamisontown NSW 2750</Text>
                        <Text style={{ marginTop: 10, fontSize: 15, color: Colors.textPrimary }}>OTHER:</Text>
                        <Text style={{ marginTop: 10, fontSize: 15, color: "grey" }}>Bring two speakers! One for inside and one for outside. Follow instructions from venue staff as to where to set up.</Text>
                        <Text style={{ marginTop: 30, fontSize: 15, color: "grey" }}>As always, bring ALL equipment just in case.</Text>
                        <Text style={{ marginTop: 10, fontSize: 15, color: Colors.textPrimary }}>INVOICING:</Text>
                        <Text style={{ marginTop: 10, fontSize: 15, color: "grey" }}>Please send your invoice to info@thefirstlight.co</Text>
                        <Text style={{ marginTop: 10, fontSize: 15, color: "grey" }}>Address:</Text>
                        <Text style={{ marginTop: 10, fontSize: 15, color: "grey" }}>LoneStar Ribhouse, Penrith</Text>
                        <Text style={{ marginTop: 10, fontSize: 15, color: "grey" }}>C/- First Light Co.</Text>
                        <Text style={{ marginTop: 10, fontSize: 15, color: Colors.textPrimary, fontWeight: "bold" }}>LEGAL:</Text>

                        <TouchableOpacity onPress={() => { this.props.navigation.navigate("tearmsAndCondition") }}>
                            <Text style={{ marginTop: 10, fontSize: 15, color: "grey" }}>Please note, when confirming this gig with First Light Co. You are agreeing to the First Light Co. Venue-Exclusive Talent Agreement.  (tap to view)</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View >
            </View >
        );
    }
}

let mapStateToProps = state => {
    return {
    };
};
function mapDispatchToProps(dispatch) {
    return ({
    })
}
export default connect(mapStateToProps, mapDispatchToProps)(FullViewEvent);

const styles = StyleSheet.create({});