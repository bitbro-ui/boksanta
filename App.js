import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Loginscreen from './screens/loginscreen';
import {AppTabnavigator} from './components/apptabnavigator'
import {createAppContainer,createSwitchNavigator} from 'react-navigation'
import {AppDrawerNavigator} from './components/appdrawernavigator'


export default function App() {
  return (
    <Appcontainer/>
  );
}
const switchNavigator = createSwitchNavigator({
  Loginscreen:{screen:Loginscreen},
  Drawer:{screen:AppDrawerNavigator}
})

const Appcontainer = createAppContainer(switchNavigator)