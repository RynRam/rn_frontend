import React, {useContext, } from 'react';
import { StyleSheet } from 'react-native';
import { Context as SubAccountContext } from '../../context/SubAccountContext';
import SubAccountForm from './SubAccountForm';
const SubAccountEdit  = ({ navigation }) => {
    const { state, editSubAccount } = useContext(SubAccountContext)
    const id = navigation.getParam('id')
    const subaccount = state.find((data) => data.id === id)
    return <SubAccountForm 
    onSubmit={(SubAcct, SubDesc, SubGroup, Active)=> editSubAccount(id,SubAcct,SubDesc,SubGroup, Active,() => navigation.pop())}
    defaultValues={{ SubAcct: subaccount.SubAcct, SubDesc: subaccount.SubDesc, SubGroup: subaccount.SubGroup, Active: subaccount.Active}}
    />

}

const styles = StyleSheet.create({})

export default SubAccountEdit