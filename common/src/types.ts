export type OrganizationInfoQueryResponse = {
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
