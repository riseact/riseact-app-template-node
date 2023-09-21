import type { RiseactConfig } from '@riseact/riseact-node-sdk';
import path from 'path';
import dotenv from 'dotenv';
import { prisma } from './database';

dotenv.config(process.env.NODE_ENV ? { path: path.join(process.cwd(), './../.env') } : {});

const RiseactConfig: RiseactConfig = {
  // Provide your application ID and secret from Riseact
  auth: {
    clientId: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
  },

  // Provide a method to manage the credentials for the organizations to RiseactSDK.
  // The storage type are:
  // - 'memory': The credentials will be stored in memory. This is not recommended for production!
  // - 'sqlite': The credentials will be stored in a SQLite database. This is ideal if you don't need a database for your application.
  // - 'custom': You can provide your own methods to manage the credentials. In this example, we use Prisma to manage the credentials in a SQLite database.
  storage: {
    type: 'custom',
    custom: {
      getCredentialsByClientToken: async (clientToken) => {
        const credentials = await prisma.organizationCredentials.findFirst({
          where: {
            clientToken,
          },
        });

        return credentials;
      },
      getCredentialsByOrganizationId: async (organizationId) => {
        const credentials = await prisma.organizationCredentials.findUnique({
          where: {
            organizationId,
          },
        });

        return credentials;
      },
      saveCredentials: async (credentials) => {
        await prisma.organizationCredentials.upsert({
          where: {
            organizationId: credentials.organizationId,
          },
          update: credentials,
          create: credentials,
        });
      },
    },
  },

  ...(process.env.NODE_ENV === 'development' && {
    // todo Riseact developers only
    hosts: {
      accounts: 'http://accounts.localhost:8000',
      core: 'http://core.localhost:8000',
    },
    // todo: remove

    dev: {
      // todo Riseact developers only
      hmrClientPort: 3000,
      // todo: remove

      // Provide the path to your Vite configuration file and the root directory of your client application.
      viteConfig: {
        root: path.join(process.cwd(), '../client'),
        configFile: path.join(process.cwd(), '../client/vite.config.ts'),
      },
    },
  }),
};

export default RiseactConfig;
