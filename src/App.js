import React from 'react';
import Layout from './components/Layout';
import AppProvider from './contexts/app';

const App = () => {
  return (
    <div>
      <AppProvider>
        <Layout />
      </AppProvider>
    </div>
  )
};

export default App;
