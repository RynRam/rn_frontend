import React, {useState, useContext} from 'react';
import { Text, View, TextInput, StyleSheet, Button, RefreshControl, Alert } from 'react-native';
import SafeAreViewProvider from 'react-native-safe-area-context';
const SubAccountForm  = ({ onSubmit, defaultValues }) => {
    const [SubAcct,setSubAcct] = useState(defaultValues.SubAcct);
    const [SubDesc,setSubDesc] = useState(defaultValues.SubDesc);
    const [SubGroup,setSubGroup] = useState(defaultValues.SubGroup);
    const [Active,setActive] = useState(defaultValues.Active);

    return (
        <View style={{marginTop:25}}>
            <Text style={styles.label}> Sub-Account </Text>
            <TextInput style={styles.input} value={SubAcct} onChangeText={(SubAcct)=> setSubAcct(SubAcct)}/>
            <Text style={styles.label}> Sub-Description </Text>
            <TextInput  style={styles.input} value={SubDesc} onChangeText={(SubDesc)=> setSubDesc(SubDesc)} />
            <Text style={styles.label}> Sub-Group </Text>
            <TextInput style={styles.input} value={SubGroup} onChangeText={(SubGroup)=> setSubGroup(SubGroup)}/>
            <Text style={styles.label}> Active </Text>
            <TextInput  style={styles.input} value={Active} onChangeText={(Active)=> setActive(Active)} />
            <Button title="Save" onPress={()=> onSubmit(SubAcct,SubDesc,SubGroup,Active)} />
        </View>
    )   
}
SubAccountForm.defaultProps = {
    defaultValues: {
        SubAcct: '',
        SubDesc: '',
        SubGroup: '',
        Active: '',
    }
}
const styles = StyleSheet.create({
    input: {
        fontSize: 18,
        borderWidth: 1,
        borderColor: 'black'
    },
    label : {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 5
    }
})

export default SubAccountForm;