import Types from "../constants/auth";
import apiRequest from "../../api/apiRequest";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import messaging from "@react-native-firebase/messaging";

// actions
export const setUser = (data) => async (dispatch) => {
  dispatch({ type: Types.setUser, payload: data });
};

const getToken = async () => {
  try {
    const token = await messaging().getToken();
    if (token) return token;
  } catch (error) {
    console.log(error);
  }
};

const getFCMToken = async () => {
  try {
    const authorized = await messaging().hasPermission();
    const fcmToken = await getToken();

    if (authorized) return fcmToken;

    await messaging().requestPermission();
    return fcmToken;
  } catch (error) {
    console.log(error);
  }
};

export const logUserIn = async (email, password) => {
  let token = await getFCMToken();
  console.log(token);
  const response = await apiRequest({
    method: "POST",
    url: "login",
    data: { email, password, deviceToken: token },
  })
    .then((res) => res.data)
    .catch((err) => {
      return false;
    });

  return response;
};

export const meGet = async () => {
  const response = apiRequest({
    method: "GET",
    url: "me",
  })
    .then((res) => res.data)
    .catch((err) => false);

  return response;
};
