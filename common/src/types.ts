export type OrganizationInfoResponseQuery = {
  organization: {
    name: string;
    logo: {
      square: string;
    };
  };
  user: {
    name: string;
  };
};

export interface OrganizationInfoResponseBody {
  id: number;
  name: string;
  logoUrl: string;
}

export interface OrganizationCredentialsResponseBody {
  organizationId: number;
  clientToken: string;
}
