import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight, Modal, Alert } from 'react-native';
import { Button } from 'react-native-elements';
import background from '../../assets/3459068.jpg'
import navigate from '../navigationRef'
const AuthOptionScreen = ({ navigation }) => {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={styles.container}>
            {/* background */}
            <Image source={background} style={styles.backgroundImage} />
            {/* content */}
            <Image
                style={styles.image}
                source={{
                    uri: 'https://lynagails-caters.s3-ap-southeast-1.amazonaws.com/uploads/Helix/helixsoftware.png',
                }}
            />
            <Button
                title='LOGIN'
                type="outline"
                titleStyle={styles.titleLoginStyle}
                buttonStyle={styles.loginStyle}
                onPress={()=>navigation.navigate('SignIn')}
            />
            <Button
                type="outline"
                titleStyle={styles.titleRegisterStyle}
                title='REGISTER'
                buttonStyle={styles.registerStyle}
                onPress={()=>navigation.navigate('SignUp')}
            />
            {/* Modal */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    Alert.alert("Modal has been closed.");
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Instructions goes here</Text>

                        <TouchableHighlight
                            style={{ ...styles.openButton, backgroundColor: "#2196F3" }}
                            onPress={() => {
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text style={styles.textStyle}>Hide Modal</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </Modal>

            <TouchableHighlight
                style={styles.openButton}
                onPress={() => {
                    setModalVisible(true);
                }}
            >
                <Text style={styles.textStyle}>Show Intrucions</Text>
            </TouchableHighlight>
        </View>
    )
}

const styles = StyleSheet.create({
    image: {
        width: 320,
        alignSelf:'center',
        position:'absolute',
        top:100,
        height: 40,
        marginBottom: 85,
        paddingHorizontal: 15,
    },
    container: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        alignContent: 'space-between',
        marginBottom: 200,
        paddingVertical: 10,
        paddingHorizontal: 5,
        height:'100%',
        // backgroundColor: 'red'
    },

    loginStyle: {
        backgroundColor: '#102E52',
        marginVertical: 5,
        borderRadius: 30,
        height: 60,
        width: 320,

    },
    registerStyle: {
        backgroundColor: '#fff',
        marginVertical: 5,
        borderRadius: 30,
        height: 60,
        width: 320,
    },
    titleLoginStyle: {
        color: '#fff'
    },
    titleRegisterStyle: {
        color: '#102e52'
    },
    backgroundImage: {
        flex: 6,
        resizeMode: 'cover', // or 'stretch'
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
      },
      openButton: {
        backgroundColor: "#fff",
        borderRadius: 5,
        padding: 10,
        elevation: 2,
        alignSelf: 'center',
        // position:'absolute',
        bottom: 0,
        width:'90%',
        height:40
      },
      textStyle: {
        color: "#102E52",
        fontWeight: "bold",
        textAlign: "center"
      },
      modalText: {
        marginBottom: 15,
        textAlign: "center"
      }
})

export default AuthOptionScreen