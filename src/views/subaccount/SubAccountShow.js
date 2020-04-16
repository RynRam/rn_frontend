import React, { useContext } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Context as SubAccountContext } from '../../context/SubAccountContext'
import { EvilIcons } from '@expo/vector-icons';
import { navigate } from './../../navigationRef';

const SubAccountShowScreen  = ({navigation}) => {

    const { state } = useContext(SubAccountContext);

    const id = navigation.getParam('id');

    const subaccount = state.find((subaccount) => id == id );
    return (
        <View style={{marginTop: 25}}>
            <TouchableOpacity onPress={() => navigate('SubAccountEdit',{ id: id })}>
                <EvilIcons name="pencil" size={30} />
            </TouchableOpacity>
            <Text> {subaccount.SubAcct} </Text>
            <Text> {subaccount.SubDesc} </Text>
            <Text> {subaccount.SubGroup} </Text>
            <Text> {subaccount.Active} </Text>
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