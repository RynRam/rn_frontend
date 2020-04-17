import React, { useEffect, useContext, useState } from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";

//import CustomTabNavigator from "../../components/CustomTabNavigator/CustomTabNavigator";
import CustomHeader from "../../components/CustomHeader/CustomHeader";
import { Context as SubAccountContext } from '../../context/SubAccountContext';
import { Feather, AntDesign } from '@expo/vector-icons';
import { navigate } from './../../navigationRef';
import trackerAPI from '../../api/api'
const SubAccountGrid = ({ navigation }) => {
 
    const { state, deleteSubAccount } = useContext(SubAccountContext);
    // console.log(state)
    const [list,setList] = useState([])
    useEffect(()=>{
        state.then((data) =>{
            console.log(data)
            setList(data)
        })
    },[state]);
    return (
        <View style={{ flex: 1 }}>
            <CustomHeader navigation={navigation} style={{ marginTop: 15 }}>
            </CustomHeader>
            <FlatList
                data={list}
                keyExtractor={(subaccount) => subaccount._id && subaccount._id.toString() }
                renderItem={({ item }) => {
                    return (
                        <TouchableOpacity onPress={() => navigate('SubAccountShow', { id: item._id })} >
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
            <TouchableOpacity
             onPress={() => navigate('SubAccountCreate')} 
             style={{position:'absolute',bottom:30,right:20}}>
                <AntDesign 
                name="addfile" 
                size={50} 
                style={{backgroundColor:'#102E52', color:'#fff', borderRadius: 50, padding:10, }} 
              />
            </TouchableOpacity>
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

