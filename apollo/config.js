/*
data in schema.json generated with this query:

query Schema {
  __schema {
    types {
    name
    kind
      possibleTypes {
        name
      }
    }
  }
}

*/
// import { InMemoryCache, IntrospectionFragmentMatcher } from 'apollo-cache-inmemory';
// import schema from './schema.json';
// const fragmentMatcher = new IntrospectionFragmentMatcher({
//   introspectionQueryResultData: schema
// });
//
// export default ({ req, app }) => {
//   return {
//     httpEndpoint: 'https://mycoolgraphqlapi.com/api',
//     getAuth: () => 'Bearer 4ea46ef94c23e12045c7f20bf32ed9',
//     tokenName: 'apollo-token',
//     cache: new InMemoryCache({ fragmentMatcher })
//   };
// };

export default function (context) {
  return {
    httpEndpoint: 'https://graphql.datocms.com',
    getAuth: () => 'Bearer 4ea46ef94c23e12045c7f20bf32ed9'
  };
}
