import React, { useContext, useState, useEffect } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Card, Button } from 'react-native-elements'
import { Context as SubAccountContext } from '../../context/SubAccountContext'
import { EvilIcons, FontAwesome5 } from '@expo/vector-icons';
import { navigate } from './../../navigationRef';

const SubAccountShowScreen = ({ navigation }) => {

    const { state } = useContext(SubAccountContext);
    const id = navigation.getParam('id');
    const [list, setList] = useState([])

    useEffect(() => {
        state.then((data) => {
            const subaccount = data.find((subaccount) => id == subaccount._id);
            setList(subaccount)
        })
    }, [state]);
    return (
        <View style={{justifyContent: 'center',flex:1}}>
            <Card
                containerStyle={{ marginTop: 25, justifyContent: 'center',  }}
                title='Welcome To Profile'>
                <View style={styles.viewRow}>
                    <Text style={styles.boldText}>Sub Account : </Text>
                    <Text style={styles.sizeText}> {list.SubAcct} </Text>
                </View>

                <View style={styles.viewRow}>
                    <Text style={styles.boldText}>Sub Description : </Text>
                    <Text style={styles.sizeText}> {list.SubDesc}  </Text>
                </View>
                
                <View style={styles.viewRow}>
                    <Text style={styles.boldText}>Sub Group : </Text>
                    <Text style={styles.sizeText}> {list.SubGroup} </Text>
                </View>

                <View style={styles.viewRow}>
                    <Text style={styles.boldText}>Account Status : </Text>
                    <Text style={styles.sizeText}>{list.Active} </Text>
                </View>

                <Button
                    icon={<EvilIcons name="pencil" size={30} color="#ffffff" />}
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, marginTop: 20, backgroundColor: '#102E52'}}
                    title='EDIT NOW'
                    onPress={() => navigate('SubAccountEdit', { id: list._id })} />
            </Card>
        </View>
    )
}
SubAccountShowScreen.navigationOptions = () => {
    return {
        headerShown: true
    }
}
const styles = StyleSheet.create({
    boldText: {
        fontWeight: 'bold',
        fontSize: 20
    },
    viewRow: {
        flexDirection: 'row'
    },
    sizeText: {
        fontSize: 20
    }

})

export default SubAccountShowScreen