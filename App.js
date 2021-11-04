import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer, createSwitchNavigator } from 'react-navigation'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import MapScreen from './src/Screens/MapScreen'
import MapListScreen from './src/Screens/MapListScreen'
import { setNavigator } from './src/navigationRef'

const switchNavigator = createSwitchNavigator({
  mainFlow: createBottomTabNavigator({
    Map: MapScreen,
    Menu: MapListScreen
  })
})

const App = createAppContainer(switchNavigator)

export default () => {
  return (
    <App 
      ref={navigator => {
        setNavigator(navigator)
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
