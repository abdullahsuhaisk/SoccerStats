import React from 'react'
import { createStackNavigator, StackNavigationProp } from "@react-navigation/stack"
import { RouteProp } from "@react-navigation/native";
import { TopListScreen } from './TopListScreen';
import TeamScreen from './TeamScreen';

type TopListParamList = {
  TopListScreen:undefined
  TeamScreen: undefined
}

export type TopListStackNavProps<T extends keyof TopListParamList> = {
  navigation: StackNavigationProp<TopListParamList, T>;
  route: RouteProp<TopListParamList, T>;
};

// Create Navigation Stack
const Stack = createStackNavigator<TopListParamList>();

export const TopListStack: React.FC<TopListStackNavProps> = ({}) => {

  return(
    <Stack.Navigator initialRouteName="TopListScreen">
      <Stack.Screen name="TopListScreen" component={TopListScreen} options={{headerShown: false}}/>
      <Stack.Screen name="TeamScreen" component={TeamScreen} />
    </Stack.Navigator>
  )
}