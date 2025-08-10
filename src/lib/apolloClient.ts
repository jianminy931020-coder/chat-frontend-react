import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context'

// 创建 HTTP 链接
const httpLink = createHttpLink({
  uri:
    process.env.REACT_APP_GRAPHQL_ENDPOINT ||
    'https://chat-backend-workers.grace-lee931020.workers.dev/graphql',
})

// 设置认证头（如果需要）
const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      'Content-Type': 'application/json',
    },
  }
})

// 创建 Apollo Client 实例
const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      errorPolicy: 'all',
    },
    query: {
      errorPolicy: 'all',
    },
  },
})

export default client
