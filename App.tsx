import { NavigationContainer } from '@react-navigation/native';
import React, {useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Platform
} from 'react-native';
import auth from '@react-native-firebase/auth';

import { COLORS } from "./constants"
import { AppTabs } from './Navigation/AppTabs';
import { Provider as AuthProvider } from './context/AuthContext';
import { Provider as LeagueProvider } from './context/LeagueContext';

import { AuthStack } from './screens/Authentication/AuthStack';
import { _retrieveData, _storeData } from './utils';
import { setNavigator } from './navigationRef';
import { Center, Loading } from './components';

const App = (): JSX.Element => {
  // Set an initializing state whilst Firebase connects
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  // Handle user state changes
  function onAuthStateChanged(user:any) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    // checkFirstTimeLoad()
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, [])
  
  if (initializing) return <Center><Loading/></Center>;
  else {
    return (
      <>
        <AuthProvider>
          <LeagueProvider>
            <SafeAreaView style={{ ...styles.safeAreaWrapper, backgroundColor: COLORS.primary }} />
            <SafeAreaView style={{ flex: 1, backgroundColor: Platform.OS === 'ios' ? COLORS.white: user ? COLORS.white: COLORS.primary }}>
              <NavigationContainer ref={(navigator) => { setNavigator(navigator) }}>
                {!user ? <AuthStack /> : <AppTabs />}
              </NavigationContainer>
            </SafeAreaView>
          </LeagueProvider>
        </AuthProvider>
      </>
    );
  }

};

const styles = StyleSheet.create({
  safeAreaWrapper: {
    backgroundColor: COLORS.primary,
    flex: 0
  }
});

export default App;
// ~/Library/Android/sdk/tools/emulator -list-avds
// ~/Library/Android/sdk/emulator/emulator -avd Nexus_6_API_30