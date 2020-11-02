import React, { Component } from "react";
import { View, Image, StyleSheet, TouchableOpacity, Text, TextInput, ScrollView, Alert, RefreshControl, ActivityIndicator, Dimensions } from 'react-native';
import { connect } from "react-redux";
import Colors from "../../../src/assets/styles/Colors";
//icons import
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';

class TearmsAndCondition extends Component {
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
                        <Text style={{ marginLeft: 10, color: Colors.primaryColor, }}>Venue-Exclusive Talent Agreement.</Text>
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
                        <Text style={{ fontSize: 20, color: Colors.textPrimary, fontWeight: "bold" }}> Venue-Exclusive Talent Agreement</Text>

                        <Text style={{ marginTop: 10, fontSize: 15, color: Colors.textPrimary, fontWeight: "bold" }}>Commission:</Text>
                        <Text style={{ fontSize: 15, color: "grey" }}>In accepting this gig, I (The "Artist") hereby agree and obligate to pay First Light Co. “FLC” (The "Agent") a commission of Ten Percent (10%) from each and every performance that The Artist will be booked as a result of the Agent's efforts. The Artist agrees that First Light Co. are able to invoice on behalf of The Artist. Unless otherwise specified, the commission will be added onto The Artist’s fee. </Text>

                        <Text style={{ marginTop: 10, fontSize: 15, color: Colors.textPrimary, fontWeight: "bold" }}>Performance:</Text>
                        <Text style={{ fontSize: 15, color: "grey" }}>The Artist agrees to show up in a timely fashion to every performance that they accept and always conduct themselves in respectful manner when on a performance. The Artist agrees to always bring all required gear to the performance. The Artist agrees to dress in a respectable manner that best represents The Agent. Failure to do so may result in loss of payment. </Text>

                        <Text style={{ marginTop: 10, fontSize: 15, color: Colors.textPrimary, fontWeight: "bold" }}>Exclusivity:</Text>
                        <Text style={{ fontSize: 15, color: "grey" }}>First Light Co. does not offer any exclusivity contract with artists, The Artist is free to work with whomever they please. However, in accepting a gig by First Light Co.; The Artist agrees to exclusivity at whichever venue they are booked. If The Artist is contacted by another agency or venue directly in regards to said venue, The Artist must inform First Light Co. immediately. If The Artist is to accept a performance at this venue, without First Light Co. booking them, The Artist is to pay Fifteen Percent (15%) of the total fee (including agent fees) for every gig played at this venue NOT booked by First Light Co. for a period of Two (2) Years from the date of this contract; unless otherwise discussed and agreed. First Light Co. has no intention of damaging the livelihood of The Artists and where possible, will act in good faith and will agree to wave commission. This clause is to stop The Artist from poaching venues from First Light Co. If an Artist is found to have poached a contract from First Light Co. The Artist may be found liable for damages. </Text>

                        <Text style={{ marginTop: 10, fontSize: 15, color: Colors.textPrimary, fontWeight: "bold" }}>Payment:</Text>
                        <Text style={{ fontSize: 15, color: "grey" }}>The Artist is to invoice First Light Co. at the provided email address (info@thefirstlightco.co) within Five (5) Days of performance date. As an agent, First Light Co. is responsible for chasing all payments. However, The Artist will not receive any funds until The Agent has received them. The Agent agrees not to hold any funds received longer than a period of Three (3) Days, and will make their best efforts to pay as soon as funds are received. The Artist’s contract is with the venue, and as an agent, First Light Co. is in no way legally obligated to pay for any funds not paid by The Venue. First Light Co. will endeavour to chase all payments owed, and will always attempt to ensure The Artists are compensated. In an event of a ‘cash in hand’ performance, The Agent will invoice The Artist for 10% commission which is to be paid within Twenty-Four (24) hours of the performance completion.</Text>

                        <Text style={{ marginTop: 10, fontSize: 15, color: Colors.textPrimary, fontWeight: "bold" }}>Cancellation:</Text>
                        <Text style={{ fontSize: 15, color: "grey" }}>It is in The Agents best interest to chase a cancellation fee, which will be paid to The Artist, less commission. However this cancellation fee is not guaranteed. If The Artist cancels a performance less then eight (8) Hours before performance time, it is The Artist’s responsibility to find a replacement AFTER informing The Agent. First Light Co. will work with The Artist and endeavour to find a replacement for the performance. However The Artist may be liable for damages if not enough notice if provided. First Light Co. will need to approve any replacement found. </Text>

                        <Text style={{ marginTop: 10, fontSize: 15, color: Colors.textPrimary, fontWeight: "bold" }}>Signature:</Text>
                        <Text style={{ fontSize: 15, color: "grey" }}>The acceptance of any First Light Co. performance acts as a signature for The Artist.</Text>
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
export default connect(mapStateToProps, mapDispatchToProps)(TearmsAndCondition);

const styles = StyleSheet.create({});