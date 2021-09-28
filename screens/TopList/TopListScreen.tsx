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


export function TopListScreen({ }): TopListStackNavProps<"TopListScreen"> {
  const { state: leagueContextState } = useContext(LeagueContext);
  const { t } = useTranslation();
  const selectedLeagueId = leagueContextState && leagueContextState.selectedLeagueId
  const topLists = leagueContextState && leagueContextState.allTopList
  const data = (topLists.find((item) =>  item.leagueId === selectedLeagueId ))
  const toplist = data && data.topList

  if (toplist) {
    // console.log(selectedLeagueToplist)
    if (toplist.length === 0) {
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
        <Table selectedLeagueToplist={toplist}  />
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