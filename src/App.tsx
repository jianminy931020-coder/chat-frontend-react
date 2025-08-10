import React from 'react';
import { ApolloProvider } from '@apollo/client';
import apolloClient from './lib/apolloClient';
import Chat from './components/Chat';
import './index.css';

const App: React.FC = () => {
  return (
    <ApolloProvider client={apolloClient}>
      <div className="App">
        <Chat />
      </div>
    </ApolloProvider>
  );
};

export default App;