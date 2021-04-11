import React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';

interface DateTitleProps {

}

export const DateTitle: React.FC<DateTitleProps> = ({ selected }) => {
  return (
    <View style={styles.container}>
      <Text style={{ ...FONTS.h3, ...styles.textContainer }}>
        {`${selected.day} Ağustos ${selected.date}   2021`}
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 500,
    padding: SIZES.padding / 3,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.transparentBlack,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,

    elevation: 0,
  },
  textContainer: {
    color: COLORS.primary
  }
});