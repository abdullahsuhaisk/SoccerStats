import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';
import { useFocusEffect } from '@react-navigation/native';

import { Context as AuthContext } from '../../context/AuthContext';
import AuthForm from '../../components/AuthForm';
import NavLink from '../../components/NavLink';
import { COLORS } from '../../constants/theme'
import ToastMessage from '../../components/ToastMessage';

interface SignupScreenProps {
}

const SignupScreen: React.FC<SignupScreenProps> = () => {
  // Local State

  // Global State
  const {state, loginOrRegister, clearErrorMsg} = useContext(AuthContext);
  const { t } = useTranslation();
  const { loading } = state;

  useFocusEffect(
    React.useCallback(() => {
      // Do something when the screen is focused
      return () => {
        // Do something when the screen is unfocused
        // Useful for cleanup functions
        clearErrorMsg()
      };
    }, [])
  )

  return (
    <View style={styles.container}>
      <AuthForm
        headerText={t('authentication:signUp:signUpHeader')}
        errorMessage={state.errorMessage}
        onSubmitCallback={({email, password}) => loginOrRegister({email, password})}
        buttonText={t('authentication:signUp:signUpButton')}
        loading = {loading}
      />
      <NavLink 
        routeName="Login"
        text={t('authentication:signUp:alreadyAccount')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.primary
  }
});

export default SignupScreen;
