import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList
} from "react-native";
import * as firebase from "firebase";

export default class login extends React.Component {
  render() {
    return (
      <View
        style={{
          backgroundColor: "white",
          flex: 1
        }}
      >
        <View style={{ flexDirection: "row", margin: 30 }}>
          <Image
            style={{ width: 90, height: 90 }}
            source={require("../assets/Gau.jpg")}
          />
          <Text style={{ fontSize: 20 }}>
            It is used to connect the site of infection after clearance.
          </Text>
        </View>
        <View style={{ flexDirection: "row", margin: 20 }}>
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../assets/ampu.png")}
          />

          <Text style={{ fontSize: 15 }}>Call the ambulance 101</Text>
        </View>
        <View style={{ flexDirection: "row", margin: 20 }}>
          <Image
            style={{ width: 50, height: 50 }}
            source={require("../assets/civil.png")}
          />
          <Text style={{ fontSize: 15 }}>Call the Civil Defense 102</Text>
        </View>
        <View
          style={{ alignItems: "center", justifyContent: "center", margin: 40 }}
        >
          <Text
            style={{
              fontSize: 25,
              borderWidth: 3,
              borderColor: "red"
            }}
          >
            We can help you!
          </Text>
        </View>
      </View>
    );
  }
}
