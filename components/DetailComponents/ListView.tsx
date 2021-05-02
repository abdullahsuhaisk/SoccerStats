import React, {useEffect} from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { COLORS } from '../../constants';

interface ListViewProps {
  label: String,
  awayTeam: String,
  homeTeam: String
}

const ListView: React.FC<ListViewProps> = ({ label, awayTeam, homeTeam }) => {
  const dataToRender = {
    "Fenerbahçe": {
      "Korner": [
        {
          id: 0,
          homeTeam: 'Rizespor',
          awayTeam: 'Fenerbahçe',
          homeScore: '3',
          awayScore: '11'
        },
        {
          id: 1,
          homeTeam: 'Fenerbahçe',
          awayTeam: 'Hatayspor',
          homeScore: '3',
          awayScore: '1'
        },
        {
          id: 2,
          homeTeam: 'Galatasaray',
          awayTeam: 'Fenerbahçe',
          homeScore: '5',
          awayScore: '9'
        },
        {
          id: 3,
          homeTeam: 'Fenerbahçe',
          awayTeam: 'Fatih Karagümrük',
          homeScore: '3',
          awayScore: '7'
        }
      ]
    },
    "Galatasaray": {
      "Korner": [
        {
          id: 4,
          homeTeam: 'Ankaragücü',
          awayTeam: 'Galatasaray',
          homeScore: '2',
          awayScore: '4'
        },
        {
          id: 5,
          homeTeam: 'Galatasaray',
          awayTeam: 'Göztepe',
          homeScore: '6',
          awayScore: '6'
        },
        {
          id: 6,
          homeTeam: 'Galatasaray',
          awayTeam: 'Alanyaspor',
          homeScore: '4',
          awayScore: '1'
        },
        {
          id: 7,
          homeTeam: 'Trabzonspor',
          awayTeam: 'Galatasaray',
          homeScore: '1',
          awayScore: '1'
        }
      ]
    }
    
  }

  const renderList = ({ item }) => {
    return <Text style={styles.textStyle}>{item.homeTeam} {item.homeScore} - {item.awayScore} {item.awayTeam}</Text>
  }

  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <View style={styles.listStyle}>
        <View>
          <Text style={{color: COLORS.primary, fontSize: 18, textAlign: "center"}}>{homeTeam}</Text>  
          <FlatList
            data={dataToRender[homeTeam].[label]}
            renderItem={renderList}
            keyExtractor={item => item.id}
          />
        </View>
        <View>
          <Text style={{color: COLORS.primary, fontSize: 18, textAlign: "center"}}>{awayTeam}</Text>  
          <FlatList
            data={dataToRender[awayTeam].[label]}
            renderItem={renderList}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  textStyle: {
    color: COLORS.primary,
    marginVertical: 5
  },
  listStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 5
  }
})

export default ListView