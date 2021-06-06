import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { useTranslation } from 'react-i18next';

import { Context as AuthContext } from '../../context/AuthContext';
import { useFocusEffect } from '@react-navigation/native';
import AuthForm from '../../components/AuthForm';
import NavLink from '../../components/NavLink';
import { COLORS } from '../../constants/theme'

interface LoginScreenProps {
}

const LoginScreen: React.FC<LoginScreenProps> = ({ }) => {
  // Local State

  // Global State
  const {state, loginOrRegister, clearErrorMsg} = useContext(AuthContext);
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
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <AuthForm
        headerText={t('authentication:login:loginHeader')}
        errorMessage={state.errorMessage}
        onSubmitCallback={({email, password}) => loginOrRegister({email, password})}
        buttonText={t('authentication:login:loginButton')}
      />
      <NavLink 
        routeName="Signup"
        text={t('authentication:login:dontHaveAccount')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.primary
  }
});

export default LoginScreen;