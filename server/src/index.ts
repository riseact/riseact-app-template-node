import express, { Express } from 'express';
import RiseactSDK from '@riseact/riseact-node-sdk';
import RiseactConfig from '@config/riseact';
import { OrganizationCredentialsHandler, OrganizationInfoHandler } from '@controllers/organization';
import { WebhookEventTopic } from '@common/gql/graphql';

async function createServer() {
  const app: Express = express();

  /* ------------------------- Initialize Riseact SDK ------------------------- */

  // Create the Riseact SDK instance with the client ID and client secret generated from Riseact
  const riseact = await RiseactSDK(RiseactConfig);

  const publicRouter = express.Router();
  // Register a webhook to listen to the SupporterCreated events
  publicRouter.use(
    riseact.network.registerWebhook(WebhookEventTopic.SupporterCreated, (data) => {
      console.log('Webhook received', data);
    }),
  );

  /* ----------------- Your (protected) API endpoints go here ----------------- */

  /* Every request to the following endpoints will be authenticated with Riseact. */
  /* If the user is not authenticated, the request will be redirected to the Riseact login page. */
  const protectedRouter = express.Router();

  protectedRouter.get('/api/hello', (req, res) => {
    res.send('Hello World!');
  });
  protectedRouter.get('/api/organization-info', OrganizationInfoHandler(riseact));
  protectedRouter.get('/api/organization-credentials', OrganizationCredentialsHandler());

  /* ------------------------------ Serve assets ------------------------------ */

  riseact.utils.startRiseactApp(app, riseact, {
    publicRouter,
    protectedRouter,
  });
}

// Start the server
createServer();
