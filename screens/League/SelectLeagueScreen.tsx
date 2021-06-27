import { StackNavigationProp } from '@react-navigation/stack'
import React, { useContext } from 'react'
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
    tournamentId: 1,
    tournament: {
      globalName: "Süper Lig",
      id: 1,
      name: "Spor Toto Süper Lig",
      shortName: "TSL"
    }
  },
  {
    id: 1,
    leagueName: "Premier Lig",
    img: images.premierLegue,
    tournamentId: 2,
    tournament: {
      globalName: "İngiltere Premier Ligi",
      id: 2,
      name: "İngiltere Premier Ligi",
      shortName: "İNP"
    }
  },
  {
    id: 2,
    leagueName: "Alman Ligi",
    img: images.frLeague,
    tournamentId: 5,
    tournament: {
      globalName: "Almanya Bundesliga Ligi",
      id: 5,
      name: "Almanya Bundesliga Ligi",
      shortName: "AL1"
    }
  },
  {
    id: 3,
    leagueName: "İspanya Ligi",
    img: images.esLeague,
    tournamentId: 7,
    tournament: {
      globalName: "İspanya La Liga",
      id: 7,
      name: "İspanya La Liga",
      shortName: "İS1",
    }
  },
  {
    id: 4,
    leagueName: "Fransa Ligi",
    img: images.frLeague,
    tournamentId: 8,
    tournament: {
      globalName: "Fransa Ligue 1",
      id: 8,
      name: "Fransa Ligue 1",
      shortName: "FR1"
    }
  },
  {
    id: 6,
    leagueName: "1. lig",
    img: images.superLeague,
    tournamentId: 4,
    tournament: {
      globalName: "TFF 1. Lig",
      id: 4,
      name: "Spor Toto 1. Lig",
      shortName: "ST1L"
    }
  },
  {
    id: 5,
    leagueName: "İtalya Ligi",
    img: images.frLeague,
    tournamentId: 6,
    tournament: {
      globalName: "İtalya Serie A Ligi",
      id: 6,
      name: "İtalya Serie A Ligi",
      shortName: "İTA"
    }
  }
]

const SelectLegueScreen: LeagueStackNavProps<"SelectLegueScreen"> = ({ navigation }) => {
  // Global Action
  const { selectLeague } = useContext(LeagueContext);

  function handleClick(item: { img: HTMLImageElement, leagueName: string, tournamentId: number }): void {
    selectLeague(item)
    navigation.navigate('LeagueDetailScreen', { leagueName: item.leagueName, img: item.img })
  }
  const renderItem = ({ item }: { item: { img: HTMLImageElement, leagueName: string, tournamentId: number } }) => {
    const { img, leagueName } = item
    return (
      <Box img={img} leagueName={leagueName} onClick={() => { handleClick(item) }} />
    )
  }

  return (
    <View style={{ flex: 1, backgroundColor: COLORS.white, padding: 12 }}>
      <View style={{ height: '100%' }}>
          <View style={styles.boxWrapper}>
            <FlatList
              numColumns={3}
              data={leaguesList}
              renderItem={renderItem}
              keyExtractor={item => item.id}
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
  scrollView: {
    display: 'flex',
    height: 100
  },
});

export default SelectLegueScreen;