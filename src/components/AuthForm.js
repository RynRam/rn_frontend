import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';
import { Text, Input, Button } from 'react-native-elements';
import Spacer from '../components/Spacer';


const AuthForm = ({ headerText, errorMessage, onSubmit, submitButtonText }) => {
    const [ip, setIp] = useState('192.168.1.1');
    const [database, setDatabase] = useState('demo');
    const [email, setEmail] = useState('ryanzc@gmail.com');
    const [password, setPassword] = useState('123123');
    
   return (
        <>
            <Spacer>

            <Text  style={styles.headerText} h4>{headerText}</Text>
            </Spacer>
           
            <Input label="IP Address" 
                placeholder="IP Address" 
                autoCapitalize="none"
                autoCorrect={false}
                value={ip} 
                onChangeText={setIp}
                labelStyle={styles.label}
                inputContainerStyle={styles.inputContainer}/>
            <Spacer/>
            <Input label="Database" 
                placeholder="Database" 
                autoCapitalize="none"
                autoCorrect={false}
                value={database} 
                onChangeText={setDatabase}
                labelStyle={styles.label}
                inputContainerStyle={styles.inputContainer}/>
            <Spacer/>
            <Input label="Email" 
                placeholder="Email" 
                autoCapitalize="none"
                autoCorrect={false}
                value={email} 
                onChangeText={setEmail}
                labelStyle={styles.label}
                inputContainerStyle={styles.inputContainer}/>
            <Spacer/>
            <Input label="Password" 
                secureTextEntry
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false} 
                value={password} 
                onChangeText={setPassword}
                labelStyle={styles.label}
                inputContainerStyle={styles.inputContainer}
                />
            <Spacer>
                <Button title={submitButtonText} onPress={() => onSubmit({ ip, database,  email, password })} buttonStyle={styles.buttonStyle}/>
                { errorMessage ?  <Text style={styles.errorMessage}>{errorMessage}</Text> : null}
            </Spacer>
            
        </>
   );
};

const styles = StyleSheet.create({
    headerText:{
        textAlign:'center',
        alignSelf: 'center',
        marginBottom: 10,
    },
    errorMessage:{
        fontSize: 16,
        color: '#fff',
        marginTop: 5,
        textAlign:'center',
        backgroundColor: 'red',
        borderRadius: 10,
        height: 25,
    },
    label: {
        color: 'black'
    },
    inputContainer : {
        borderWidth:1,
        borderRadius: 4,
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
});

export default AuthForm;