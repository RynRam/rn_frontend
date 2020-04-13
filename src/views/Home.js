import React, { Component } from "react";
import { View } from "react-native";

import CustomTabNavigator from "../components/CustomTabNavigator/CustomTabNavigator";
import CustomHeader from "../components/CustomHeader/CustomHeader";

export default class Home extends Component {
  static router = CustomTabNavigator.router;
  //<CustomTabNavigator navigation={this.props.navigation} />
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader navigation={this.props.navigation} style={{marginTop: 15}} />
        
      </View>
    );
  }
}