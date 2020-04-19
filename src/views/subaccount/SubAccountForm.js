import React, {useState, useContext} from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Input, Button, Card } from 'react-native-elements'
import { EvilIcons, 
    Entypo} from '@expo/vector-icons';
const SubAccountForm  = ({ onSubmit, defaultValues, title }) => {

    const [SubAcct,setSubAcct] = useState(defaultValues.SubAcct);
    const [SubDesc,setSubDesc] = useState(defaultValues.SubDesc);
    const [SubGroup,setSubGroup] = useState(defaultValues.SubGroup);
    const [Active,setActive] = useState(defaultValues.Active);
    
    return (
        <View style={{justifyContent: 'center',flex:6}}>
        <Card
            containerStyle={{ marginTop: 25, justifyContent: 'center',  }}
            title={title}>
            <View style={styles.viewRow}>
                <Text style={styles.label}> Sub-Account </Text>
                <Input style={styles.input} inputContainerStyle={styles.inputContainer} value={SubAcct} onChangeText={(SubAcct)=> setSubAcct(SubAcct)}/>
            </View>
            <View style={styles.viewRow}>
                <Text style={styles.label}> Sub-Description </Text>
                <Input  style={styles.input} inputContainerStyle={styles.inputContainer} value={SubDesc} onChangeText={(SubDesc)=> setSubDesc(SubDesc)} />
            </View>
            <View style={styles.viewRow}>
                <Text style={styles.label}> Sub-Group </Text>
                <Input style={styles.input} inputContainerStyle={styles.inputContainer} value={SubGroup} onChangeText={(SubGroup)=> setSubGroup(SubGroup)}/>
            </View>
            <View style={styles.viewRow}>
                <Text style={styles.label}> Active </Text>
                <Input  style={styles.input} inputContainerStyle={styles.inputContainer} value={Active} onChangeText={(Active)=> setActive(Active)} />
            </View>

            <Button
                icon={<Entypo name="save" size={25} color="#ffffff" style={{marginRight:5}} />}
                buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: 20, backgroundColor: '#102E52'}}
                title='SAVE'
                onPress={()=> onSubmit(SubAcct,SubDesc,SubGroup,Active)}/>
        </Card>
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
    boldText: {
        fontWeight: 'bold',
        fontSize: 20
    },
    viewRow: {
        flexDirection: 'column',
        marginVertical: 5
    },
    sizeText: {
        fontSize: 20
    },
    input: {
        fontSize: 14,
        borderWidth: 1,
        borderColor: 'black',
    },
    label : {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5
    },
    inputContainer : {
        borderWidth:1,
        borderRadius: 4,
        borderColor:'#102E52', 
        padding: 2,
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