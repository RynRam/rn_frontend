import React, {useContext, useState, useEffect} from 'react';
import { StyleSheet } from 'react-native';
import { Context as SubAccountContext } from '../../context/SubAccountContext';
import SubAccountForm from './SubAccountForm';
import trackerAPI from '../../api/api'

const SubAccountEdit  = ({ navigation }) => {
    const { state, editSubAccount } = useContext(SubAccountContext)
    const id = navigation.getParam('id')
    console.log(id);
    const subaccount = state.find((subaccount) => subaccount._id == id );
    console.log(subaccount);

    return <SubAccountForm 
    onSubmit={(SubAcct, SubDesc, SubGroup, Active)=> editSubAccount(id,SubAcct,SubDesc,SubGroup, Active,() => navigation.pop())}
    defaultValues={{ SubAcct: subaccount.SubAcct, SubDesc: subaccount.SubDesc, SubGroup: subaccount.SubGroup, Active: subaccount.Active}}
    />

}

const styles = StyleSheet.create({})

export default SubAccountEdit