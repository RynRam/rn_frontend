import React, {useState, useContext} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Input, Button } from 'react-native-elements'
const SubAccountForm  = ({ onSubmit, defaultValues }) => {
    const [SubAcct,setSubAcct] = useState(defaultValues.SubAcct);
    const [SubDesc,setSubDesc] = useState(defaultValues.SubDesc);
    const [SubGroup,setSubGroup] = useState(defaultValues.SubGroup);
    const [Active,setActive] = useState(defaultValues.Active);

    return (
        <View style={{flex:1, alignContent:'center', justifyContent:'center'}}>
            <Text style={styles.label}> Sub-Account </Text>
            <Input style={styles.input} inputContainerStyle={styles.inputContainer} value={SubAcct} onChangeText={(SubAcct)=> setSubAcct(SubAcct)}/>
            <Text style={styles.label}> Sub-Description </Text>
            <Input  style={styles.input} inputContainerStyle={styles.inputContainer} value={SubDesc} onChangeText={(SubDesc)=> setSubDesc(SubDesc)} />
            <Text style={styles.label}> Sub-Group </Text>
            <Input style={styles.input} inputContainerStyle={styles.inputContainer} value={SubGroup} onChangeText={(SubGroup)=> setSubGroup(SubGroup)}/>
            <Text style={styles.label}> Active </Text>
            <Input  style={styles.input} inputContainerStyle={styles.inputContainer} value={Active} onChangeText={(Active)=> setActive(Active)} />
            <Button title="Save" buttonStyle={styles.buttonStyle} onPress={()=> onSubmit(SubAcct,SubDesc,SubGroup,Active)} />
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
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5
    },
    inputContainer : {
        borderWidth:2,
        borderRadius: 10,
        borderColor:'#102E52', 
        padding: 5,
    },
    buttonStyle: { 
        backgroundColor: '#102E52', 
        marginVertical: 15, 
        borderRadius: 25, 
        height: 50, 
        alignSelf: 'center', 
        width:250
    }
})

export default SubAccountForm;