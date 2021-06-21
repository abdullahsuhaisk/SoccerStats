import createDataContext from './createDataContext'
import { _storeData, _removeItem, _retrieveData } from "../utils";
// import { navigate } from '../navigationRef';
import auth from '@react-native-firebase/auth';

const authTypes = {
    ADD_ERROR: 'ADD_ERROR',
    LOGIN_OR_SIGNIN_START: "LOGIN_OR_SIGNIN_START",
    LOGIN_OR_SIGNIN_SUCCES: "LOGIN_OR_SIGNIN_SUCCES",
    CLEAR_ERR: 'CLEAR_ERR'
}

const authReducer = (state, action) => {
    switch (action.type) {
        case authTypes.ADD_ERROR:
            return { ...state, errorMessage: action.payload, loading: 'false'  }
        case authTypes.LOGIN_OR_SIGNIN_START:
            return {...state, loading: 'true'}
        case authTypes.LOGIN_OR_SIGNIN_SUCCES:
            return { errorMessage: '', token: action.payload, loading: 'false' }
        case authTypes.CLEAR_ERR:
            return { ...state, errorMessage: '', loading: 'false'  }
        default:
            return state;
    }
};

const loginOrRegister = (dispatch) => {
    return ({ email, password }) => {
        dispatch({ type: authTypes.LOGIN_OR_SIGNIN_START });
        const data = { email, password }
        _storeData("user", JSON.stringify(data)).then(() => {
            // setUser(data);
        })
        auth().signInWithEmailAndPassword(email, password).then((response) => {
            // console.log(response.uid)
            dispatch({ type: authTypes.LOGIN_OR_SIGNIN_SUCCES, payload: response.user });
            // callback();
        }).catch(err => {
            auth().createUserWithEmailAndPassword(email, password)
                .then((response) => {
                    dispatch({ type: authTypes.LOGIN_OR_SIGNIN_SUCCES, payload: response.user });
                    console.log('User account created & signed in!');
                }).catch(error => {
                    // console.error(error);
                    dispatch({ type: authTypes.ADD_ERROR, payload: error.nativeErrorMessage });
                })
        })
    }
}

const clearErrorMsg = dispatch => () => {
    dispatch({ type: authTypes.CLEAR_ERR })
}

export const { Provider, Context } = createDataContext(
    authReducer,
    { loginOrRegister, clearErrorMsg },
    { token: null, errorMessage: '', loading: false }
);