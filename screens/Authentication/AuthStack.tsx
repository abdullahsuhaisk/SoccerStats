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

export const AuthStack: React.FC<AuthStackProps> = () => {
  return (
    <Stack.Navigator screenOptions={{ header: () => null }} initialRouteName="AppIntro" >
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      {/* There is a way send props to navigation Screen item, so why i didn't delete it */}
      {/* <Stack.Screen name="AppIntro" options={{ headerShown: false }}>
        {props => <AppIntroContainer {...props} onDone={onDone} />}
      </Stack.Screen> */}
      <Stack.Screen name ="AppIntro" component={AppIntroContainer} />
    </Stack.Navigator>
  );
};