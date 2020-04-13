import React, { useEffect, useContext, useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

//import CustomTabNavigator from "../../components/CustomTabNavigator/CustomTabNavigator";
import CustomHeader from "../../components/CustomHeader/CustomHeader";

import { Context as SubAccountContext } from '../../context/SubAccountContext';

import { Feather } from '@expo/vector-icons';
import { navigate } from './../../navigationRef';
import trackerAPI from '../../api/api'
const SubAccountGrid = ({ navigation }) => {

    
    const { state, deleteSubAccount } = useContext(SubAccountContext);
    const [ list, setList ] = useState([]);

    useEffect(()=>{
        trackerAPI.get('/subaccounts')
        .then(function (response) {
          setList(response)
        })
        .catch(function (error) {
          console.log(error);
        });
    },[list.data]);
    // console.log(list.data[1]._id)  


    return (
        <View style={{ flex: 1 }}>
            <CustomHeader navigation={navigation} style={{ marginTop: 15 }}>
            </CustomHeader>
            <Text>Sub Account Grid</Text>
            <TouchableOpacity onPress={() => navigate('SubAccountCreate')}>
                <Feather name="plus" size={30} />
            </TouchableOpacity>
            <FlatList
                data={list.data}
                keyExtractor={(subaccount) => subaccount.id}
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigate('SubAccountShow', { id: item._id })}>
                            <View style={styles.row}>
                                <Text style={styles.title}>{item.SubAcct}</Text>
                                <Text style={styles.title}>{item.SubDesc}</Text>
                                <Text style={styles.title}>{item.SubGroup}</Text>
                                <Text style={styles.title}>{item.Active}</Text>
                                <TouchableOpacity onPress={() => deleteSubAccount(item._id)}>
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

