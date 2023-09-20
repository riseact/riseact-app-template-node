import { gql } from '@apollo/client';

export const ORGANIZATION_INFO_QUERY = gql`
  query GetOrganizationInfo {
    organization {
      name
      logo {
        square
      }
    }
    user {
      name
    }
  }
`;
