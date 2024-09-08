import { ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client"
// import Cookies from "js-cookie"

import { setContext } from "@apollo/client/link/context"

const httpLink = createHttpLink({
  uri: "https://ap-south-1.cdn.hygraph.com/content/cm0rppl0f01i407vzzdhfraga/master",
})

const authLink = setContext((_, { headers }) => {
//   const token = Cookies.get("token")

//   return {
//     headers: {
//       ...headers,
//       authorization: token ? `Bearer ${token}` : "",
//     },
//   }
})

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  connectToDevTools: true,
})
