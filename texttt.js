import React from "react";
import {
	AppRegistry,
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

const shaorma =
	"https://modo3.com/thumbs/fit630x300/97618/1531832280/%D8%B7%D8%B1%D9%8A%D9%82%D8%A9_%D8%B9%D9%85%D9%84_%D8%A7%D9%84%D8%B4%D8%A7%D9%88%D8%B1%D9%85%D8%A7_%D8%A7%D9%84%D8%AA%D8%B1%D9%83%D9%8A%D8%A9.jpg";
const apple = "https://palsawa.com/img/zCgel.jpg";
const cola =
	"https://www.waselxpress.com/wp-content/uploads/2018/11/Coca-Cola-Can-250-ml.jpg";
const water =
	"https://media.linkonlineworld.com/img/large/2019/2/5/2019_2_5_18_8_57_923.jpg";
export default class texttt extends React.Component {
	state = {
		email: "",
		captions: []
	};

	componentWillMount() {
		firebase
			.database()
			.ref("puplish")
			.on("value", snapshot => {
				const posts = snapshot.val();
				var captions = [];
				for (var key in posts) {
					const caption = posts[key];
					captions.push(caption);
				}
				this.setState({ captions: captions });
			});
	}

	renderItem = ({ item, index }) => {
		// alert(data.item)

		return (
			<View style={{ margin: 30 }}>
				<Image
					style={{ height: 100, width: 100 }}
					source={{ uri: item.url }}
				/>

				<Text>{item.name}</Text>
			</View>
		);
	};

	render() {
		return (
			<ScrollView>
				<FlatList
					numColumns={1}
					contentContainerStyle={styles.View}
					data={this.state.captions}
					renderItem={this.renderItem}
				></FlatList>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	View: {
		flex: 1,
		alignItems: "center",
		// justifyContent: 'center',
		backgroundColor: "#55E6C1"
	},

	input: {
		backgroundColor: "red",
		width: 100
	},

	item: {}
});
