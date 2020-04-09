import { createStackNavigator } from "react-navigation-stack";

import Main from "./PageA/Main";
import Secondary from "./PageA/Secondary";

const PageANavigator = createStackNavigator({
  Main: {
    navigationOptions: {
      headerShown: false
    },
    screen: Main
  },
  Secondary: {
    navigationOptions: {
      headerShown: false
    },
    screen: Secondary
  }
});

PageANavigator.navigationOptions = ({ navigation }) => ({
  tabBarVisible: navigation.state.index === 0,
  swipeEnabled: navigation.state.index === 0
});

export default PageANavigator;