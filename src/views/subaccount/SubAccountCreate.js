import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context as SubAccountContext } from '../../context/SubAccountContext';
import SubAccountForm from './SubAccountForm';
import { navigate } from './../../navigationRef';

const SubAccountCreateScreen  = ({navigation}) => {

    const { addSubAccount } = useContext(SubAccountContext)

    return <SubAccountForm 
        onSubmit={(SubAcct, SubDesc, SubGroup, Active)=>addSubAccount(SubAcct, SubDesc, SubGroup, Active, () => navigate('SubAccountGrid'))}
    />
  
}

SubAccountCreateScreen.navigationOptions = () => {
    return {
        headerShown: true
    }
}

const styles = StyleSheet.create({});

export default SubAccountCreateScreen;