import React, { useContext, useRef, useState, useEffect } from "react"
import { Text, TouchableOpacity, FlatList, Button, View, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack"

import { StackNavigationProp } from "@react-navigation/stack";
import { RouteProp } from "@react-navigation/native";
import { LeagueDetailScreen, SelectLeagueScreen } from "..";
import { COLORS, FONTS, images } from "../../constants";

type LeagueParamList = {
  SelectLeagueScreen: undefined;
  LeagueDetailScreen: undefined;
};

export type LeagueStackNavProps<T extends keyof LeagueParamList> = {
  navigation: StackNavigationProp<LeagueParamList, T>;
  route: RouteProp<LeagueParamList, T>;
};

interface LeagueStackProps { }

const Stack = createStackNavigator<LeagueParamList>();

function HeaderLogo({ img, title }: { img: HTMLImageElement, title: string }): JSX.Element {
  return (
    <View>
      <View style={{display:'flex', flexDirection:'row', justifyContent:'center', alignItems: 'center'}}>
      <Image style={{ width: 50, height: 50, resizeMode: 'stretch' }} source={img} />
        <View style={{marginLeft:5}}>
          <Text style={{...FONTS.h3, color: COLORS.white}}>{title}</Text>
        </View>
      </View>
    </View>
  )
}
export const LeagueStack: React.FC<LeagueStackProps> = ({ }) => {
  return (
    <Stack.Navigator initialRouteName='SelectLeagueScreen' screenOptions={{
      headerStyle: {
        backgroundColor: COLORS.primary,
        height: 60
      },
      headerTintColor: COLORS.white,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
      headerBackTitleVisible: false
    }}>
      <Stack.Screen name="SelectLeagueScreen" component={SelectLeagueScreen}
        options={{ title: 'Lig Seçin', headerShown: true }} />

      <Stack.Screen name="LeagueDetailScreen" component={LeagueDetailScreen}
        options={({ route }) => {
          return ({ headerTitle: <HeaderLogo img={route.params.img} title={route.params.leagueName}/> })
        }} />
    </Stack.Navigator>
  )
}