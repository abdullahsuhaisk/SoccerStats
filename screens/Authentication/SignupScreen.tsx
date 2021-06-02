import React from 'react';
import { View, StyleSheet } from 'react-native';
import AuthForm from '../../components/AuthForm';
import NavLink from '../../components/NavLink';
import { COLORS } from '../../constants/theme'
import auth from '@react-native-firebase/auth';
import { useTranslation } from 'react-i18next';

interface SignupScreenProps {
}

const SignupScreen: React.FC<SignupScreenProps> = (props) => {
  const { t } = useTranslation();

  return (
    <View style={styles.container}>
      <AuthForm
        headerText={t('authentication:signUp:signUpHeader')}
        errorMessage=""
        onSubmitCallback={({ email, password }) => console.log("Email: ", email, " ", "Password", password)}
        buttonText={t('authentication:signUp:signUpButton')}
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
