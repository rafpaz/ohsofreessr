import { ApolloClient } from "apollo-client";
import { InMemoryCache } from "apollo-cache-inmemory";
import { HttpLink } from "apollo-link-http";
import fetch from "isomorphic-unfetch";

export default function createApolloClient(initialState, ctx) {
  // The `ctx` (NextPageContext) will only be present on the server.
  // use it to extract auth headers (ctx.req) or similar.
  return new ApolloClient({
    ssrMode: Boolean(ctx),
    link: new HttpLink({
      // uri: "https://rickandmortyapi.com/graphql", // Server URL (must be absolute)
      uri: "https://frbzh8sn.api.sanity.io/v1/graphql/production/default", // Server URL (must be absolute)
      credentials: "same-origin", // Additional fetch() options like `credentials` or `headers`
      headers: {
        Authorization:
          "Bearer skGtLAxEr2i6Ch2NL8X0vPYrr08YGQNCdEVgyg6dGIIweFxapDB9Te4uQbiY4FNku2vuUhd1KuRKuHulyPEP5Eag6bI9LDAlLAYDmha6uoD5gmfMbVow3eIIlHNJVvqUZt9QxJtUkNvfimwewMP7KXiCunPI1FGcbcCkkSOZmE0ztVR1w1oU",
      },
      fetch,
    }),
    cache: new InMemoryCache().restore(initialState),
  });
}
