import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInputm,
  CameraRoll,
  FlatList,
  PermissionsAndroid
} from "react-native";
import { Permissions } from "expo";

export default class create extends React.Component {
  state = {
    images: [],
    selectedIndex: 0
  };

  onPress = () => {
    this.props.navigation.navigate("feed");
  };
  componentDidMount() {
    Permissions.askAsync(Permissions.CAMERA_ROLL);
    CameraRoll.getPhotos({
      assetType: "Photos",
      first: 5
    })
      .then(results => {
        console.log("done");
        console.log(results);
        var list = [];
        for (var i = 0; i < results.edges.length; i++) {
          var uri = results.edges[i].node.image.uri;
          list.push(uri);

          console.log(uri);
          this.setState({ images: list });
        }
      })
      .catch(error => {
        console.log("error");
        console.log(error);
      });
    console.log("hello");
  }

  render() {
    return (
      <FlatList
        style={{ backgroundColor: "pink", flex: 1 }}
        numColumns={5}
        data={this.state.images}
        renderItem={({ item, index }) => {
          return (
            <View>
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("feed", { uri: item });
                }}
              >
                <Image style={styles.image} source={{ uri: item }} />
              </TouchableOpacity>
            </View>
          );
        }}
      ></FlatList>
    );
  }
}

const styles = StyleSheet.create({
  image: {
    width: 80,
    height: 120
  }
});
