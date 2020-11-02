import React, { Component } from "react";
import {
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  ScrollView,
  Alert,
  RefreshControl,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { connect } from "react-redux";
//icons import
import Colors from "../assets/styles/Colors";
import EventCalendar from "react-native-events-calendar";
import moment from "moment";

import Feather from "react-native-vector-icons/Feather";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { LocalNotification } from "../services/LocalPushController";

class EventCard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { eventData, accepted, newGigs } = this.props;
    // console.log(eventData, "eventDataeventDataeventData");
    return (
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={() => {
          this.props.navigation.navigate("fullViewEvent");
        }}
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 2,
          },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          alignItems: "center",
          elevation: 1,
          flex: 1,
          borderColor: Colors.inputBackGround,
          borderWidth: 2,
          flexDirection: "row",
          marginHorizontal: 5,
          marginTop: 5,
        }}
      >
        <View style={{ flex: 3, alignItems: "center" }}>
          <View
            style={{
              width: 80,
              height: 100,
              backgroundColor: Colors.inputBackGround,
              elevation: 5,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {accepted ? (
              <Feather
                name={"slash"}
                style={{ color: "grey", fontSize: 60, position: "absolute" }}
              />
            ) : null}
            <Text>
              {eventData.date.split(" ")[1][0] +
                eventData.date.split(" ")[1][1] +
                eventData.date.split(" ")[1][2]}
            </Text>
            <Text
              style={{
                width: "100%",
                textAlign: "center",
                borderBottomWidth: 0.5,
                borderBottomColor: Colors.textSecondry,
              }}
            >
              {eventData.date.split(" ")[2]}
            </Text>
            <Text>{eventData.time.split("-")[0]}</Text>
          </View>
        </View>
        <View style={{ flex: 7 }}>
          <View
            style={{
              borderBottomWidth: 0.5,
              borderBottomColor: Colors.textSecondry,
              padding: 15,
            }}
          >
            <Text
              style={{
                fontWeight: "bold",
                color: Colors.textPrimary,
                fontSize: 20,
              }}
            >
              {eventData.title}
            </Text>
          </View>
          <View style={{ padding: 5 }}>
            <Text style={{ color: Colors.textSecondry }}>{eventData.date}</Text>
          </View>
          <View style={{ padding: 5 }}>
            <Text style={{ color: Colors.textSecondry }}>{eventData.time}</Text>
          </View>
          <View style={{ padding: 5 }}>
            <Text style={{ color: Colors.textSecondry }}>
              Google Calendar ICS
            </Text>
          </View>
          <View style={{ padding: 5 }}>
            <Text style={{ color: Colors.textSecondry }}>
              MUST READ: WORKSHEET
            </Text>
          </View>
          <View style={{ padding: 5 }}>
            <Text style={{ color: Colors.textSecondry }}>{eventData.fee}$</Text>
          </View>
          <View style={{ padding: 5 }}>
            <Text style={{ fontWeight: "bold", color: Colors.textSecondry }}>
              INVOICE STATUS: {eventData.invoiceStatus}
            </Text>
          </View>

          {newGigs ? (
            <View
              style={{
                padding: 5,
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
              <TouchableOpacity
                style={{
                  width: "45%",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: Colors.textPrimary,
                }}
                onPress={() => LocalNotification()}
              >
                <Text style={{ color: "white" }}>Accept</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  width: "45%",
                  justifyContent: "center",
                  alignItems: "center",
                  backgroundColor: "#A00606",
                }}
              >
                <Text style={{ color: "white" }}>Decline</Text>
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </TouchableOpacity>
    );
  }
}
let mapStateToProps = (state) => {
  return {};
};
function mapDispatchToProps(dispatch) {
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(EventCard);

const styles = StyleSheet.create({});
