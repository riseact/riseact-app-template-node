import type { RiseactConfig } from '@riseact/riseact-node-sdk';
import path from 'path';
import dotenv from 'dotenv';

dotenv.config(process.env.NODE_ENV ? { path: path.join(process.cwd(), './../.env') } : {});

const RiseactConfig: RiseactConfig = {
  auth: {
    clientId: process.env.CLIENT_ID!,
    clientSecret: process.env.CLIENT_SECRET!,
  },

  ...(process.env.NODE_ENV === 'development' && {
    dev: {
      viteConfig: {
        root: path.join(process.cwd(), '../client'),
        configFile: path.join(process.cwd(), '../client/vite.config.ts'),
      },
    },
  }),
};

export default RiseactConfig;
