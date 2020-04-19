import React, { Component } from "react";
import { View, Text } from "react-native";
import { Overlay, SocialIcon } from 'react-native-elements';
import CustomTabNavigator from "../components/CustomTabNavigator/CustomTabNavigator";
import CustomHeader from "../components/CustomHeader/CustomHeader";

export default class Home extends Component {
  static router = CustomTabNavigator.router;
  constructor(props) {
    super(props)
    this.state = {
      isVisible: true,
    };
  }

  //<CustomTabNavigator navigation={this.props.navigation} />
  render() {
    return (
      <View style={{ flex: 1 }}>
        <CustomHeader navigation={this.props.navigation} title="Home Dashboard" style={{ marginTop: 15 }} />
        <SocialIcon
          title='Sign In With Facebook'
          button
          type='facebook'
        />

        <SocialIcon
          title='Some Twitter Message'
          button
          type='twitter'
        />

        <SocialIcon
          button
          type='medium'
        />

        <SocialIcon
          button
          light
          type='instagram'
        />

        <Overlay
          isVisible={this.state.isVisible}
          onBackdropPress={() => this.setState({ isVisible: false })}
        >
          <Text style={{ fontSize: 20, fontWeight: 'bold', marginBottom: 5 }}>Welcome User,</Text>
          <Text style={{ fontSize: 17, textAlign: 'justify', lineHeight: 30 }} >Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Text>
        </Overlay>
      </View>
    );
  }
}





