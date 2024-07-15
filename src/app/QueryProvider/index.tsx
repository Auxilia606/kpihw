import React from 'react';
import {PropsWithChildren} from 'react';

import {QueryClient, QueryClientProvider} from '@tanstack/react-query';

const queryClient = new QueryClient();

const QueryProvider = (props: PropsWithChildren) => {
  const {children} = props;

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default QueryProvider;
