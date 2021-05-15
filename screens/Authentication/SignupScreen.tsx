import React from 'react';
import { View, StyleSheet } from 'react-native';
import AuthForm from '../../components/AuthForm';
import NavLink from '../../components/NavLink';
import { COLORS } from '../../constants/theme'
import auth from '@react-native-firebase/auth';

interface SignupScreenProps {
}

const SignupScreen: React.FC<SignupScreenProps> = (props) => {
  return (
    <View style={styles.container}>
      <AuthForm
        headerText="Sign Up"
        errorMessage=""
        onSubmitCallback={({ email, password }) => console.log("Email: ", email, " ", "Password", password)}
        buttonText="Sign Up"
      />
      <NavLink 
        routeName="Login"
        text="Already have an account? Sign in instead."
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
