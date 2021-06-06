import React, { useEffect, useContext } from 'react'
import { useTranslation } from 'react-i18next';
import { createStackNavigator } from "@react-navigation/stack"
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { Button, Text, Image, View, StyleSheet, FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { useFocusEffect } from '@react-navigation/native';

import { Center, Table } from '../../components';
import { Context as LeagueContext } from '../../context/LeagueContext'

interface TopScreenProps {

}

export function TopListScreen({ }): TopListStackNavProps<"TopListScreen"> {
  const { state } = useContext(LeagueContext);
  const { selectedLeagueToplist, tournament } = state;
  const { t } = useTranslation();

  useEffect(() => {
    console.log('A')
    firestore()
    .collection('leagues')
    .get()
    .then(querySnapshot => {
      console.log('Total leagues: ', querySnapshot.size);
      querySnapshot.forEach(documentSnapshot => {
        console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
      });
    });
  }, [])

  useFocusEffect(
    React.useCallback(() => {
      return () => {
      };
    }, [])
  )

  if (selectedLeagueToplist) {
    // console.log(selectedLeagueToplist)
    if (selectedLeagueToplist.length === 0) {
      return (
        <Center>
          <Text>
            {t('league:noAvaibleLeague')}
          </Text>
        </Center>
      )
    }
    else {
      return (
        <Table selectedLeagueToplist={selectedLeagueToplist} />
      )
    }
  }
  else {
    return (
      <Center>
        <Text>
          {t('common:choseLeague')}
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