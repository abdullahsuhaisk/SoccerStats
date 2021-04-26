import { RouteProp } from '@react-navigation/core'
import React, { useState, useContext, useEffect } from 'react'
import {
  View,
  StyleSheet
} from 'react-native'
import { DatePicker, DateTitle } from '../../components'
import { Comparisons } from '../../components/Comparison'
import { COLORS, SIZES, FONTS, icons, images } from "../../constants"
import { Context as LeagueContext } from '../../context/LeagueContext';
import { getNext5days } from '../../utils/index'


interface Props {
  leagueName: String
  img: HTMLImageElement
}

const LeagueDetail: React.FC<Props> = (props) => {
  const { route, navigation } = props
  // Local State
  const [day, setDay] = useState(getNext5days()[0])

  // Global State
  const {state} = useContext(LeagueContext);
  useEffect(() => {
  
  }, [])
  console.log(state)

  return (
    <View style={styles.container}>
      {/* https://aping.bilyoner.com/sto/programs/active */}
      <DatePicker selected={day} setSelected={setDay} dates={getNext5days()} />
      <DateTitle selected={day} />
      <Comparisons day={day} navigation={navigation} />
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