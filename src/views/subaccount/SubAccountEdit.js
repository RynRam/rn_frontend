import React, {useContext, useState, useEffect} from 'react';
import { StyleSheet } from 'react-native';
import { Context as SubAccountContext } from '../../context/SubAccountContext';
import SubAccountForm from './SubAccountForm';

const SubAccountEdit  = ({ navigation }) => {
    const { state, editSubAccount } = useContext(SubAccountContext)
    const id = navigation.getParam('id')
    const [list,setList] = useState([])
    useEffect(()=>{
        state.then((data) =>{
        const subaccount = data.find((subaccount) => id == subaccount._id );
        setList(subaccount)
        })
    },[state]);
   

    return <SubAccountForm 
    onSubmit={(SubAcct, SubDesc, SubGroup, Active ) => editSubAccount(id,SubAcct,SubDesc,SubGroup, Active,() => navigation.pop())}
    defaultValues={{ SubAcct: list.SubAcct, SubDesc: list.SubDesc, SubGroup: list.SubGroup, Active: list.Active}}
    title="Edit Profile"
    />

}
SubAccountEdit.navigationOptions = () => {
    return {
        headerShown: true
    }
}

const styles = StyleSheet.create({})

export default SubAccountEdit