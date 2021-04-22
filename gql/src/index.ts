import { ApolloServer } from 'apollo-server'
import { typeDefs } from './typeDefs'
import { resolvers } from './resolvers'
import { dataSources } from './context'

const server = new ApolloServer({ typeDefs, resolvers, dataSources })

server.listen().then(({ url }) => console.log(`🚀  Server ready at ${url}`))

