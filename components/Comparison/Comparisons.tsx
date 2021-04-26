import React, { useContext, useState, useEffect } from 'react'
import { FlatList, Text, TouchableOpacity, View } from 'react-native'
import { Comparison } from '.'
import { Context as LeagueContext } from '../../context/LeagueContext';

interface ComparisonsProps {
  data: any
  navigation: any
}


export const Comparisons: React.FC<ComparisonsProps> = ({ day, navigation }) => {
  const { state } = useContext(LeagueContext);
  const [matches, setMatches] = useState(null)

  useEffect(() => {
    const tournamentId = state.tournamentId;
    const { stages } = state;
    const selectedTournamentStage = stages ? stages.find((item) => item.stage.tournament.id === tournamentId) : null
    setMatches(selectedTournamentStage ? selectedTournamentStage.matches : null)
  }, [day])
  console.log(matches)
  if (matches) {
    return (
      <View>
        <FlatList
          data={matches}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          scrollEnabled
        />
      </View>);
  }
  else {
    return (<View><Text>No match</Text></View>)
  }


  function renderItem({ item }: { item: any }) {
    const { awayTeam, homeTeam, hour } = item
    return (
      <View style={{ flex: 1 }}>
        <Comparison
          awayTeam={awayTeam.name}
          homeTeam={homeTeam.name}
          hour={"00"}
          navigation={navigation}
        />
      </View>
    )
  }
}