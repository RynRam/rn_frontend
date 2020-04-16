import { createStackNavigator } from "react-navigation-stack";

import SigninScreen from "./SigninScreen";
import SignupScreen from "./SignupScreen";
import HomeScreen from "../views/Home";
import SubAccountGridScreen from "../views/subaccount/SubAccountGrid";
import SubAccountCreateScreen from "../views/subaccount/SubAccountCreate";
import SubAccountShowScreen from "../views/subaccount/SubAccountShow";
import SubAccountEditScreen from "../views/subaccount/SubAccountEdit";
import AuthOptionScreen from "./AuthOptionScreen";

import ResolvedAuthScreen from "../context/ResolvedAuthScreen";


const AuthScreen = createStackNavigator({
  ResolveAuth: ResolvedAuthScreen,
  AuthOption: AuthOptionScreen,
  SignIn: SigninScreen,
  SignUp: SignupScreen,
  HomeS: HomeScreen,
  SubAccountEdit: SubAccountEditScreen,
  SubAccountShow: SubAccountShowScreen,
  SubAccountGrid: SubAccountGridScreen,
  SubAccountCreate: SubAccountCreateScreen
},{
  initialRouteName: 'AuthOption',
  defaultNavigationOptions:{
    // headerMode: 'none',
    headerShown: false,
  }
});

// AuthScreen.navigationOptions = ({ navigation }) =>{
//   navigation.navigate("Secondary")
//   navigator => { setNavigator(navigator); console.log(navigator); }
// };

AuthScreen.navigationOptions = ({ navigation }) => ({
  tabBarVisible: navigation.state.index === 0,
  swipeEnabled: navigation.state.index === 0
});

export default AuthScreen;
