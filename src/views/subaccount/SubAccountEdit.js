import React, {useContext, useState, useEffect} from 'react';
import { StyleSheet } from 'react-native';
import { Context as SubAccountContext } from '../../context/SubAccountContext';
import SubAccountForm from './SubAccountForm';
import trackerAPI from '../../api/api'

const SubAccountEdit  = ({ navigation }) => {
    const { state, editSubAccount } = useContext(SubAccountContext)
    const id = navigation.getParam('id')
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
    console.log(list.SubDesc);
    // const subaccount = state.find((data) => data.id === id)
    return <SubAccountForm 
    onSubmit={(SubAcct, SubDesc, SubGroup, Active)=> editSubAccount(id,SubAcct,SubDesc,SubGroup, Active,() => navigation.pop())}
    defaultValues={{ SubAcct: list.SubAcct, SubDesc: list.SubDesc, SubGroup: list.SubGroup, Active: list.Active}}
    />

}

const styles = StyleSheet.create({})

export default SubAccountEdit