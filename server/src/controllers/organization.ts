import { ORGANIZATION_INFO_QUERY } from '@common/queries';
import {
  OrganizationCredentialsResponseBody,
  OrganizationInfoResponseQuery,
  OrganizationInfoResponseBody,
} from '@common/types';
import { prisma } from '@config/database';
import { RiseactInstance } from '@riseact/riseact-node-sdk';
import { RequestHandler } from 'express';

// Get the organization info from the GraphQL API.
export const OrganizationInfoHandler =
  (riseact: RiseactInstance): RequestHandler<null, OrganizationInfoResponseBody, null> =>
  async (req, res) => {
    // Create a GraphQL client for the user's organization
    const graphqlClient = await riseact.network.createGqlClient(req.organizationDomain);

    // Get the organization type from the common package
    const { data, error } = await graphqlClient.query<OrganizationInfoResponseQuery>({
      // Get the organization query from the common package
      query: ORGANIZATION_INFO_QUERY,
    });

    if (error) {
      return res.status(500);
    }

    // Return the organization data
    res.json({
      name: data.organization.name,
      logoUrl: data.organization.logo?.square,
    });
  };

// Get the organization client token from DB. This is useless, but it shows how to use your prisma client.
export const OrganizationCredentialsHandler =
  (): RequestHandler<null, OrganizationCredentialsResponseBody, null> => async (req, res) => {
    // Get the organization credentials from the database
    const credentials = await prisma.organizationCredentials.findUnique({
      where: {
        organizationDomain: req.organizationDomain,
      },
    });

    if (!credentials) {
      return res.status(500);
    }

    // Return the organization data
    res.json({
      clientToken: credentials.clientToken,
      organizationDomain: credentials.organizationDomain,
    });
  };
