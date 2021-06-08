import React, {useEffect} from 'react';
import Routes from './src/routes';
import {StatusBar, View} from 'react-native';
import { Provider } from 'react-redux';
import colors from './src/constants/colors';
import store from './src/store';
import {NavigationContainer, DefaultTheme} from '@react-navigation/native';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar barStyle="light-content" backgroundColor={colors.statusBar} />
        <View style={{backgroundColor: colors.background, flex: 1}}>
          <Routes />
        </View>
      </NavigationContainer>
    </Provider>
  );
}