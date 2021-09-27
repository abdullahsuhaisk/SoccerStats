import React, { useState, useContext, useEffect } from 'react'
import {
  View,
  StyleSheet
} from 'react-native'
import { DatePicker, DateTitle } from '../../components'
import { Comparisons } from '../../components/Comparison'
import { COLORS } from "../../constants"
import { Context as LeagueContext } from '../../context/LeagueContext';
import { getNext5days } from '../../utils/index'


interface Props {
  leagueName: String
  img: HTMLImageElement
}

const LeagueDetail: React.FC<Props> = (props) => {
  // Navigation States
  const { route, navigation } = props

  // Local States
  const [day, setDay] = useState(getNext5days()[0])


  // Global States
  const {state} = useContext(LeagueContext);
  // const tournamentId = state.selectedLeague && state.selectedLeague.tournamentId;
  // const { stages } = state;
  // const selectedTournamentStage = stages ? stages.find((item) => item.stage.tournament.id === tournamentId) : null
  // const matches = selectedTournamentStage ? selectedTournamentStage.matches : null
  const isLoading = state.loading
  // console.log(matches)
  // console.log(state)

  useEffect(() => {
    // Do something when the screen is focused
    // getMatchList(day.formattedDate)
  }, [day])

  return (
    <View style={styles.container}>
      <DatePicker selected={day} setSelected={setDay} dates={getNext5days()} />
      <DateTitle selected={day} />
      <Comparisons day={day} navigation={navigation} matches={null} isLoading={isLoading}/>
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