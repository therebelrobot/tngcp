import * as React from 'react'

import {ApolloProvider} from '@apollo/client'

import {useApollo} from '_/contexts/Api/apolloClient'

export const ApiProvider = ({children, initialState}) => {
  const apolloClient = useApollo(initialState)
  return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>
}
