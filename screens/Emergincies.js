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

export default class Emergencies extends React.Component {
	handlePress = item => {
		this.props.navigation.navigate("Details", {
			name: item.name,
			image: item.image,
			data1: item.data1,
			image2: item.image2,
			caption: item.caption
		});
	};
	render() {
		return (
			<ScrollView cotentContainerStyle={styles.container}>
				<View style={styles.container}>
					<Text
						style={{
							fontSize: 20,
							alignItems: "center",
							justifyContent: "center",
							marginTop: 20,
							padding: 10,

							borderWidth: 3,
							borderColor: "red"
						}}
					>
						Emergency situations!
					</Text>
					<FlatList
						style={styles.list}
						data={people}
						keyExtractor={(item, index) => item.id}
						renderItem={({ item }) => (
							<TouchableOpacity
								onPress={() => this.handlePress(item)}
							>
								<Text style={{ color: "red", fontSize: 20 }}>
									{item.name}{" "}
								</Text>
								<Image
									style={styles.img1}
									source={item.image}
								/>
							</TouchableOpacity>
						)}
					/>
				</View>
			</ScrollView>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		alignItems: "center",
		justifyContent: "center"
	},

	img1: {
		height: 150,
		width: 150,
		marginBottom: 15
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
		marginTop: 60
	}
});

// const images = {
//   Amna: require("../assets/abood.png"),
//   Amna: require("../assets/abood.png"),
//   Amna: require("../assets/abood.png")
// };

const people = [
	{
		name: "Heat Stroke",
		image: require("../assets/pic1.jpg"),
		image2: require("../assets/pic2.jpg"),
		data1:
			"● Transfer the casualty to the shade away from direct sunlight \n● if possible, to a cold place, let the patient lie on his back. \n● If there are no signs of life, start life-saving procedures. \n● remove the injured clothes and keep clothes \n● Use a sponge or wet towel and wet with cold water, especially on the head and limbs."
		// caption: " cat's lover"
	},

	{
		name: "Choking",
		image: require("../assets/pic3.jpg"),
		image2: require("../assets/pic4.jpg"),
		data1:
			"● Stand behind the casualtyPlace\n your fist slightly above your chest,\n lower your chest bone (the cage bone)\n and slightly hurt the forearm.  \n● Put your hand in the other hand and pull both hands toward you. \n● Abdominal work should continue to work.  Repeat this until the UFO is ejected."
		//caption: "crazy",
	},

	{
		name: "Burn",
		image: require("../assets/pic5.jpg"),
		image2: require("../assets/pic6.jpg"),
		data1:
			"● Cool the burn under running water for alteast 10 minutes \n● Protect the burn ,with sterile ,\n non-adhesivr bandage Do not apply butter or ointments ,which can cause infection Don't break blisters. \n● If it breakd,gently clean the area.Take an counter pain reliever If it is a serious burn."
	},

	{
		name: "Bleeding",
		image: require("../assets/pic7.jpg"),
		image2: require("../assets/pic8.jpg"),
		data1:
			"● Check the level of awareness of the casualty and the security of the airway.  \n● Calming the casualty as much as possible to minimize the movement of the injured member.\n● The patient is covered with a blanket or additional clothing.\n ● Cover the open wound with a sterile gauze. Fix the broken or removed organ with a handpiece. Put bandages around it and tighten it tightly to prevent movement.\n● Do not know the blood circulation. Calm the patient and transfer him to the nearest loving institution."
	},

	{
		name: "Drowning",
		image: require("../assets/pic9.jpg"),
		image2: require("../assets/pic10.jpg"),
		data1:
			" ●Immediately remove the victim from the water\n immediately remove any obstructions that may be in the mouth\n of the sludge (such as seaweed),\n ● placing it on a hard surface (such as beach sand or pool shoulder or boat surface).  \n  ● Check the speed of breathing and pulse,\n and if breathing stops, start the process of artificial respiration,\n mouth to mouth (and if the heart is also stopped, apply CPR). \n  ● As soon as the person starts breathing, extend it to a comfortable rescue position (placed on his face and head,\n facing one side and his lower upper extremity slightly flexed at the knee). \n 4) Take off his wet clothes if possible, dry his body and cover with towels or dry clothes to prevent the cold, and treatment of low temperature if necessary. \n  5) Arrange for transfer to the hospital as soon as possible, while maintaining treatment status."
	}
];
