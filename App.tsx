import React, {useEffect} from 'react';
import Routes from './src/routes';
import {StatusBar, View} from 'react-native';
import colors from './src/constants/colors';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

export default function App() {
  return (
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor={colors.statusBar} />
        <View style={{backgroundColor: colors.background, flex: 1}}>
          <Routes />
        </View>
      </NavigationContainer>
  );
}