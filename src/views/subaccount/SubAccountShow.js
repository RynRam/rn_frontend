import React, {useContext, useState, useEffect} from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Context as SubAccountContext } from '../../context/SubAccountContext'
import { EvilIcons } from '@expo/vector-icons';
import { navigate } from './../../navigationRef';
import trackerAPI from '../../api/api'


const SubAccountShowScreen  = ({navigation}) => {

    console.log("ShobAcctEditShow");
    const { state } = useContext(SubAccountContext);
    const id = navigation.getParam('id');
    const [ list, setList ] = useState([]);

    useEffect(()=>{
        trackerAPI.get(`/subaccounts/${id}`)
        .then(function (response) {
          setList(response.data)
        })
        .catch(function (error) {
          console.log(error);
        });
    },[list.data]);
    console.log(list._id)
    // const subaccount = state.find((subaccount) => subaccount._id == id );
    return (
        <View style={{marginTop: 25}}>
            
            <TouchableOpacity onPress={() => navigate('SubAccountEdit',{ id: list._id })}>
                <EvilIcons name="pencil" size={30} />
            </TouchableOpacity>
            <Text> {list.SubAcct} </Text>
            <Text> {list.SubDesc} </Text>
            <Text> {list.SubGroup} </Text>
            <Text> {list.Active} </Text>
        </View>
    )   
}
// SubAccountShowScreen.navigationOptions = ({ navigation }) => {
//     const id = navigation.getParam('id');
//     return {
//         headerRight: () => (
//            <TouchableOpacity onPress={() => navigation.navigate('SubAccountEdit',{ id: id })}>
//                <EvilIcons name="pencil" size={30} />
//            </TouchableOpacity>
//         ) 
//     }
//    }

const styles = StyleSheet.create({})

export default SubAccountShowScreen