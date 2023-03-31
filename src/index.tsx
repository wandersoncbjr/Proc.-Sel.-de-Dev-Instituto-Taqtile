import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Login from './Login';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://template-onboarding-node-sjz6wnaoia-uc.a.run.app/graphql',
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <Login />
    </ApolloProvider>
  </React.StrictMode>,
);
