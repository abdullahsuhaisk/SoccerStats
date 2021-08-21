import React, { useContext } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, FlatList } from 'react-native';
import { COLORS, FONTS, SIZES } from '../constants';
import { Context as LeagueContext } from '../context/LeagueContext';

interface DatePickerProps {
  selected: object,
  setSelected: () => any
  dates: []
}

export const DatePicker: React.FC<DatePickerProps> = ({ selected, setSelected, dates }) => {

  const renderItem = ({ item }: { item: any }) => {
    return (
      <Date selected={selected} setSelected={setSelected} item={item} />
    )
  }
  return (
    <View style={styles.container}>
      <FlatList
        horizontal={true}
        renderItem={renderItem}
        data={dates}
        keyExtractor={item => item.dayName}
        scrollEnabled={false}
      />
    </View>
  );
}

function Date({ selected, setSelected, item }: any) {
  const { dayName, dayDate } = item
  
  return (
    <TouchableOpacity onPress={() => {
      setSelected(item)}}>
      <View style={styles.dateCotainer}>
        <View style={styles.dayView}>
          <Text style={{ ...styles.dateText, fontWeight: '400' }}>
            {dayName}
          </Text>
        </View>
        {selected.dayName === item.dayName ? <View style={{ ...styles.dateView, ...styles.selectedDate }}>
          <Text style={{ ...styles.dateText, fontSize: SIZES.body4 }}>
            {dayDate}
          </Text>
        </View> :
          <View style={styles.dateView}>
            <Text style={{ ...styles.dateText, fontSize: SIZES.body4 }}>
              {dayDate}
            </Text>
          </View>
        }
      </View>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.secondary,
    height: 90,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  dateCotainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    ...FONTS.body5,
    padding: 20
  },
  dayView: {
    paddingBottom: 7
  },
  dateText: {
    ...FONTS.body5,
    color: COLORS.white,
    fontWeight: 'bold'
  },
  dateView: {
    width: 35,
    height: 35,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  selectedDate: {
    borderRadius: 100,
    backgroundColor: COLORS.lightPrimary,
  }
});