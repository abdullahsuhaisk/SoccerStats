import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { Comparison } from '.'

interface ComparisonsProps {
  data: any
  navigation: any
  matches: any
}


export const Comparisons: React.FC<ComparisonsProps> = ({ navigation, matches }) => {  
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