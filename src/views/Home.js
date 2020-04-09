import React, { Component } from "react";
import { View } from "react-native";

import CustomTabNavigator from "../components/CustomTabNavigator/CustomTabNavigator";
import CustomHeader from "../components/CustomHeader/CustomHeader";

export default class Home extends Component {
  static router = CustomTabNavigator.router;

  render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader navigation={this.props.navigation} style={{marginTop: 15}} />
        <CustomTabNavigator navigation={this.props.navigation} />
      </View>
    );
  }
}