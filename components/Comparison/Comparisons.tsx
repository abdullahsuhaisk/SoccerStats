import React from 'react'
import { FlatList, Text, View } from 'react-native'
import { Comparison } from '.'
import { Center, Loading } from '..'

interface ComparisonsProps {
  data: any
  navigation: any
  matches: any
  isLoading: boolean
}


export const Comparisons: React.FC<ComparisonsProps> = ({ navigation, matches, isLoading }) => {
  if (isLoading) {
    return (
    <Center>
      <Loading />
    </Center>)
  }
  const matchLength = matches && matches.length;

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

  function reformatDate(date: string): string {
    // Re shape date it likes, date: "05/03/2021 16:00:00"
    let reformatedDate: string = date.substr(date.lastIndexOf('2021') + 5, 5)
    console.log(date.lastIndexOf('2021') + 5)
    return reformatedDate
  }

  function renderItem({ item, index }: { item: any }) {
    const { awayTeam, homeTeam, date } = item
    const hour = reformatDate(date);
    // console.log(hour)
    return (
      <View style={{ flex: 1 }}>
        <Comparison
          awayTeam={awayTeam.name}
          homeTeam={homeTeam.name}
          hour={hour}
          navigation={navigation}
          matchLength={matchLength}
          index= {index}
        />
      </View>
    )
  }
}