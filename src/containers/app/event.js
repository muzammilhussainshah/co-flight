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
import Colors from "../../../src/assets/styles/Colors";
//icons import
import AntDesign from "react-native-vector-icons/AntDesign";
import EventCalendar from "react-native-events-calendar";
import moment from "moment";

import { Calendar, CalendarList, Agenda } from "react-native-calendars";

class Event extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDate: moment(new Date()).format("YYYY-MM-DD"),
      booking: {
        "2020-11-01": {
          marked: true,
          selected: true,
          selectedColor: "#4A3834",
        },
        "2020-11-04": {
          marked: true,
          selected: true,
          selectedColor: "#4A3834",
        },
        "2020-11-07": {
          marked: true,
          selected: true,
          selectedColor: "#4A3834",
        },
      },
      events: [
        {
          start: "2020-11-01 01:10:00",
          end: "2020-11-01 02:40:00",
          title: "The Fernery Mosnan",
          summary: "3412 Piedmont Rd NE, GA 3032",
        },
        {
          start: "2020-11-01 15:00:00",
          end: "2020-11-01 18:00:00",
          title: "The Fernery Mosnan",
          summary: "3412 Piedmont Rd NE, GA 3032",
        },

        {
          start: "2020-11-04 19:00:00",
          end: "2020-11-04 21:30:00",
          title: "The Foxtrot Inn",
          summary: "3412 Piedmont Rd NE, GA 3032",
        },
        {
          start: "2020-11-07 12:00:00",
          end: "2020-11-07 15:00:00",
          title: "LoneStar Ribhouse, Penrith",
          summary: "3412 Piedmont Rd NE, GA 3032",
        },
      ],
    };
  }

  setDate(date) {
    this.setState({ currentDate: date.dateString });
  }

  render() {
    let { width } = Dimensions.get("window");
    const { booking, events, currentDate } = this.state;
    console.log(currentDate, "currentDateInsideRender");
    return (
      <View
        style={{
          flex: 1,
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
          // backgroundColor: "grey",
        }}
      >
        <View
          style={{
            flex: 6,
            width: "100%",
            // backgroundColor: "green"
          }}
        >
          <View
            style={{
              width: "100%",
              height: 50,
              marginBottom: 20,
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#4A3834",
            }}
          >
            <Text
              animation="pulse"
              iterationCount={5}
              style={{ fontWeight: "bold", color: "white", fontSize: 20 }}
            >
              {moment(currentDate).format("DD-MM-YYYY")}
            </Text>
          </View>

          <CalendarList
            horizontal={true}
            pagingEnabled={true}
            markedDates={booking}
            current={currentDate}
            onDayPress={(day) => {
              this.setDate(day);
            }}
            theme={{
              todayTextColor: "#2D4150",
              textDayFontSize: 16,
              textMonthFontSize: 16,
              textDayHeaderFontSize: 16,
            }}
          />
          <View>
            <EventCalendar
              eventTapped={() => {
                this.props.navigation.navigate("fullViewEvent");
              }}
              // eventTapped={(data) => { console.log(data, "data") }}
              events={events}
              width={width}
              initDate={currentDate}
            />
          </View>
        </View>
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
export default connect(mapStateToProps, mapDispatchToProps)(Event);

const styles = StyleSheet.create({});
