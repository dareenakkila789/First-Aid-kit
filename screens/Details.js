import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
  Modal,
  TextInput,
  FlatList
} from "react-native";

export default class Details extends React.Component {
  render() {
    return (
      <ScrollView cotentContainerStyle={styles.container}>
        <View style={styles.container}>
          <View style={{ flexDirection: "row" }}>
            <Image
              style={styles.img1}
              source={this.props.navigation.state.params.image}
            />
            <Image
              style={styles.img2}
              source={this.props.navigation.state.params.image2}
            />
          </View>

          <Text> {this.props.navigation.state.params.name} </Text>
          <Text style={{ fontSize: 20 }}>
            {" "}
            {this.props.navigation.state.params.data1}
          </Text>
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center"
  },

  img1: {
    height: 150,
    width: 150
  },

  img2: {
    height: 150,
    width: 150
  },

  but1: {
    borderColor: "black",
    borderWidth: 2
  },

  list: {
    marginTop: 100
  }
});
