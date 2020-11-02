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
  FlatList,
  ActivityIndicator,
  Dimensions,
} from "react-native";
import { connect } from "react-redux";
import { Tabs, Tab, TabHeading } from "native-base";

import Colors from "../../../src/assets/styles/Colors";
//icons import
import AntDesign from "react-native-vector-icons/AntDesign";
import EventCard from "../../components/eventCard";
import moment from "moment";

class ActiveEv extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeColor: "New_Gigs",
      activeEvData: [
        {
          title: "The Fernery Mosnan",
          date: "Sunday, November 1, 2020",
          time: "3:00 PM - 6:00 PM",
          fee: "300",
          invoiceStatus: "UNPAID",
        },
        {
          title: "The Foxtrot Inn",
          date: "Wednesday, November 4, 2020",
          time: "7:00 PM - 9:30 PM",
          fee: "200",
          invoiceStatus: "PAID CASH",
        },
        {
          title: "LoneStar Ribhouse, Penrith",
          date: "Saturday, November 7, 2020",
          time: "12:00 PM - 3:00 PM",
          fee: "300",
          invoiceStatus: "UNPAID",
        },
        {
          title: "LoneStar Ribhouse, Penrith",
          date: "Saturday, November 7, 2020",
          time: "12:00 PM - 3:00 PM",
          fee: "300",
          invoiceStatus: "UNPAID",
        },
      ],
    };
  }

  activeColor(key) {
    if (key.ref.key == ".0") {
      this.setState({
        activeColor: "New_Gigs",
      });
    }
    if (key.ref.key == ".1") {
      this.setState({
        activeColor: "Accepted",
      });
    }
  }

  render() {
    const { activeEvData, activeColor } = this.state;
    return (
      <View
        style={{
          flex: 1,
          width: "100%",
          justifyContent: "center",
          // backgroundColor: "grey",
        }}
      >
        {/* <Text>Hello world</Text> */}

        <View
          style={{
            height: 50,
            width: "100%",
            backgroundColor: "#4A3834",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontWeight: "bold", color: "white", fontSize: 20 }}>
            FULL LIST OF GIGS
          </Text>
        </View>

        <Tabs
          tabContainerStyle={{ height: 60, marginBottom: 10 }}
          onChangeTab={(key) => this.activeColor(key)}
          locked={true}
          tabBarUnderlineStyle={{ backgroundColor: Colors.textPrimary }}
        >
          {/* //New Gigs// */}
          <Tab
            heading={
              <TabHeading
                style={{ flexDirection: "column", backgroundColor: "white" }}
              >
                <Text
                  style={{
                    color:
                      activeColor === "New_Gigs" ? Colors.textPrimary : "black",
                    fontWeight: "bold",
                  }}
                >
                  New Gigs
                </Text>
              </TabHeading>
            }
          >
            <View style={{ flex: 9 }}>
              <ScrollView contentContainerStyle={{ padding: 5 }}>
                <FlatList
                  data={activeEvData}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <EventCard
                      navigation={this.props.navigation}
                      eventData={item}
                      newGigs={true}
                    />
                  )}
                />
              </ScrollView>
            </View>
          </Tab>

          {/* //Accepted// */}
          <Tab
            heading={
              <TabHeading
                style={{ flexDirection: "column", backgroundColor: "white" }}
              >
                <Text
                  style={{
                    color:
                      activeColor === "Accepted" ? Colors.textPrimary : "black",
                    fontWeight: "bold",
                  }}
                >
                  Accepted
                </Text>
              </TabHeading>
            }
          >
            <View style={{ flex: 9 }}>
              <ScrollView contentContainerStyle={{ padding: 5 }}>
                <FlatList
                  data={activeEvData}
                  keyExtractor={(item) => item.id}
                  renderItem={({ item }) => (
                    <EventCard
                      navigation={this.props.navigation}
                      eventData={item}
                      accepted={true}
                    />
                  )}
                />
              </ScrollView>
            </View>
          </Tab>
        </Tabs>
      </View>
    );
  }
}
let mapStateToProps = (state) => {
  return {};
};
function mapDispatchToProps(dispatch) {
  return {};
}
export default connect(mapStateToProps, mapDispatchToProps)(ActiveEv);

const styles = StyleSheet.create({});
