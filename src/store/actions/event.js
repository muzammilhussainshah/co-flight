import Types from "../constants/event";
import apiRequest from "../../api/apiRequest";
import { Alert } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";

// actions
export const setEvents = (data) => async (dispatch) => {
  dispatch({ type: Types.setEvents, payload: data });
};

export const getEvents = () => async (dispatch) => {
  const response = await apiRequest({
    method: "GET",
    url: "my-events",
  }).then((res) => res.data);
  dispatch({ type: Types.setEvents, payload: response });
};
