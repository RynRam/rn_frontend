import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { createAppContainer } from "react-navigation";
import  { createDrawerNavigator } from "react-navigation-drawer"; 
import CustomDrawerNavigator from "./src/components/CustomDrawerNavigator/CustomDrawerNavigator";
import AuthScreen from "./src/views/AuthScreen";
import { Provider as AuthProvider } from './src/context/authContext';
import { Provider as SubAccountProvider } from './src/context/SubAccountContext';
// import { Provider as EmployeeProvider } from './src/context/EmployeeContext';
import ResolvedAuthScreen from "./src/context/ResolvedAuthScreen";
import { setNavigator } from './src/navigationRef';
import Account from './src/views/AccountScreen';
import SubAccountGrid from "./src/views/subaccount/SubAccountGrid";

const MainNavigator = createDrawerNavigator(
  {
    // ResolvedAuth: {
    //   navigationOptions: {
    //     drawerIcon: ({ tintColor }) => (
    //       <Ionicons name="md-home" style={{ color: tintColor }} />
    //     ),
    //     drawerLabel: "ResolvedAuth"
    //   },
    //   screen: ResolvedAuthScreen
    // }
    // ,
    Home: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-home" style={{ color: tintColor }} />
        ),
        drawerLabel: "Home"
      },
      screen: AuthScreen
    }
    // abang na screen dto sa main drawer component edit din dapat sa mainapp.js
    ,
    SubAccount: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-settings" style={{ color: tintColor }} />
        ),
        drawerLabel: "SubAccount"
      }
      ,
      screen: SubAccountGrid
    }
    ,
    Account: {
      navigationOptions: {
        drawerIcon: ({ tintColor }) => (
          <Ionicons name="md-settings" style={{ color: tintColor }} />
        ),
        drawerLabel: "Account"
      }
      ,
      screen: Account
    }
  }
  ,
  {
    contentComponent: CustomDrawerNavigator
  }
);

const MainApp = createAppContainer(MainNavigator);
// export default MainApp;
const heading = '<EmployeeProvider>';
const closing = '<EmployeeProvider>';
export default () => {
  return (
      <AuthProvider>
        <SubAccountProvider>
          <MainApp ref ={ navigator => { setNavigator(navigator); }} />
        </SubAccountProvider>
      
      </AuthProvider>
  );
};


/*import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
*/