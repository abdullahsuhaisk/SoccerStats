import React, { useEffect, useContext } from 'react'
import { Center, Table } from '../../components';
import { createStackNavigator } from "@react-navigation/stack"
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { Button, Text, Image, View, StyleSheet, FlatList } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';


import { Context as LeagueContext } from '../../context/LeagueContext'

interface TopScreenProps {

}

export function TopListScreen({ }): TopListStackNavProps<"TopListScreen"> {
  const { state } = useContext(LeagueContext);
  const { selectedLeagueToplist, tournament } = state;

  // useEffect(() => {
  //   firestore()
  //   .collection('leagues')
  //   .get()
  //   .then(querySnapshot => {
  //     console.log('Total leagues: ', querySnapshot.size);
  
  //     querySnapshot.forEach(documentSnapshot => {
  //       console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
  //     });
  //   });
  // }, [])

  useFocusEffect(
    React.useCallback(() => {
      return () => {
      };
    }, [])
  )

  if (selectedLeagueToplist) {
    // console.log(selectedLeagueToplist[0])
    return (
      <Table selectedLeagueToplist={selectedLeagueToplist} />
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

function ImageNameSelector(imageName:string) {
  
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