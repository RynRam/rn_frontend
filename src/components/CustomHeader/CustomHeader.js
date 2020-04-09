import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, TouchableOpacity,Text, Image } from "react-native"; 

import styles from "../CustomHeader/styles";
const CustomHeader = ({ navigation }) => (
    <View style={[styles.container]}>
        <TouchableOpacity style={[styles.icon]} >
            <Ionicons
                name="md-menu"
                size={32}
                color="black"
                onPress={() => navigation.openDrawer()}
            />
            <Text style={[styles.txt]} >Dash board</Text>
        </TouchableOpacity>
    </View>
  );
  
  export default CustomHeader;