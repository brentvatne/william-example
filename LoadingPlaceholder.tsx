import * as React from "react";
import Constants from "expo-constants";
import { View } from "react-native";

let Blurhash: any;

// Constants.appOwnership is only defined in Expo apps running in Expo Go or
// built with Turtle
if (!Constants.appOwnership) {
  Blurhash = require("react-native-blurhash").Blurhash;
}

export default function LoadingPlaceholder(props: {
  blurhash: string;
  style: any;
}) {
  if (Blurhash) {
    return <Blurhash blurhash={props.blurhash} style={props.style} />;
  } else {
    return <View style={[{ backgroundColor: "#eee" }, props.style]} />;
  }
}
