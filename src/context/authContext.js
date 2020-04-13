import { AsyncStorage } from 'react-native';
import createDataContext from './createDataContext';
import trackerApi from '../api/api';
import { navigate } from '../navigationRef';


const authReducer = (state, action) => {
    switch (action.type) {
        // case 'add_error':
        //     return { ...state, errorMessage: action.payload };
        case 'signin':
            return { errorMessage: '', token: action.payload };
        case 'clear_error_message':
            return { ...state, errorMessage: '' };
        case 'signout':
            return { errorMessage: '', token: '' };
        default:
            return state;
    }
};

const tryLocalSignin = dispatch => async () => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
        dispatch({ type: 'signin', payload: token });
        navigate('Home');
    } else {
        navigate('Signin');
    }
};

const clearErrorMessage = dispatch => () => {
    dispatch({ type: 'clear_error_message' });
};


const signup = dispatch => async ({ ip, database, email, password }, callback) => {
    try {
        const response = await trackerApi.post('/signup', { ip, database, email, password });
        if (response) {
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'signin', payload: response.data.token });
            // await AsyncStorage.getItem('token');
            // console.log(response.data);
            // if(callback){
            //     callback();
            // }
        }
        navigate('Home');
    } catch (err) {
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign up' })
    }
};

const signin = dispatch => async ({ ip, database, email, password }, callback) => {
    try {
        const response = await trackerApi.post('/signin', { ip, database, email, password });

        if (response) {
            await AsyncStorage.setItem('token', response.data.token);
            dispatch({ type: 'signin', payload: response.data.token });
            navigate('HomeS');
        }
    } catch (err) {
        console.log(err.response.data);
        dispatch({ type: 'add_error', payload: 'Something went wrong with sign in' })
    }
};

const signout = (dispatch) => async ({ email, password }) => {
    await AsyncStorage.removeItem('token');
    dispatch({ type: 'signout' });
    navigate('SignIn');
};

export const { Provider, Context } = createDataContext(
    authReducer,
    { signin, signup, clearErrorMessage, signout, tryLocalSignin },
    { token: null, errorMessage: '' }
);


