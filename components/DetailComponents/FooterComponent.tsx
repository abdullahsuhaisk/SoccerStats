import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../../constants';
import ListView from './ListView'

interface FooterComponentProps {
  awayTeam: String,
  homeTeam: String
}

const FooterComponent: React.FC<FooterComponentProps> = ({awayTeam, homeTeam }) => {
  const labels = ["Korner", "Pozisyon", "Kart", "Şut"]
  const [label, setLabel] = useState("Korner");
  return (
    <>
    <View style={styles.tabStyle}>
      {labels.map((value) => (
        <TouchableOpacity
          key={value}
          onPress={() => setLabel(value)}
          style={[
            styles.button,
            label === value && styles.selected,
            value === labels[0] && styles.radiusLeft,
            value === labels[3] && styles.radiusRight
          ]}
        >
          <Text
            style={[
              styles.buttonLabel,
              label === value && styles.selectedLabel,
            ]}
          >
            {value}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
      <ListView label={label} awayTeam={awayTeam} homeTeam={homeTeam}/>
    </>
  );
}
const styles = StyleSheet.create({
  tabStyle: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 0
  },
  button: {
    paddingHorizontal: 8,
    paddingVertical: 6,
    alignSelf: "flex-start",
    backgroundColor: COLORS.white,
    minWidth: "25%",
    textAlign: "center"
  },
  selected: {
    backgroundColor: COLORS.primary
  },
  buttonLabel: {
    fontSize: 14,
    fontWeight: "bold",
    color: COLORS.primary,
    textAlign: "center"
  },
  selectedLabel: {
    color: COLORS.white,
  },
  radiusLeft: {
    borderTopLeftRadius: 18
  },
  radiusRight: {
    borderTopRightRadius: 18
  }
})

export default FooterComponent