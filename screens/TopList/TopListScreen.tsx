import React, { useEffect, useContext } from 'react'
import { Center } from '../../components';
import { createStackNavigator } from "@react-navigation/stack"
import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { Button, Text, Image, View, StyleSheet } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';


import { Context as LeagueContext } from '../../context/LeagueContext'
import { COLORS, FONTS, images } from '../../constants';

interface TopScreenProps {

}

export function TopListScreen({ }): TopListStackNavProps<"TopListScreen"> {
  const { state } = useContext(LeagueContext);
  const { selectedLeagueToplist, tournament } = state;
  console.log(selectedLeagueToplist)

  useFocusEffect(
    React.useCallback(() => {
      return () => {
      };
    }, [])
  )
  if (selectedLeagueToplist) {
    console.log(selectedLeagueToplist[0])
    const imageName = selectedLeagueToplist[0].name
    return (
      <View style={styles.container}>
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
        <View style={styles.itemContainer}>
          <RowTextItem text={selectedLeagueToplist[0].position} />
          <RowImageItem text={selectedLeagueToplist[0].middleName} imageName={imageName}/>
          <RowTextItem text={selectedLeagueToplist[0].middleName} width={'30%'} />
          <RowTextItem text={selectedLeagueToplist[0].played} />
          <RowTextItem text={selectedLeagueToplist[0].won} />
          <RowTextItem text={selectedLeagueToplist[0].lost} />
          <RowTextItem text={selectedLeagueToplist[0].drawn} />
          <RowTextItem text={selectedLeagueToplist[0].points} />
        </View>
        <View style={styles.itemContainer}>
          <RowTextItem text={selectedLeagueToplist[1].position} />
          <RowImageItem text={selectedLeagueToplist[1].middleName} imageName={imageName} />
          <RowTextItem text={selectedLeagueToplist[1].middleName} width={'30%'} />
          <RowTextItem text={selectedLeagueToplist[1].played} />
          <RowTextItem text={selectedLeagueToplist[1].won} />
          <RowTextItem text={selectedLeagueToplist[1].lost} />
          <RowTextItem text={selectedLeagueToplist[1].drawn} />
          <RowTextItem text={selectedLeagueToplist[1].points} />
        </View>
      </View>
    )
  }
  else {
    return (
      <Center>
        <Text>
          Lig Seçin
        </Text>
      </Center>
    );
  }
}

function ImageNameSelector(imageName:string) {
  
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

function RowTextItem({ text, width }: string) {
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
      <Image source={images[imageName]} style={{ width: 20, height: 20 }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  itemHeader: {
    backgroundColor: COLORS.lightPrimary,
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

// export type TopListParamsList = {
//   TopListScreen: undefined;
// };

// export type TopListStackNavProps<T extends keyof TopListParamsList> = {
//   // navigation: StackNavigationProp<TopListParamsList, T>;
//   // route: RouteProp<TopListParamsList, T>;

// };

// const Stack = createStackNavigator<TopListParamsList>();

// export const TopListStack: React.FC<TopScreenProps> = ({}) => {
//   return (
//     <Stack.Navigator initialRouteName='TopListScreen'>
//       <Stack.Screen name="TopListScreen" component={TopListScreen}
//         options={{ title: 'Select League', headerShown: true}} />
//     </Stack.Navigator>)
// }