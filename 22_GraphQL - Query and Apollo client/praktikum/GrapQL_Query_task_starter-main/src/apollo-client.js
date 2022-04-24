import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://helpful-longhorn-63.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
  headers: {
    "x-hasura-admin-secret":
      "FvUuCX24Uil0babf2SA691vM0Yp1eKkxsd0B6te2rJCS0nNVShsDxLkftgAUwcAE",
  },
});
