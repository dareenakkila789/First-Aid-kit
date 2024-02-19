import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput
} from "react-native";
import * as firebase from "firebase";
export default class login extends React.Component {
  state = {
    email: "",
    password: ""
  };

  login = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorMessage);
      });
  };
  render() {
    return (
      <View
        style={{
          backgroundColor: "#808000",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          fontSize: 24
        }}
      >
        <TextInput
          placeholder="Enter your email"
          multiline={false}
          onChangeText={text => {
            this.setState({ email: text });
          }}
          value={this.state.email}
        />
        <TextInput
          placeholder="Enter your password"
          secureTextEntry={true}
          multiline={false}
          secureTextEntry={true}
          onChangeText={text => {
            this.setState({ password: text });
          }}
          value={this.state.password}
        />

        <TouchableOpacity onPress={this.login}>
          <Text>here!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
