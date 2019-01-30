import fetch from "isomorphic-fetch"; 
// IE 에서는 isomorphic-fetch 를 사용해야 호환가능

import ApolloClient from "apollo-boost";

import { createHttpLink } from 'apollo-link-http';

const link = createHttpLink({ uri: '/graphql', fetch: fetch });

const client = new ApolloClient({
    uri : "http://localhost:4000/",
    link
});

export default client;