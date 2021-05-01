import React from 'react'
import { Text, View } from 'react-native'
import HeadComparison from '../../components/DetailComponents/HeadComparison'
import FooterComponent from '../../components/DetailComponents/FooterComponent'
import { COLORS } from '../../constants'

interface ComparisonDetailProps {
  route: any
}

export const ComparisonDetail: React.FC<ComparisonDetailProps> = ({ route }) => {
  const { awayTeam, homeTeam } = route.params

  // Firestore datasını buradan çek
  return (
    <View style={{ flex: 1, backgroundColor: COLORS.primary }}>
      <HeadComparison
        awayTeam={awayTeam}
        homeTeam={homeTeam}
        score="2 - 3"
        league="UEFA Champions League"
      />
      <FooterComponent 
        awayTeam={awayTeam}
        homeTeam={homeTeam} 
      />
    </View>
  )
}