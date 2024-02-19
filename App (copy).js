import {
	createAppContainer,
	createBottomTabNavigator,
	createStackNavigator
} from "react-navigation";
import * as firebase from "firebase";
import profile from "./screens/profile.js";
import feed from "./screens/feed.js";
import create from "./screens/create.js";
import text from "./screens/texttt.js";
import login from "./screens/login.js";

// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyCkGVrztrgJ9ebNrbsI3O1Pbvzau6ojAps",
	authDomain: "my-instagram-1cc54.firebaseapp.com",
	databaseURL: "https://my-instagram-1cc54.firebaseio.com",
	projectId: "my-instagram-1cc54",
	storageBucket: "my-instagram-1cc54.appspot.com",
	messagingSenderId: "274680227321",
	appId: "1:274680227321:web:a236408cb17a1c0a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const CreateStack = createStackNavigator({
	create: create,
	feed: feed
});

const Tabs = createBottomTabNavigator({
	Account: profile,
	create: CreateStack,
	Home: text,
	login: login
});

const App = createAppContainer(Tabs);
export default App;
