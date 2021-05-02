import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import BoxOfDetailScreen from '../BoxOfDetailScreen';
import { COLORS, images } from '../../constants';

interface HeadComparisonProps {
  awayTeam: String,
  homeTeam: String,
  score: String,
  league: String
}

const HeadComparison: React.FC<HeadComparisonProps> = ({ awayTeam, homeTeam, score, league }) => {
  return (
    <View style={styles.mainContainer}>
      <Text style={{ color: COLORS.primary, fontWeight: "bold", paddingBottom: 5, paddingVertical: 10, textAlign: "center"}}>
            {league}
      </Text>
      <View style={styles.wrapper}>
        <View>
          <BoxOfDetailScreen leagueName={homeTeam} img={images.fb} />
        </View>
        <View style={styles.score}>
          <Text style={{ color: COLORS.white, fontSize: 20, fontWeight: "bold", paddingBottom: 5, paddingVertical: 10 }}>
            {score}
          </Text>
        </View>
        <View>
          <BoxOfDetailScreen leagueName={awayTeam} img={images.gs} />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: COLORS.primary
  },
  wrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 25,
    marginVertical: 8
  },
  score: {
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default HeadComparison;