import * as React from "react";
import { StatusBar } from "react-native";
import Colors from "./src/assets/styles/Colors";
// navigator
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// Provider and store
import { Provider } from "react-redux";
import configureStore from "./src/store";
// Components
import SplashScreen from "./src/containers/splash";
import SignIn from "./src/containers/authentication/signIn";
import SignUp from "./src/containers/authentication/signup";
import forgotPassword from "./src/containers/authentication/forgetPassword";
import AppContainer from "./src/containers/appContainer";
import FullViewEvent from "./src/containers/app/fullViewEvent";
import TearmsAndCondition from "./src/containers/app/termsAndCondition";
import RemotePushController from "./src/services/RemotePushController";

const Stack = createStackNavigator();
const store = configureStore();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <StatusBar
          backgroundColor={Colors.textPrimary}
          barStyle="light-content"
        />
        <RemotePushController />

        <Provider store={store}>
          <Stack.Navigator headerMode="none" initialRouteName="SplashScreen">
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="SignIn" component={SignIn} />
            <Stack.Screen name="SignUp" component={SignUp} />
            <Stack.Screen name="forgotPassword" component={forgotPassword} />
            <Stack.Screen name="appContainer" component={AppContainer} />
            <Stack.Screen name="fullViewEvent" component={FullViewEvent} />
            <Stack.Screen
              name="tearmsAndCondition"
              component={TearmsAndCondition}
            />
          </Stack.Navigator>
        </Provider>
      </Provider>
    </NavigationContainer>
  );
}
