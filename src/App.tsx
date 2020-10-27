import React from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
} from 'react-native';
import Routes from './routes';

import { ThemeProvider } from 'styled-components'

interface Theme {
  backgroundColor: string,
  primary: string,
}

const themes: Theme = {
  backgroundColor: '#13131A',
  primary: '#f7f7f7',
}

const App = () => {
  return (
    <ThemeProvider theme={themes}>
      <StatusBar backgroundColor="#13131A" />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
