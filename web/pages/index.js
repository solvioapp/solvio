import React from 'react'
import Button from '@material-ui/core/Button'
import { gql } from '@apollo/client';
import fetch from 'isomorphic-unfetch';
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from '@apollo/client';
import Home from '../components/home'

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: new HttpLink({
    uri: 'https://48p1r2roz4.sse.codesandbox.io',
    fetch,
  })
});

const App = () => {
  return (
    <ApolloProvider client={client}>
      <Home/>
    </ApolloProvider>
  );
}

client
  .query({
    query: gql`
      {
        rates(currency: "USD") {
          currency
        }
      }
    `
  })
  .then(result => console.log(result));

export default App