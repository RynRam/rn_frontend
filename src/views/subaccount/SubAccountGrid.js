import React, { Component, useContext } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

//import CustomTabNavigator from "../../components/CustomTabNavigator/CustomTabNavigator";
import CustomHeader from "../../components/CustomHeader/CustomHeader";

import { Context as SubAccountContext } from '../../context/SubAccountContext';
import { Feather } from '@expo/vector-icons';
import { navigate } from './../../navigationRef';


const SubAccountGrid = ({ navigation }) =>{
  const { state, deleteSubAccount } = useContext(SubAccountContext);
  return (
      <View style={{ flex: 1 }}>
        <CustomHeader navigation={navigation} style={{marginTop: 15}}>
        </CustomHeader>
        <Text>Sub Account Grid</Text>
        <TouchableOpacity onPress={() => navigate('SubAccountCreate')}>
            <Feather name="plus" size={30} />
        </TouchableOpacity>
        <FlatList
                data={state}
                keyExtractor={(subaccount) => subaccount.id.toString()}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity  onPress={()=> navigate('SubAccountShow', {id: item.id})}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.SubAcct}</Text>
                                <Text style={styles.title}>{item.SubDesc}</Text>
                                <Text style={styles.title}>{item.SubGroup}</Text>
                                <Text style={styles.title}>{item.Active}</Text>
                                <TouchableOpacity onPress={() => deleteSubAccount(item.id)}>
                                    <Feather name="trash" style={styles.icons} />
                                </TouchableOpacity>
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        {/* <CustomTabNavigator navigation={this.props.navigation} /> */}
      </View>
    );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomWidth: 1,
        paddingVertical: 20
    },
    title: {
        fontSize: 18
    },
    icons: {
        fontSize: 24
    }

})
export default SubAccountGrid;

