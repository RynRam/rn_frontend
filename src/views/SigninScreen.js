import React, { useContext, Component } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import AuthForm from '../components/AuthForm';
import NavLink from '../components/NavLink';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Context as AuthContext } from '../context/authContext';
import { NavigationEvents } from 'react-navigation';
import background from '../../assets/3459068.jpg'
const SigninScreen = ({ navigation }) => {
    const { state, signin, clearErrorMessage, tryLocalSignin } = useContext(AuthContext);

    return (
        <SafeAreaProvider>
            <View style={styles.container}>
                <NavigationEvents 
                    onWillBlur={ clearErrorMessage }
                />
                <AuthForm
                    // headerText="Sign In"
                    errorMessage={state.errorMessage}
                    submitButtonText="Sign in"
                    onSubmit={signin}
                />
                <NavLink
                    routeName="SignUp"
                    text="Dont have an account? Sign up instead!"
                />
            </View>
            <Image source={background} style={styles.backgroundImage} />
        </SafeAreaProvider>
    );
};

SigninScreen.navigationOptions = () => {
    return {
        headerShown: true
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 3,
        justifyContent: 'center',
        paddingVertical: 10,
        paddingHorizontal: 5,
        
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover', // or 'stretch'
    }
});

export default SigninScreen;