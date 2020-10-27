import React from 'react';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import Home from '../pages/Home';

const { Navigator, Screen } = createMaterialTopTabNavigator();

const routes: React.FC = () => {
  return (
    <Navigator
      initialRouteName="Home"
      tabBarPosition="bottom"
      tabBarOptions={{
        showIcon: true,
        showLabel: false,
        contentContainerStyle: {
          backgroundColor: '#13131A',
        },
        style: {
          borderTopColor: 'rgba(20, 20, 20, 0.9)',
          borderTopWidth: 1
        },
        pressColor: '#7159c1',
        activeTintColor: '#7159c1',
        inactiveTintColor: '#fff'
      }}
    >
      <Screen
        name="Aprender"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="video-vintage" size={26} color={color} />
          ),
        }}
      />
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialIcon name="home" size={26} color={color} />
          ),
        }}
      />
      <Screen
        name="Ensinar"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="teach" size={26} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}

export default routes;
