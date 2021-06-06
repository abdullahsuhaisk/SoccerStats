import React, { useContext, useEffect } from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

import { LeagueStack } from "../screens/League/LeagueStack";
import { TopListScreen } from "../screens/TopList/TopListScreen";
import { COLORS, FONTS } from "../constants";
import { Context as LeagueContext } from '../context/LeagueContext';
import { Button, Center } from "../components";
import { Text } from "react-native-elements";
import auth from '@react-native-firebase/auth';
import { useTranslation } from 'react-i18next';
import LanguageSelector from "../components/LanguageSelector";

export type AppParamList = {
  League: undefined;
  TopListScreen: undefined;
};


interface AppTabsProps { }

const Tabs = createBottomTabNavigator<AppParamList>();

export const AppTabs: React.FC<AppTabsProps> = ({ }) => {
  const { getMatchList } = useContext(LeagueContext);
  const { t } = useTranslation();

  function Anothercomponent() {
    return (
      <Center>
        <Button title={'Sign Out'} onClick={() => auth().signOut().then(() => console.log('User signed out!'))} />
        <Text>{t('slider:welcome')}</Text>
        <LanguageSelector />
      </Center>
    );
  }

  useEffect(() => {
    getMatchList()
  }, [])
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === t('league')) {
            iconName = "clipboard-list";
            return <MaterialCommunityIcons name="soccer-field" size={size} color={color} />;
          } else if (route.name === "TopListScreen") {
            return <MaterialCommunityIcons name={"clipboard-list"} size={size} color={color} />;
          }
          // You can return any component that you like here!
          return <MaterialCommunityIcons name={"soccer"} size={size} color={color} />;
        }
      })}
      tabBarOptions={{
        activeTintColor: COLORS.selectedIcon,
        inactiveTintColor: COLORS.white,
        tabStyle: {

        },
        style: {
          backgroundColor: COLORS.primary,
          borderRadius: 50,
          borderWidth: 1,
          borderColor: '#fff',
          height: 70,
          marginHorizontal: 10,
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 9,
          },
          shadowOpacity: 0.48,
          shadowRadius: 11.95,
          elevation: 18,
        },
        labelStyle: {
          ...FONTS.h4,
          paddingBottom: 10
        },
        iconStyle: {
          marginTop: 5
        }
      }}>
      <Tabs.Screen name={t('league')} component={LeagueStack} />
      <Tabs.Screen name={t('topList')} component={TopListScreen} />
      <Tabs.Screen name={t('setting')} component={Anothercomponent} />
      {/* <Tabs.Screen name="Auth" component={AuthStack} /> */}
    </Tabs.Navigator>
  );
};