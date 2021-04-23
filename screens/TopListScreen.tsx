import React, { useEffect, useContext } from 'react'
import { Center } from '../components';
import { createStackNavigator } from "@react-navigation/stack"
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { Button, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';


import { Context as LeagueContext } from '../context/LeagueContext'

interface TopScreenProps {

}

export function TopListScreen({ }): TopListStackNavProps<"TopListScreen"> {
  const { state } = useContext(LeagueContext);
  const { selectedLeagueToplist, tournament } = state;
  console.log(selectedLeagueToplist)
  
  useFocusEffect(
    React.useCallback(() => {
      return () => {
      };
    }, [])
  )
  if (selectedLeagueToplist) {
    return (
      <Center>
        <Text>
          {selectedLeagueToplist[0].name}
        </Text>
      </Center>
    )
  }
  else {
    return (
      <Center>
        <Text>
          Lig Seçin
        </Text>
      </Center>
    );
  }

}

// export type TopListParamsList = {
//   TopListScreen: undefined;
// };

// export type TopListStackNavProps<T extends keyof TopListParamsList> = {
//   // navigation: StackNavigationProp<TopListParamsList, T>;
//   // route: RouteProp<TopListParamsList, T>;

// };

// const Stack = createStackNavigator<TopListParamsList>();

// export const TopListStack: React.FC<TopScreenProps> = ({}) => {
//   return (
//     <Stack.Navigator initialRouteName='TopListScreen'>
//       <Stack.Screen name="TopListScreen" component={TopListScreen}
//         options={{ title: 'Select League', headerShown: true}} />
//     </Stack.Navigator>)
// }