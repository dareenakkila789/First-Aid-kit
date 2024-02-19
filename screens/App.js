import {
	createAppContainer,
	createBottomTabNavigator,
	createStackNavigator
} from "react-navigation";
import Home from "./screens/profile.js";
import Emergincies from "./screens/Emergincies.js";
import Courses from "./screens/create.js";
import contents from "./screens/content.js";
import Details from "./screens/Details.js";

const CreateStack = createStackNavigator({
	Emergincies: Emergincies,
	Details: Details
});

const Tabs = createBottomTabNavigator(
	{
		Home: Home,
		//Emergincies: CreateStack,
		Emergincies: CreateStack,
		Courses: Courses,
		Contents: contents
	},
	{
		tabBarOptions: {
			activeTintColor: "#e91e63",
			labelStyle: {
				fontSize: 13,
				paddingBottom: 10
			}
		}
	}
);

const App = createAppContainer(Tabs);
export default App;
