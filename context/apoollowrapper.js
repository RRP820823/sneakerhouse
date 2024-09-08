import { client } from '@/server/apolloclient';
import { createContext, useContext } from 'react';
import { ApolloProvider } from "@apollo/client";

const ApolloContext = createContext();

export default function ApolloContextProvider({children}) {

  return (
    <ApolloContext.Provider >
        <ApolloProvider client={client}>
           {children}
        </ApolloProvider>
    </ApolloContext.Provider>
  )
}

export const useGetApolloClient = () => useContext(ApolloContext);
// ... existing code ...
// function MyComponent() {

//   return (
//     <div>
//       <p>Current theme: {theme}</p>
//     </div>
//   )
// }
