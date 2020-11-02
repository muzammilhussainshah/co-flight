import PushNotification from "react-native-push-notification";

PushNotification.configure({
  // (required) Called when a remote or local notification is opened or received
  onNotification: function (notification) {
    console.log("LOCAL NOTIFICATION ==>", notification);
  },
  popInitialNotification: true,
  requestPermissions: true,
  permissions: {
    alert: true,
    badge: true,
    sound: true,
  },
});

PushNotification.createChannel(
  {
    channelId: "localNotification", // (required)
    channelName: "My channel", // (required)
    channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
    soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
    importance: 4, // (optional) default: 4. Int value of the Android notification importance
    vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
  },
  (created) => console.log(`createChannel returned '${created}'`) // (optional) callback returns whether the channel was created, false means it already existed.
);

export const LocalNotification = () => {
  // PushNotification.localNotification({
  //   /* Android Only Properties */
  //   channelId: "localNotification", // (required) channelId, if the channel doesn't exist, it will be created with options passed above (importance, vibration, sound). Once the channel is created, the channel will not be update. Make sure your channelId is different if you change these options. If you have created a custom channel, it will apply options of the channel.
  //   bigText: "My big text that will be shown when notification is expanded", // (optional) default: "message" prop
  //   subText: "This is a subText", // (optional) default: none
  // });
};
