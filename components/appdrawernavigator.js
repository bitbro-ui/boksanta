import React from 'react';
import {createDrawerNavigator} from 'react-navigation-drawer';
import {AppTabNavigator} from './apptabnavigator';
import {Customsidebarmenu} from './customsidebarmenu';
import Settings from '../screens/settingscreen';

export const AppDrawerNavigator = createDrawerNavigator({
    Home:{screen:AppTabNavigator},Settings:{screen:Settings}},{contentComponent:Customsidebarmenu},{initialRouteName:'Home'})