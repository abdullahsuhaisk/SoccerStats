import React from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'
import { Image } from 'react-native-elements';
import { TeamsImage } from '.';
import { COLORS, FONTS, images } from '../constants';

interface TableProps {
  selectedLeagueToplist: any
}

const Table: React.FC<TableProps> = ({ selectedLeagueToplist }) => {
  return (<View style={styles.container}>
    {/* Header */}
    <View style={styles.itemHeader}>
      <HeaderLabel text="#" />
      <HeaderLabel text="Teamsss" width={'40%'} />
      <HeaderLabel text="O" />
      <HeaderLabel text="G" />
      <HeaderLabel text="M" />
      <HeaderLabel text="B" />
      <HeaderLabel text="P" />
    </View>
    <FlatList
      data={selectedLeagueToplist}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      scrollEnabled
    />
  </View>);
}

function renderItem({ item }: { item: object }) {
  const { position, middleName, name, played, won, lost, drawn, points } = item
  return (
    <View style={styles.itemContainer}>
      <RowTextItem text={position} />
      <RowImageItem text={middleName} imageName={middleName} />
      <RowTextItem text={middleName} width={'30%'} />
      <RowTextItem text={played} />
      <RowTextItem text={won} />
      <RowTextItem text={lost} />
      <RowTextItem text={drawn} />
      <RowTextItem text={points} />
    </View>
  )
}

function HeaderLabel({ text, width }: string) {
  return (
    <View style={{ width: width ? width : '10%' }}>
      <Text style={{ color: COLORS.white, ...FONTS.h4 }}>
        {text}
      </Text>
    </View>
  )
}

function RowTextItem({ text, width }) {
  return (
    <View style={{ width: width ? width : '10%' }}>
      <Text style={{ ...FONTS.h4, color: COLORS.primary }}>
        {text}
      </Text>
    </View>
  )
}

function RowImageItem({ imageName }: string) {
  return (
    <View style={{ width: '10%' }}>
      <TeamsImage imageName={imageName} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  itemHeader: {
    backgroundColor: COLORS.primary,
    borderBottomColor: COLORS.primary,
    borderBottomEndRadius: 1,
    borderBottomWidth: 1,
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 5,
  },
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    paddingHorizontal: 5,
    marginTop: 5
  },
  shadow: {
    shadowColor: COLORS.primary,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.51,
    shadowRadius: 13.16,
    elevation: 20,
  }
});

export default Table