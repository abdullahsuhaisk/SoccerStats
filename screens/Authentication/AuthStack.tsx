import React from "react";
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack"
import { RouteProp } from "@react-navigation/native"
import { AppIntroContainer } from "../";
import LoginScreen from "./LoginScreen"
import SignupScreen from "./SignupScreen"

export type AuthParamList = {
  Login: undefined;
  Signup: undefined;
  AppIntro: undefined
};

export type AuthNavProps<T extends keyof AuthParamList> = {
  navigation: StackNavigationProp<AuthParamList, T>;
  route: RouteProp<AuthParamList, T>;
};

interface AuthStackProps {
  
}

const Stack = createStackNavigator<AuthParamList>()

export const AuthStack: React.FC<AuthStackProps> = ({ onDone }) => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }} initialRouteName="AppIntro" >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="AppIntro" options={{ headerShown: false }}>
        {props => <AppIntroContainer {...props} onDone={onDone} />}
      </Stack.Screen>
    </Stack.Navigator>
  );
};