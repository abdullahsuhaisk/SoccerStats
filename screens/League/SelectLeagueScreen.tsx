import { StackNavigationProp } from '@react-navigation/stack'
import React, { useContext, useEffect, useState } from 'react'
import {
  View,
  StyleSheet,
  ScrollView,
  FlatList
} from 'react-native'
import { Box } from '../../components'

import { COLORS, images } from "../../constants"
import { LeagueStackNavProps } from './LeagueStack'
import { Context as LeagueContext } from '../../context/LeagueContext';
import { getImageName } from '../../utils/getImageName'

interface SelectLegueScreen {
  // onChange: (id: number) => void;
  // /** alternative function type syntax that takes an event (VERY COMMON) */
  // onClick(event: React.MouseEvent<HTMLButtonElement>): void;
  navigation: StackNavigationProp<null>

}

const SelectLegueScreen: LeagueStackNavProps<"SelectLegueScreen"> = ({ navigation }) => {
  // Global Action
  const { state: leagueContextState, selectLeague } = useContext(LeagueContext);
  const [leagues, setLeagues] = useState([])

  useEffect(() => {
    // console.log(leagueContextState)
    if (leagueContextState && leagues.length === 0) {
      const { allLeagues } = leagueContextState
      setLeagues(allLeagues)
      // console.log(leagues)

    }
  }, [leagueContextState])

  function handleClick(item: { img?: HTMLImageElement, name: string, tournamentId: number, _id: number }): void {
    selectLeague(item)
    navigation.navigate('LeagueDetailScreen', { leagueName: item.leagueName, img: item.img })
  }
  const renderItem = ({ item }: { item: { img: HTMLImageElement, name: string, tournamentId: number } }) => {
    let { name } = item
    const leaguesImage = getImageName(images.leagueImagesArray, name)
    name = name.slice(0, 11)
    return (
      <Box img={leaguesImage && leaguesImage.image} leagueName={name} onClick={() => { handleClick(item) }} />
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white, padding: 12 }}>
      <View style={{ height: '100%' }}>
        <View style={styles.boxWrapper}>
          <FlatList
            numColumns={3}
            data={leagues}
            renderItem={renderItem}
            keyExtractor={item => item._id}
          />
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  boxWrapper: {
    display: 'flex',
  },
});

export default SelectLegueScreen;