import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Box, Footer } from '..';
import { COLORS, FONTS, images } from '../../constants';

interface indexProps {

}

const Comparison: React.FC<indexProps> = ({ awayTeam, homeTeam, hour, navigation, index, matchLength }) => {
  function navigateToDetail() {
    navigation.navigate('ComparisonDetail', { awayTeam: awayTeam, homeTeam: homeTeam })
  }

  return (
    <View>
      <View style={styles.wrapper}>
        <View style={styles.box}>
          <Box leagueName={homeTeam} img={images.fb} noBorder onClick={() => navigateToDetail()} />
        </View>
        <View style={styles.date}>
          <Text style={{ color: COLORS.primary, ...FONTS.h2, paddingBottom: 5, paddingVertical: 10 }}>
            {hour}
          </Text>
          <TouchableOpacity onPress={() => navigateToDetail()}>
            <View style={{ ...styles.detail }}>
              <Text>
                Detay
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.box}>
          <Box leagueName={awayTeam} img={images.gs} noBorder onClick={() => navigateToDetail()} />
        </View>
      </View>
      {index === matchLength-1 ? (<Footer />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomColor: COLORS.line,
    borderBottomWidth: 1,
    borderBottomEndRadius: 5,
    borderBottomStartRadius: 5
  },
  detail: {
    padding: 5,
    borderColor: COLORS.line,
    borderWidth: 0.5,
    borderRadius: 5,
    paddingLeft: 20,
    paddingRight: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 0.0,
  },
  box: {
    flex: 1
  },
  date: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default Comparison;