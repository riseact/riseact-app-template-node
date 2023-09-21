import express, { Express } from 'express';
import http from 'http';
import serveStatic from 'serve-static';
import RiseactSDK from '@riseact/riseact-node-sdk';
import cors from 'cors';
import RiseactConfig from '@config/riseact';
import {} from '@env';
import { OrganizationCredentialsHandler, OrganizationInfoHandler } from '@controllers/organization';

async function createServer() {
  const app: Express = express();
  const server = http.createServer(app);

  /* ------------------------- Initialize Riseact SDK ------------------------- */

  // Create the Riseact SDK instance with the client ID and client secret generated from Riseact
  const riseact = await RiseactSDK(RiseactConfig);

  // Uncomment the following line to enable the GraphQL Playground
  app.use(cors({ origin: true, credentials: true }));

  // Create the OAuth endpoints for Riseact and check if the user is authenticated
  app.use(riseact.auth.authMiddleware);

  // Create an endpoint for the GraphQL API that will proxy the request to Riseact
  app.use('/graphql', riseact.network.gqlRewriterHandler);

  /* ----------------- Your (protected) API endpoints go here ----------------- */

  /* Every request to the following endpoints will be authenticated with Riseact. */
  /* If the user is not authenticated, the request will be redirected to the Riseact login page. */

  app.get('/api/hello', (req, res) => {
    res.send('Hello World!');
  });
  app.get('/api/organization-info', OrganizationInfoHandler(riseact));
  app.get('/api/organization-credentials', OrganizationCredentialsHandler());

  /* ------------------------------ Serve assets ------------------------------ */

  if (process.env.NODE_ENV === 'production') {
    console.info('🚀 Production mode, using frontend build');
    app.use(serveStatic(`${process.cwd()}/static`));
  } else {
    console.info('🔧 Development mode, using frontend dev server');
    app.use(riseact.devTools.devMiddleware);
    server.on('upgrade', riseact.devTools.hmrProxyHandler);
  }

  server.listen(process.env.SERVER_PORT || 3000, () => {
    console.log(`⚡️ Server is running!`);
  });
}

// Start the server
createServer();
