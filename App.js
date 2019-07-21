

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import feed from './component/feed.js';
import profile from './component/profile.js';


const MainStack = createBottomTabNavigator ( {
  Feed : { screen : feed},
  Profile : { screen : profile}
})

export default createAppContainer(MainStack);




