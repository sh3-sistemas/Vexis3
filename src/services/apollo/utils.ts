import { ApolloClient, InMemoryCache, createHttpLink, type NormalizedCacheObject } from '@apollo/client/core'
import { crudError, networkError, unauthenticatedError, unauthorizedError } from './error'

import { onError } from '@apollo/client/link/error'

type Headers = {
  'Authorization'?: string,
  'Content-Type'?: string,
}

function getHeaders() {
  const headers: Headers = {}
  const token = localStorage.getItem('access-token')
  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }
  headers['Content-Type'] = 'application/json'
  return headers
}

export const createSH3ApolloClient = (uri: string): ApolloClient<NormalizedCacheObject> => {
  const cache = new InMemoryCache()
  const httpLink = createHttpLink({
    uri,
    fetch: (uri, options) => {
      if (options) options.headers = getHeaders();
      return fetch(uri, options)
    }
  })

  // Handle errors
  const errorLink = onError((error) => {
    console.error('error! ' + uri, error)

    unauthorizedError(error) // check and handle if it is an error about unauthorization
    unauthenticatedError(error) // check and handle if it is an error about unauthentication
    crudError(error) // check and handle crud errors
    networkError(error) // check and handle erros about the network connection
  })

  return new ApolloClient({
    cache,
    link: errorLink.concat(httpLink)
  })
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const getQueryName = (query: { definitions: any[] }) => {
  if (!query) return null
  const definition = query.definitions.find((def) => def.operation == 'query')
  if (!definition) return null

  return definition.name.value
}
