import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView
} from "react-native";
import * as firebase from "firebase";

export default class content extends React.Component {
  render() {
    return (
      <ScrollView>
        <View
          style={{
            backgroundColor: "white",
            flex: 1
          }}
        >
          <View
            style={{
              flexDirection: "row",
              margin: 30,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <Text
              style={{
                fontSize: 20,
                margin: 10,
                borderWidth: 3,
                padding: 10,

                borderColor: "red"
              }}
            >
              The contents for the {"\n"} first aid kit bag
            </Text>
          </View>

          <View style={{ flexDirection: "row", margin: 10 }}>
            <Image
              style={{ width: 70, height: 70 }}
              source={require("../assets/Gau.jpeg")}
            />
            <Text style={{ fontSize: 15 }}>
              ● It is used to connect the site of {"\n"} infection after
              clearance.
            </Text>
          </View>
          <View style={{ flexDirection: "row", margin: 20 }}>
            <Image
              style={{ width: 70, height: 70 }}
              source={require("../assets/ban.jpg")}
            />

            <Text style={{ fontSize: 15 }}>● Used in cases of wounds.</Text>
          </View>
          <View style={{ flexDirection: "row", margin: 20 }}>
            <Image
              style={{ width: 70, height: 70 }}
              source={require("../assets/rol.jpg")}
            />
            <Text style={{ fontSize: 15 }}>
              ● Used when injuring hands and {"\n"}feet flexibly
            </Text>
          </View>
          <View style={{ flexDirection: "row", margin: 20 }}>
            <Image
              style={{ width: 70, height: 70 }}
              source={require("../assets/wo.jpg")}
            />
            <Text style={{ fontSize: 15 }}>
              ● They are used to disinfect and {"\n"}sterilize wounds before
              they are{"\n"} covered.
            </Text>
          </View>
          <View style={{ flexDirection: "row", margin: 20 }}>
            <Image
              style={{ width: 70, height: 70 }}
              source={require("../assets/si.jpg")}
            />
            <Text style={{ fontSize: 15 }}>
              ● Used for cutting gauze and others.
            </Text>
          </View>
          <View style={{ flexDirection: "row", margin: 20 }}>
            <Image
              style={{ width: 70, height: 70 }}
              source={require("../assets/glo.jpg")}
            />
            <Text style={{ fontSize: 15 }}>● Used in wound clearance.</Text>
          </View>
        </View>
      </ScrollView>
    );
  }
}
