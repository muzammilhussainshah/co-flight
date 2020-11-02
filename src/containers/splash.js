import {
  View,
  Image,
  Text,
  ActivityIndicator,
  Alert,
  StatusBar,
} from "react-native";
import React, { Component } from "react";
import Colors from "../assets/styles/Colors";
import { connect } from "react-redux";
import { logUserIn, setUser, meGet } from "../store/actions/auth";
import { getEvents } from "../store/actions/event";
import AsyncStorage from "@react-native-community/async-storage";

class SplashScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      percent: 0,
    };
  }

  async componentDidMount() {
    AsyncStorage.removeItem("@auth_token");
    if (await AsyncStorage.getItem("@auth_token")) {
      let response = await this.props.meGet();
      console.log(response);
      if (response) {
        await this.props.setUser(response.data);
        await this.props.getEvents();
        this.props.navigation.navigate("appContainer");
      } else {
        Alert.alert("Unauthorized");
      }
    } else this.props.navigation.navigate("SignIn");
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: Colors.primaryColor,
        }}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <Image
            source={require("../assets/logo.jpg")}
            resizeMode="contain"
            style={{ height: "65%", width: "65%" }}
          />
          <ActivityIndicator
            style={{ flex: 1.5 }}
            size={40}
            color={Colors.textPrimary}
          />
          <Text style={{ color: Colors.textPrimary, fontWeight: "bold" }}>
            Loading...
          </Text>
        </View>
      </View>
    );
  }
}

let mapStateToProps = (state) => {
  return {};
};
function mapDispatchToProps(dispatch) {
  return {
    logUserIn: (email, pass) => dispatch(logUserIn(email, pass)),
    meGet: () => meGet(),
    setUser: (user) => dispatch(setUser(user)),
    getEvents: () => dispatch(getEvents()),
  };
}
export default connect(mapStateToProps, mapDispatchToProps)(SplashScreen);
