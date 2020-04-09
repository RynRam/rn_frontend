import { createStackNavigator } from "react-navigation-stack";

import Main from "./PageA/Main";
import Secondary from "./PageA/Secondary";

const PageBNavigator = createStackNavigator({
  Main: {
    navigationOptions: {
      headerShown: false
    },
    screen: Secondary
  }
});

PageBNavigator.navigationOptions = ({ navigation }) => ({
  tabBarVisible: navigation.state.index === 0,
  swipeEnabled: navigation.state.index === 0
});

export default PageBNavigator;