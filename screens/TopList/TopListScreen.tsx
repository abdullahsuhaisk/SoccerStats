import React, { useEffect, useContext, useState } from 'react'
import { useTranslation } from 'react-i18next';
import { createStackNavigator } from "@react-navigation/stack"
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { Button, Text, Image, View, StyleSheet, FlatList } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { useFocusEffect } from '@react-navigation/native';

import { Center, Table } from '../../components';
import { Context as LeagueContext } from '../../context/LeagueContext'
import { TopListStackNavProps } from './TopListStack';

interface TopListScreen {
  navigation: StackNavigationProp<undefined>
}


export function TopListScreen({ navigation }): TopListStackNavProps<"TopListScreen"> {
  const { state } = useContext(LeagueContext);
  const { selectedLeagueToplist, tournament } = state;
  const { t } = useTranslation();
  const [a,b] = useState(5)

  useEffect(() => {

  }, [])

//   useFocusEffect(
//     React.useCallback(() => {
//       return () => {
//         const db = firestore();
// db.settings({ host: 'localhost:8080', ssl: false });
//         db
//         .collection('gokce')
//         .get()
//         .then(querySnapshot => {
//           console.log('Total leagues: ', querySnapshot.size);
//           b(querySnapshot.size);
//           querySnapshot.forEach(documentSnapshot => {
//             console.log('User ID: ', documentSnapshot.id, documentSnapshot.data());
//           });
//         }).catch(err => {
//           console.log(err)
//         });
//       };
//     }, [])
//   )
function handleClick(item) {
  // console.log(item)
  navigation.navigate('TeamScreen', {item})
}

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
        <Table selectedLeagueToplist={selectedLeagueToplist} handleClick ={handleClick} />
      )
    }
  }
  else {
    return (
      <Center>
        <Text>
          {t('common:choseLeague')}
          {a}
        </Text>
      </Center>
    );
  }
}