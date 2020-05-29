import { withApollo } from 'next-apollo';
import ApolloClient, { InMemoryCache } from 'apollo-boost';

const apolloClient = new ApolloClient({
  uri: process.env.SANITY_URL,
  cache: new InMemoryCache(),
  headers: {
    Authorization: `Bearer ${process.env.SANITY_AUTH}`,
  },
});

export default withApollo(apolloClient);
