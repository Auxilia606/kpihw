import React from 'react';

import QueryProvider from './QueryProvider';
import RootNavigator from './RootNavigator';

const App = () => {
  return (
    <QueryProvider>
      <RootNavigator />
    </QueryProvider>
  );
};

export default App;
