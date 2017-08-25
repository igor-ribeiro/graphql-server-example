import express from 'express';
import cors from 'cors';
import path from 'path';

import { buildSchema } from 'graphql';
import graphQLHTTP from 'express-graphql';
import {
  fileLoader,
  mergeTypes,
  mergeResolvers,
} from 'merge-graphql-schemas';

const typeDefs = mergeTypes(fileLoader(path.join(__dirname, './src/graphql/types')));
const rootValue = mergeResolvers(fileLoader(path.join(__dirname, './src/graphql/resolvers')));
const schema = buildSchema(typeDefs);

const PORT = 4000;

const server = express();

server.use('*', cors({ origin: '*' }));

server.use('/', graphQLHTTP({
  schema,
  rootValue,
  graphiql: true,
}));

server.listen(PORT, () => console.log(`GraphQL Server is now running on http://localhost:${PORT}`));