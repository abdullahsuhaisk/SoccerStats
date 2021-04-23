import { RouteProp } from '@react-navigation/core'
import React, { useState, useContext } from 'react'
import {
  View,
  StyleSheet
} from 'react-native'
import { DatePicker, DateTitle } from '../../components'
import { Comparisons } from '../../components/Comparison'
import { COLORS, SIZES, FONTS, icons, images } from "../../constants"
import { Context as LeagueContext } from '../../context/LeagueContext';


interface Props {
  leagueName: String
  img: HTMLImageElement
}

const dates = [
  {
    id: 0,
    day: 'Pazt',
    date: 21
  },
  {
    id: 1,
    day: 'Salı',
    date: 22
  },
  {
    id: 2,
    day: 'Çrşb',
    date: 23
  },
  {
    id: 3,
    day: 'Perşmb',
    date: 24
  },
  {
    id: 4,
    day: 'Cuma',
    date: 25
  }
]
const comprationsData = [
  {
    id: '0',
    homeTeam: 'Galatasaray',
    awayTeam: 'FenerBahçe',
    hour: '3:00 Am'
  },
  {
    id: '1',
    homeTeam: 'Çanakkale Dardanel Spor',
    awayTeam: 'BozcaAda',
    hour: '17:00 PM'
  },
  {
    id: '2',
    homeTeam: 'Tranbzon Spor',
    awayTeam: 'Beşiktaş',
    hour: '21:00 Pm'
  },
  {
    id: '3',
    homeTeam: 'İzmir',
    awayTeam: 'İstanbul',
    hour: '3:00 Am'
  },
  {
    id: '4',
    homeTeam: 'İzmir',
    awayTeam: 'İstanbul',
    hour: '3:00 Am'
  },
  {
    id: '5',
    homeTeam: 'İzmir',
    awayTeam: 'İstanbul',
    hour: '3:00 Am'
  },
]

const LeagueDetail: React.FC<Props> = (props) => {
  const { route, navigation } = props
  const [selected, setSelected] = useState(dates[0])
  const {state} = useContext(LeagueContext);
  console.log(state)


  return (
    <View style={styles.container}>
      {/* https://aping.bilyoner.com/sto/programs/active */}
      <DatePicker selected={selected} setSelected={setSelected} dates={dates} />
      <DateTitle selected={selected} />
      <Comparisons data={comprationsData} navigation={navigation} />
    </View>
  );
}
// height: PixelRatio.getPixelSizeForLayoutSize(135),
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  }
});
export default LeagueDetail;