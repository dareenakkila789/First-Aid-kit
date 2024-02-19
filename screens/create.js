import React from "react";
import YouTube from "react-native-youtube";
import { video } from "expo-av";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInputm,
  CameraRoll,
  FlatList,
  PermissionsAndroidm,
  ScrollView,
  WebView
} from "react-native";

export default class create extends React.Component {
  state = {
    isReady: false,
    link1:
      "https://www.youtube.com/watch?v=uqVusUQxBCM&list=PLK2dBzlqxt3zCacRIRMR19XPlxLUEGSa7",
    link2:
      "https://www.youtube.com/watch?v=l44kel47q-o&list=PLK2dBzlqxt3zCacRIRMR19XPlxLUEGSa7&index=2",
    link3:
      "https://www.youtube.com/watch?v=61Z3sf4yhVY&list=PLK2dBzlqxt3zCacRIRMR19XPlxLUEGSa7&index=3",
    link4:
      "https://www.youtube.com/watch?v=h7Kpbcqn6b4&list=PLK2dBzlqxt3zCacRIRMR19XPlxLUEGSa7&index=4",
    link5:
      "https://www.youtube.com/watch?v=kAFwxYpJy60&list=PLK2dBzlqxt3zCacRIRMR19XPlxLUEGSa7&index=5",
    link6:
      "https://www.youtube.com/watch?v=fEEzQpuHlSE&list=PLK2dBzlqxt3zCacRIRMR19XPlxLUEGSa7&index=6",
    link7:
      "https://www.youtube.com/watch?v=EBZONfy43do&list=PLK2dBzlqxt3zCacRIRMR19XPlxLUEGSa7&index=7",
    link8:
      "https://www.youtube.com/watch?v=giDQdY6Lc4I&list=PLK2dBzlqxt3zCacRIRMR19XPlxLUEGSa7&index=8",
    link9:
      "https://www.youtube.com/watch?v=IDMQZ4Ap9xo&list=PLK2dBzlqxt3zCacRIRMR19XPlxLUEGSa7&index=9",
    link0:
      "https://www.youtube.com/watch?v=IDMQZ4Ap9xo&list=PLK2dBzlqxt3zCacRIRMR19XPlxLUEGSa7&index=9"
  };
  render() {
    return (
      <ScrollView>
        <View
          style={{
            backgroundColor: "white",
            flex: 1
          }}
        >
          <View>
            <Text
              style={{
                fontSize: 20,
                margin: 40,
                borderWidth: 3,
                padding: 10,

                borderColor: "red"
              }}
            >
              Basic skills course for first aid
            </Text>
            <WebView
              style={styles.content}
              style={{ width: 400, height: 400 }}
              javaScriptEnabled={true}
              source={{ uri: this.state.link1 }}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 20,
                margin: 24,
                borderWidth: 3,
                padding: 10,

                borderColor: "red"
              }}
            >
              Important rules before starting
            </Text>
            <WebView
              style={styles.content}
              style={{ width: 400, height: 400 }}
              javaScriptEnabled={true}
              source={{ uri: this.state.link2 }}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 20,
                margin: 24,
                borderWidth: 3,
                padding: 10,

                borderColor: "red"
              }}
            >
              Identify emergency situations and initial steps
            </Text>
            <WebView
              style={styles.content}
              style={{ width: 400, height: 400 }}
              javaScriptEnabled={true}
              source={{ uri: this.state.link3 }}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 20,
                margin: 24,
                borderWidth: 3,
                padding: 10,

                borderColor: "red"
              }}
            >
              Your safety first - check the place
            </Text>
            <WebView
              style={styles.content}
              style={{ width: 400, height: 400 }}
              javaScriptEnabled={true}
              source={{ uri: this.state.link4 }}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 20,
                margin: 24,
                padding: 10,

                borderWidth: 3,
                borderColor: "red"
              }}
            >
              Protect yourself from infection
            </Text>
            <WebView
              style={styles.content}
              style={{ width: 400, height: 400 }}
              javaScriptEnabled={true}
              source={{ uri: this.state.link5 }}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 20,
                margin: 24,
                padding: 10,

                borderWidth: 3,
                borderColor: "red"
              }}
            >
              Examine the casualty "Assessing the degree of awareness"
            </Text>
            <WebView
              style={styles.content}
              style={{ width: 400, height: 400 }}
              javaScriptEnabled={true}
              source={{ uri: this.state.link6 }}
            />
          </View>
          <View>
            <Text
              style={{
                fontSize: 20,
                margin: 24,

                borderWidth: 3,
                borderColor: "red"
              }}
            >
              Evaluation of blood circulation - pulse test
            </Text>
            <WebView
              style={styles.content}
              style={{ width: 400, height: 400 }}
              javaScriptEnabled={true}
              source={{ uri: this.state.link7 }}
            />
          </View>
        </View>
      </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    borderWidth: 7,
    borderColor: "red"
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    margin: 2,
    marginBottom: 20,
    fontSize: 120,
    backgroundColor: "#040300"
  }
});
