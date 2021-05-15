import createDataContext from './createDataContext'
import { _storeData, _removeItem, _retrieveData } from "../utils";
import { navigate } from '../navigationRef';
import auth from '@react-native-firebase/auth';

const authReducer = (state, action) => {
    switch (action.type) {
        case 'add_error':
            return { ...state, errorMessage: action.payload }
        case 'login':
            return { errorMessage: '', token: action.payload }
        case 'clear_err':
            return { ...state, errorMessage: '' }
        default:
            return state;
    }
};

const loginOrRegister = (dispatch) => {
    return ({ email, password }) => {
        const data = { email, password }
        _storeData("user", JSON.stringify(data)).then(() => {
            setUser(data);
        })
        auth().signInWithEmailAndPassword(email, password).then((response) => {
            console.log(response.uid)
            dispatch({ type: 'login', payload: response.user });
            // callback();
        }).catch(err => {
            auth().createUserWithEmailAndPassword(email, password)
                .then((response) => {
                    dispatch({ type: 'login', payload: response.user });
                    console.log('User account created & signed in!');
                }).catch(error => {
                    if (error.code === 'auth/email-already-in-use') {
                        console.log('That email address is already in use!');
                        dispatch({ type: 'add_error', payload: 'That email address is already in use!' });
                    }
                    if (error.code === 'auth/invalid-email') {
                        console.log('That email address is invalid!');
                        dispatch({ type: 'add_error', payload: 'That email address is invalid!' });
                    }
                    console.error(error);
                    dispatch({ type: 'add_error', payload: error });
                })
        })
    }
}

const clearErrorMsg = dispatch => () => {
    dispatch({ type: 'clear_err' })
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { loginOrRegister, clearErrorMsg },
    { token: null, errorMessage: '' }
);