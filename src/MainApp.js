import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator } from "react-navigation-drawer";

import CustomDrawerNavigator from "./components/CustomDrawerNavigator";
import { Provider as MainAppProvider } from './context/SubAccountContext';
import { setNavigator } from './navigationRef';
import Home from "./views/Home";
import Account from "./views/AccountScreen";
import SubAccountGrid from "./views/subaccount/SubAccountGrid";
// import Settings from "./views/Settings";
// import About from "./views/About";

const MainNavigator = createDrawerNavigator(
  {
    Home: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-home" style={{ color: tintColor }} />
        ),
        drawerLabel: "Home"
      },
      screen: Home
    },
    SubAccount: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-home" style={{ color: tintColor }} />
        ),
        drawerLabel: "Sub Account"
      },
      screen: SubAccountGrid
    },
    Account: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-settings" style={{ color: tintColor }} />
        ),
        drawerLabel: "Account"
      },
      screen: Account
    }
    
    // ,
    // About: {
    //   navigationOptions: {
    //     drawerIcon: ({ tintColor }) => (
    //       <Ionicons name="ios-person" style={{ color: tintColor }} />
    //     ),
    //     drawerLabel: "About"
    //   },
    //   screen: About
    // }
  },
  {
    initialRouteName: 'Home'
    
    // ,
    // headerMode: 'none'
  },
  {
    contentComponent: CustomDrawerNavigator
  }
);

// const MainApp = createAppContainer(MainNavigator);
// export default MainApp;

const MainApp = createAppContainer(MainNavigator);
// export default MainApp;

export default () => {
  return (
      <MainAppProvider>
        <MainApp ref ={ navigator => { setNavigator(navigator); }} />
      </MainAppProvider>
  );
};