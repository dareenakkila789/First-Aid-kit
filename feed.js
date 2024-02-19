import React from "react";
import {
	StyleSheet,
	Text,
	View,
	Image,
	FlatList,
	ScrollView,
	TextInput,
	TouchableOpacity
} from "react-native";

import * as firebase from "firebase";
import uuid from "uuid";
export default class feed extends React.Component {
	state = {
		name: ""
	};

	handlePress = () => {
		this.uploadImage(this.props.navigation.getParam("uri")).then(url => {
			console.log(url);
			firebase
				.database()
				.ref("puplish")
				.push({ url: url, name: this.state.name });
		});
	};

	render() {
		return (
			<View>
				<Image
					style={{ width: 50, height: 70 }}
					source={{ uri: this.props.navigation.getParam("uri") }}
				/>
				<TextInput
					placeholder="caption"
					multiline={true}
					onChangeText={text => {
						this.setState({ name: text });
					}}
					value={this.state.name}
				/>
				<TouchableOpacity onPress={this.handlePress}>
					<Text> Click me </Text>
				</TouchableOpacity>
			</View>
		);
	}
	uploadImage = uri => {
		const imagesRef = firebase
			.storage()
			.ref()
			.child("images")
			.child(uuid.v4());

		const downloadURLPromise = new Promise((resolve, reject) => {
			const xhr = new XMLHttpRequest();
			xhr.onload = function() {
				const blob = xhr.response;
				console.log(blob);
				var uploadTask = imagesRef.put(blob);

				uploadTask
					.then(snapshot => {
						snapshot.ref
							.getDownloadURL()
							.then(function(downloadURL) {
								console.log("File available at", downloadURL);
								resolve(downloadURL);
							})
							.catch(error => {
								reject(error);
							});
					})
					.catch(error => {
						reject(error);
					});
			};
			xhr.onerror = function(error) {
				reject(error);
			};

			xhr.responseType = "blob";
			xhr.open("GET", uri, true);
			xhr.send(null);
		});

		return downloadURLPromise;
	};
}

//	<FlatList
//		style={{ backgroundColor: "pink", flex: 1 }}
//		numColumns={4}
//		data={[
//			{ uri: cloud1, caption: "Hi!" },
//			{ uri: cloud2, caption: "Helloo!" },
//			{ uri: cloud3, caption: "What's up!" },
//			{ uri: cloud4, caption: "hhhhhh!" }
//		]}
//		renderItem={({ item }) => {
//			return (
