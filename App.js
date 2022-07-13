import React from "react";
import { NativeBaseProvider, extendTheme } from "native-base"
import Navigator from "./src/navigation/Navigator"
import { NavigationContainer } from '@react-navigation/native'
import AppLoading from 'expo-app-loading'
import { theme } from "./theme"
import store from './src/redux/store'
import { Provider } from "react-redux"

import {
  useFonts,
  OpenSans_400Regular,
  OpenSans_600SemiBold,
  OpenSans_400Regular_Italic
} from '@expo-google-fonts/open-sans'


export default function App() {

  let [fontsLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_600SemiBold,
    OpenSans_400Regular_Italic
  })



  if (!fontsLoaded) {
    return <AppLoading />
  } else {
    return (
      <Provider store={store}>
        <NativeBaseProvider theme={theme}>
          <NavigationContainer>
            <Navigator />
          </NavigationContainer>
        </NativeBaseProvider>
      </Provider>
    )
  }
}