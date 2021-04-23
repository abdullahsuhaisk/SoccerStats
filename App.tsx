import { NavigationContainer } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import { COLORS } from "./constants"
import { AppTabs } from './Navigation/AppTabs';
import { Provider as AuthProvider } from './context/AuthContext';
import { AuthStack } from './screens/Authentication/AuthStack';
import { _retrieveData, _storeData } from './utils';
import { setNavigator } from './navigationRef';

const App = (): JSX.Element => {
  const [isFirstTimeLoad, setIsFirstTimeLoad] = useState(false)

  const checkFirstTimeLoad = () => {
    _retrieveData("isFirstTimeOpen").then((result) => {
      if(result === null) {
        setIsFirstTimeLoad(true)
      }
    })
  }

  useEffect(() => {
    checkFirstTimeLoad()
  }, [])

  const handleDone = () => {
    setIsFirstTimeLoad(false)
    _storeData('isFirstTimeOpen', 'no')
  }
  
  return (
    <>
      <AuthProvider>
        <SafeAreaView style={{ ...styles.safeAreaWrapper, backgroundColor: COLORS.primary }} />
          <SafeAreaView style={{ flex:1, backgroundColor: COLORS.white }}>
          <NavigationContainer ref={(navigator) => {setNavigator(navigator)}}>
            {isFirstTimeLoad ? <AuthStack onDone={handleDone} /> : <AppTabs />}
          </NavigationContainer>
        </SafeAreaView>
      </AuthProvider>
    </>
  );
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