import React from 'react';
import {PaperProvider} from 'react-native-paper';

import QueryProvider from './QueryProvider';
import RootNavigator from './RootNavigator';

const App = () => {
  return (
    <PaperProvider>
      <QueryProvider>
        <RootNavigator />
      </QueryProvider>
    </PaperProvider>
  );
};

export default App;
