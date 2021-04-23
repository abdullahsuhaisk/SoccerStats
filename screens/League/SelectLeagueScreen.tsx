import { StackNavigationProp } from '@react-navigation/stack'
import React, { useState, useContext } from 'react'
import {
  Text,
  useColorScheme,
  View,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList
} from 'react-native'
import { Button, Box } from '../../components'

import { COLORS, SIZES, FONTS, icons, images } from "../../constants"
import { LeagueStackNavProps } from './LeagueStack'
import { Context as LeagueContext } from '../../context/LeagueContext';

interface SelectLegueScreen {
  // onChange: (id: number) => void;
  // /** alternative function type syntax that takes an event (VERY COMMON) */
  // onClick(event: React.MouseEvent<HTMLButtonElement>): void;
  navigation: StackNavigationProp<null>

}

const leaguesList = [
  {
    id: 0,
    leagueName: "Süper Lig",
    img: images.superLeague,
    tournamentId: 1
  },
  {
    id: 1,
    leagueName: "Premier Lig",
    img: images.premierLegue,
    tournamentId: 2
  },
  {
    id: 2,
    leagueName: "Alman Ligi",
    img: images.frLeague,
    tournamentId: 5
  },
  {
    id: 3,
    leagueName: "İspanya Ligi",
    img: images.esLeague,
    tournamentId: 7
  },
  {
    id: 4,
    leagueName: "Fransa Ligi",
    img: images.frLeague,
    tournamentId: 8
  },
  {
    id: 6,
    leagueName: "1. lig",
    img: images.superLeague,
    tournamentId: 4
  },
  {
    id: 5,
    leagueName: "İtalya Ligi",
    img: images.frLeague,
    tournamentId: 6
  }
]

const SelectLegueScreen: LeagueStackNavProps<"SelectLegueScreen"> = ({ navigation }) => {
// Global Action
  const {selectLeague} = useContext(LeagueContext);

  function handleClick(item: { img: HTMLImageElement, leagueName: string, tournamentId: number}): void {
    selectLeague(item)
    navigation.navigate('LeagueDetailScreen', { leagueName: item.leagueName, img: item.img })
  }
  const renderItem = ({ item }: {item: { img: HTMLImageElement, leagueName: string, tournamentId: number}}) => {
    const { img, leagueName } = item
    return (
      <Box img={img} leagueName={leagueName} onClick={() => { handleClick(item) }} />
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white, padding:12 }}>
      <View style={{ height: '100%' }}>
        <ScrollView style={styles.scrollView}>
          <View style={styles.boxWrapper}>
            <FlatList
              numColumns={3} 
              data={leaguesList}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  boxWrapper: {
    display: 'flex',
  },
  scrollView: {
    display: 'flex',
    height: 100
  },
});

export default SelectLegueScreen;