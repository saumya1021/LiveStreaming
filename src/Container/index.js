import React from 'react';
import { createAppContainer } from 'react-navigation';
import LiveVideo from './LiveVideo';
import Dashboard from './Dashboard';
import Splash from './splash';
import PlayVideo from './PlayVideo';
import { createStackNavigator } from 'react-navigation-stack'


const AppNavigator = createStackNavigator(
  {
    Splash:{
      screen: Splash
    },
    LiveVideo: {
      screen: LiveVideo,
    },
    Dashboard: {
      screen: Dashboard,
    },
    PlayVideo: {
      screen: PlayVideo,
    }
  },
  {
    initialRouteName: 'Splash',
    swipeEnabled: false,
    headerMode: 'none',
  },
);
export default createAppContainer(AppNavigator);