/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Date (isoformat) */
  Date: any;
  /** Date with time (isoformat) */
  DateTime: any;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  Upload: any;
  /** Represents NULL values */
  Void: any;
};

export type Application = {
  __typename?: 'Application';
  appUrl?: Maybe<Scalars['String']>;
  authorEmail?: Maybe<Scalars['String']>;
  authorHomepageUrl?: Maybe<Scalars['String']>;
  authorName?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  installUrl?: Maybe<Scalars['String']>;
  isEmbedded: Scalars['Boolean'];
  isInstalled: Scalars['Boolean'];
  logoUrl?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  type: ApplicationType;
};

export type ApplicationFilters = {
  installed?: InputMaybe<Scalars['Boolean']>;
  q?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<ApplicationType>;
};

export enum ApplicationType {
  Admin = 'ADMIN',
  Cli = 'CLI',
  Internal = 'INTERNAL',
  Kiosk = 'KIOSK',
  Partners = 'PARTNERS',
  Pod = 'POD',
  Private = 'PRIVATE',
  Public = 'PUBLIC',
  Sitefront = 'SITEFRONT'
}

export type Article = {
  __typename?: 'Article';
  blog: Blog;
  content?: Maybe<Scalars['String']>;
  cover?: Maybe<Media>;
  createDate: Scalars['DateTime'];
  id: Scalars['Int'];
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  sitefrontUrl: Scalars['String'];
  slug: Scalars['String'];
  template?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updateDate: Scalars['DateTime'];
  url: Scalars['String'];
  visibility: WebDocumentVisibility;
};

export type ArticleConnection = {
  __typename?: 'ArticleConnection';
  edges: Array<ArticleEdge>;
  pageInfo: PageInfo;
};

export type ArticleEdge = {
  __typename?: 'ArticleEdge';
  cursor: Scalars['String'];
  node: Article;
};

export type ArticleInput = {
  blogId?: Scalars['Int'];
  content?: InputMaybe<Scalars['String']>;
  coverId?: InputMaybe<Scalars['Int']>;
  seoDescription?: InputMaybe<Scalars['String']>;
  seoTitle?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  template?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  visibility?: WebDocumentVisibility;
};

export type ArticlesFiltersInput = {
  q?: InputMaybe<Scalars['String']>;
};

export type ArticlesResponse = {
  __typename?: 'ArticlesResponse';
  article?: Maybe<Article>;
  userErrors?: Maybe<Array<UserError>>;
};

export type Asset = {
  __typename?: 'Asset';
  attachment?: Maybe<Scalars['String']>;
  checksum: Scalars['String'];
  contentType: Scalars['String'];
  createdAt: Scalars['String'];
  id: Scalars['Int'];
  key: Scalars['String'];
  previewUrl: Scalars['String'];
  size: Scalars['Int'];
  staticSections?: Maybe<Scalars['JSON']>;
  templateType: TemplateType;
  theme: Theme;
  type?: Maybe<AssetType>;
  updatedAt: Scalars['String'];
  value?: Maybe<Scalars['JSON']>;
};

export type AssetInput = {
  attachment?: InputMaybe<Scalars['String']>;
  contentType: Scalars['String'];
  key: Scalars['String'];
  themeId: Scalars['Int'];
  value?: InputMaybe<Scalars['String']>;
};

export enum AssetType {
  Asset = 'ASSET',
  Config = 'CONFIG',
  Layout = 'LAYOUT',
  Manifest = 'MANIFEST',
  Section = 'SECTION',
  Snippet = 'SNIPPET',
  Template = 'TEMPLATE'
}

export type AssetsFiltersInput = {
  assetType?: InputMaybe<AssetType>;
  key?: InputMaybe<Scalars['String']>;
  themeUuid: Scalars['String'];
};

export enum BillingCycle {
  Annual = 'ANNUAL',
  Monthly = 'MONTHLY'
}

export enum BillingPlanType {
  Development = 'DEVELOPMENT',
  Grow = 'GROW',
  Hero = 'HERO',
  Team = 'TEAM'
}

export type Block = {
  __typename?: 'Block';
  settings: Scalars['JSON'];
  type: Scalars['String'];
};

export type BlockItem = {
  __typename?: 'BlockItem';
  block: Block;
  key: Scalars['String'];
};

export type BlockSchema = {
  __typename?: 'BlockSchema';
  limit?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  settings?: Maybe<Array<Field>>;
  type: Scalars['String'];
};

export type Blog = {
  __typename?: 'Blog';
  content?: Maybe<Scalars['String']>;
  cover?: Maybe<Media>;
  createDate: Scalars['DateTime'];
  id: Scalars['Int'];
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  sitefrontUrl: Scalars['String'];
  slug: Scalars['String'];
  template?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updateDate: Scalars['DateTime'];
  url: Scalars['String'];
  visibility: WebDocumentVisibility;
};

export type BlogConnection = {
  __typename?: 'BlogConnection';
  edges: Array<BlogEdge>;
  pageInfo: PageInfo;
};

export type BlogEdge = {
  __typename?: 'BlogEdge';
  cursor: Scalars['String'];
  node: Blog;
};

export type BlogInput = {
  content?: InputMaybe<Scalars['String']>;
  coverId?: InputMaybe<Scalars['Int']>;
  seoDescription?: InputMaybe<Scalars['String']>;
  seoTitle?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  template?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  visibility?: WebDocumentVisibility;
};

export type BlogsFiltersInput = {
  q?: InputMaybe<Scalars['String']>;
};

export type BlogsResponse = {
  __typename?: 'BlogsResponse';
  blog?: Maybe<Blog>;
  userErrors?: Maybe<Array<UserError>>;
};

export type Campaign = {
  __typename?: 'Campaign';
  allowPeerToPeer?: Maybe<Scalars['Boolean']>;
  channels: Array<Scalars['Int']>;
  content?: Maybe<Scalars['String']>;
  costExamples: Array<CostExample>;
  cover?: Maybe<Media>;
  createDate: Scalars['DateTime'];
  form?: Maybe<Form>;
  goal?: Maybe<Scalars['Float']>;
  id: Scalars['Int'];
  isGoalEnabled: Scalars['Boolean'];
  note?: Maybe<Scalars['String']>;
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  sitefrontUrl: Scalars['String'];
  slug: Scalars['String'];
  tags: Array<Scalars['String']>;
  template?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  type: CampaignType;
  updateDate: Scalars['DateTime'];
  url: Scalars['String'];
  visibility: WebDocumentVisibility;
};

export type CampaignConnection = {
  __typename?: 'CampaignConnection';
  edges: Array<CampaignEdge>;
  pageInfo: PageInfo;
};

export type CampaignEdge = {
  __typename?: 'CampaignEdge';
  cursor: Scalars['String'];
  node: Campaign;
};

export type CampaignFilters = {
  channels?: InputMaybe<Array<Scalars['String']>>;
  order?: InputMaybe<Scalars['String']>;
  q?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  tagsNot?: InputMaybe<Array<Scalars['String']>>;
};

export type CampaignInput = {
  allowPeerToPeer?: InputMaybe<Scalars['Boolean']>;
  channels: Array<Scalars['Int']>;
  code?: InputMaybe<Scalars['String']>;
  content?: InputMaybe<Scalars['String']>;
  costExamples: Array<CostExampleInput>;
  coverId?: InputMaybe<Scalars['Int']>;
  formId?: InputMaybe<Scalars['Int']>;
  goal?: InputMaybe<Scalars['Float']>;
  isGoalEnabled?: InputMaybe<Scalars['Boolean']>;
  seoDescription?: InputMaybe<Scalars['String']>;
  seoTitle?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  tags: Array<Scalars['String']>;
  template?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  type?: InputMaybe<CampaignType>;
  visibility?: InputMaybe<WebDocumentVisibility>;
};

export type CampaignResponse = {
  __typename?: 'CampaignResponse';
  campaign?: Maybe<Campaign>;
  userErrors?: Maybe<Array<UserError>>;
};

export enum CampaignType {
  Donation = 'DONATION',
  Lead = 'LEAD'
}

export type Checkout = {
  __typename?: 'Checkout';
  campaign: Campaign;
  checkoutUrl: Scalars['String'];
  completedDate?: Maybe<Scalars['DateTime']>;
  createDate: Scalars['DateTime'];
  donation?: Maybe<Donation>;
  donationAmount?: Maybe<Scalars['Float']>;
  donationFrequency?: Maybe<Frequency>;
  id: Scalars['Int'];
  state: CheckoutState;
  supporter?: Maybe<Supporter>;
  supporterAddress?: Maybe<Scalars['String']>;
  supporterAddress2?: Maybe<Scalars['String']>;
  supporterBusinessName?: Maybe<Scalars['String']>;
  supporterCity?: Maybe<Scalars['String']>;
  supporterCountry?: Maybe<Scalars['String']>;
  supporterDateOfBirth?: Maybe<Scalars['Date']>;
  supporterEmail?: Maybe<Scalars['String']>;
  supporterEmailMarketing?: Maybe<Scalars['Boolean']>;
  supporterFirstName?: Maybe<Scalars['String']>;
  supporterFullname: Scalars['String'];
  supporterLastName?: Maybe<Scalars['String']>;
  supporterLocality?: Maybe<Scalars['String']>;
  supporterMobile?: Maybe<Scalars['String']>;
  supporterPhone?: Maybe<Scalars['String']>;
  supporterPhoneMarketing?: Maybe<Scalars['Boolean']>;
  supporterPlaceOfBirth?: Maybe<Scalars['String']>;
  supporterPostalCode?: Maybe<Scalars['String']>;
  supporterPrivacy?: Maybe<Scalars['Boolean']>;
  supporterSex?: Maybe<Scalars['String']>;
  supporterSsn?: Maybe<Scalars['String']>;
  supporterType?: Maybe<Scalars['String']>;
  supporterVat?: Maybe<Scalars['String']>;
  tags: Array<Scalars['String']>;
  token: Scalars['String'];
  updateDate: Scalars['DateTime'];
};

export type CheckoutConnection = {
  __typename?: 'CheckoutConnection';
  edges: Array<CheckoutEdge>;
  pageInfo: PageInfo;
};

export type CheckoutEdge = {
  __typename?: 'CheckoutEdge';
  cursor: Scalars['String'];
  node: Checkout;
};

export type CheckoutFilters = {
  order?: InputMaybe<Scalars['String']>;
  q?: InputMaybe<Scalars['String']>;
};

export type CheckoutInput = {
  amount?: InputMaybe<Scalars['Float']>;
  campaignId?: InputMaybe<Scalars['Int']>;
  device?: InputMaybe<Scalars['String']>;
  donationData?: InputMaybe<DonationInput>;
  frequency?: InputMaybe<Frequency>;
  paymentMethodId?: InputMaybe<Scalars['Int']>;
  peerCampaignId?: InputMaybe<Scalars['Int']>;
  supporterData?: InputMaybe<SupporterInput>;
  supporterId?: InputMaybe<Scalars['Int']>;
  tags: Array<Scalars['String']>;
};

export type CheckoutPaymentInput = {
  amount?: InputMaybe<Scalars['Float']>;
  creditCardId?: InputMaybe<Scalars['Int']>;
  donationId?: InputMaybe<Scalars['Int']>;
  paymentDate?: InputMaybe<Scalars['DateTime']>;
  paymentMethodId?: InputMaybe<Scalars['Int']>;
  peerCampaignId?: InputMaybe<Scalars['Int']>;
  sepaBankAccountId?: InputMaybe<Scalars['Int']>;
  state?: InputMaybe<PaymentState>;
};

export type CheckoutResponse = {
  __typename?: 'CheckoutResponse';
  checkout?: Maybe<Checkout>;
  userErrors?: Maybe<Array<UserError>>;
};

export type CheckoutSession = {
  __typename?: 'CheckoutSession';
  url: Scalars['String'];
};

export enum CheckoutState {
  Closed = 'CLOSED',
  Open = 'OPEN'
}

export type Comment = {
  __typename?: 'Comment';
  author: Scalars['String'];
  authorAvatar?: Maybe<Scalars['String']>;
  body: Scalars['String'];
  createDate: Scalars['DateTime'];
  id: Scalars['Int'];
  updateDate: Scalars['DateTime'];
};

export type CommentCreateInput = {
  body: Scalars['String'];
  subject: CommentSubject;
  subjectId: Scalars['Int'];
};

export type CommentResponse = {
  __typename?: 'CommentResponse';
  comment?: Maybe<Comment>;
  userErrors?: Maybe<Array<UserError>>;
};

export enum CommentSubject {
  Checkout = 'CHECKOUT',
  Donation = 'DONATION',
  Supporter = 'SUPPORTER'
}

export type CommentUpdateInput = {
  body: Scalars['String'];
};

export type CostExample = {
  __typename?: 'CostExample';
  amount: Scalars['Float'];
  description: Scalars['String'];
  uuid: Scalars['String'];
};

export type CostExampleInput = {
  amount: Scalars['Float'];
  description: Scalars['String'];
  uuid: Scalars['String'];
};

export type Country = {
  __typename?: 'Country';
  code: Scalars['String'];
  name: Scalars['String'];
};

export type CountryFilters = {
  q?: InputMaybe<Scalars['String']>;
};

export type CountryResponse = {
  __typename?: 'CountryResponse';
  results: Array<Country>;
};

export enum Currencies {
  Eur = 'EUR',
  Gbp = 'GBP',
  Usd = 'USD'
}

export type CustomerPortal = {
  __typename?: 'CustomerPortal';
  dashboard: Scalars['String'];
  paymentMethod: Scalars['String'];
};

export type DateRange = {
  end?: InputMaybe<Scalars['Date']>;
  start?: InputMaybe<Scalars['Date']>;
};

export type Domain = {
  __typename?: 'Domain';
  cnameIsValid: Scalars['Boolean'];
  host: Scalars['String'];
  id: Scalars['Int'];
  managedBy: Scalars['String'];
  status: DomainStatus;
  type: DomainType;
};

export enum DomainStatus {
  Active = 'ACTIVE',
  Pending = 'PENDING'
}

export enum DomainType {
  Primary = 'PRIMARY',
  Redirect = 'REDIRECT'
}

export type DomainsResponse = {
  __typename?: 'DomainsResponse';
  domain?: Maybe<Domain>;
  userErrors?: Maybe<Array<UserError>>;
};

export type Donation = {
  __typename?: 'Donation';
  amount: Scalars['Float'];
  campaign: Campaign;
  checkout?: Maybe<Checkout>;
  code: Scalars['String'];
  completedDate?: Maybe<Scalars['DateTime']>;
  createDate: Scalars['DateTime'];
  frequency?: Maybe<Frequency>;
  id: Scalars['Int'];
  note?: Maybe<Scalars['String']>;
  paymentMethod?: Maybe<PaymentMethod>;
  state: DonationState;
  supporter: Supporter;
  tags: Array<Scalars['String']>;
  totalPaid: Scalars['Float'];
  totalPayments: Scalars['Int'];
  updateDate: Scalars['DateTime'];
};

export type DonationConnection = {
  __typename?: 'DonationConnection';
  edges: Array<DonationEdge>;
  pageInfo: PageInfo;
};

export type DonationDomain = {
  filters?: InputMaybe<DonationFiltersInput>;
  ids?: InputMaybe<Array<Scalars['Int']>>;
};

export type DonationEdge = {
  __typename?: 'DonationEdge';
  cursor: Scalars['String'];
  node: Donation;
};

export type DonationFiltersInput = {
  createDate?: InputMaybe<DateRange>;
  frequencies?: InputMaybe<Array<Frequency>>;
  order?: InputMaybe<Scalars['String']>;
  q?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  tagsNot?: InputMaybe<Array<Scalars['String']>>;
  totalPaid?: InputMaybe<IntRange>;
  totalPayments?: InputMaybe<IntRange>;
};

export type DonationInput = {
  amount: Scalars['Float'];
  device?: InputMaybe<Scalars['String']>;
  frequency?: InputMaybe<Frequency>;
  note?: InputMaybe<Scalars['String']>;
  tags: Array<Scalars['String']>;
};

export type DonationPaymentInput = {
  amount?: InputMaybe<Scalars['Float']>;
  frequency?: InputMaybe<Frequency>;
  paymentDate?: InputMaybe<Scalars['DateTime']>;
  paymentMethodId?: InputMaybe<Scalars['Int']>;
};

export type DonationResponse = {
  __typename?: 'DonationResponse';
  donation?: Maybe<Donation>;
  userErrors?: Maybe<Array<UserError>>;
};

export enum DonationState {
  Active = 'ACTIVE',
  Done = 'DONE',
  Draft = 'DRAFT',
  PastDue = 'PAST_DUE',
  Pending = 'PENDING',
  Revoked = 'REVOKED'
}

export enum ErrorCode {
  BadInput = 'BAD_INPUT',
  NotFound = 'NOT_FOUND',
  NotUnique = 'NOT_UNIQUE',
  Protected = 'PROTECTED'
}

export enum EventTopic {
  CampaignCreated = 'CAMPAIGN_CREATED',
  CampaignDeleted = 'CAMPAIGN_DELETED',
  CampaignUpdated = 'CAMPAIGN_UPDATED',
  CheckoutClosed = 'CHECKOUT_CLOSED',
  CheckoutCreated = 'CHECKOUT_CREATED',
  CheckoutUpdated = 'CHECKOUT_UPDATED',
  DonationCreated = 'DONATION_CREATED',
  DonationUpdated = 'DONATION_UPDATED',
  PaymentCreated = 'PAYMENT_CREATED',
  PaymentUpdated = 'PAYMENT_UPDATED',
  SupporterCreated = 'SUPPORTER_CREATED',
  SupporterDeleted = 'SUPPORTER_DELETED',
  SupporterDonationCreated = 'SUPPORTER_DONATION_CREATED',
  SupporterUpdated = 'SUPPORTER_UPDATED',
  TotemRegistered = 'TOTEM_REGISTERED'
}

export type Events = TimelineBasicEvent | TimelineCommentEvent;

export type EventsConnection = {
  __typename?: 'EventsConnection';
  edges: Array<EventsEdge>;
  pageInfo: PageInfo;
};

export type EventsEdge = {
  __typename?: 'EventsEdge';
  cursor: Scalars['String'];
  node: Events;
};

export type ExistingDomainInput = {
  host: Scalars['String'];
};

export enum ExportFormat {
  Csv = 'CSV',
  Xlsx = 'XLSX'
}

export type Field = {
  __typename?: 'Field';
  content?: Maybe<Scalars['String']>;
  default?: Maybe<Scalars['JSON']>;
  id: Scalars['String'];
  info?: Maybe<Scalars['String']>;
  label: Scalars['String'];
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
  options: Array<FieldOptions>;
  type: Scalars['String'];
};

export type FieldOptions = {
  __typename?: 'FieldOptions';
  label: Scalars['String'];
  value: Scalars['String'];
};

export type Form = {
  __typename?: 'Form';
  allowCustomAmount: Scalars['Boolean'];
  allowCustomSubscriptionAmount: Scalars['Boolean'];
  asks: Array<Scalars['Float']>;
  asksSubscription: Array<Scalars['Float']>;
  defaultAmount?: Maybe<Scalars['Float']>;
  defaultSubscriptionAmount?: Maybe<Scalars['Float']>;
  hasOneOff: Scalars['Boolean'];
  hasSubscription: Scalars['Boolean'];
  hasSubscriptionCustomOptions: Scalars['Boolean'];
  id: Scalars['Int'];
  maxAmount?: Maybe<Scalars['Float']>;
  maxSubscriptionAmount?: Maybe<Scalars['Float']>;
  minAmount?: Maybe<Scalars['Float']>;
  minSubscriptionAmount?: Maybe<Scalars['Float']>;
  name: Scalars['String'];
  note?: Maybe<Scalars['String']>;
  requiredFields: Array<Scalars['String']>;
  shownFields: Array<Scalars['String']>;
};

export type FormConnection = {
  __typename?: 'FormConnection';
  edges: Array<FormEdge>;
  pageInfo: PageInfo;
};

export type FormEdge = {
  __typename?: 'FormEdge';
  cursor: Scalars['String'];
  node: Form;
};

export type FormFilters = {
  order?: InputMaybe<Scalars['String']>;
  q?: InputMaybe<Scalars['String']>;
};

export type FormInput = {
  allowCustomAmount?: InputMaybe<Scalars['Boolean']>;
  allowCustomSubscriptionAmount?: InputMaybe<Scalars['Boolean']>;
  asks: Array<Scalars['Float']>;
  asksSubscription: Array<Scalars['Float']>;
  defaultAmount?: InputMaybe<Scalars['Float']>;
  defaultSubscriptionAmount?: InputMaybe<Scalars['Float']>;
  hasOneOff?: InputMaybe<Scalars['Boolean']>;
  hasSubscription?: InputMaybe<Scalars['Boolean']>;
  hasSubscriptionCustomOptions?: InputMaybe<Scalars['Boolean']>;
  maxAmount?: InputMaybe<Scalars['Float']>;
  maxSubscriptionAmount?: InputMaybe<Scalars['Float']>;
  minAmount?: InputMaybe<Scalars['Float']>;
  minSubscriptionAmount?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  note?: InputMaybe<Scalars['String']>;
  requiredFields: Array<Scalars['String']>;
  shownFields: Array<Scalars['String']>;
};

export enum Frequency {
  Annually = 'ANNUALLY',
  Monthly = 'MONTHLY',
  Oneoff = 'ONEOFF'
}

export type IntRange = {
  end?: InputMaybe<Scalars['Int']>;
  start?: InputMaybe<Scalars['Int']>;
};

export type Invite = {
  __typename?: 'Invite';
  email: Scalars['String'];
  id: Scalars['Int'];
  invitationAcceptDate?: Maybe<Scalars['String']>;
  invitationSentDate?: Maybe<Scalars['String']>;
  invitationStatus: StaffInvitationStatus;
  organization: Organization;
  role: StaffRole;
  token: Scalars['String'];
};

export type InviteInput = {
  email: Scalars['String'];
  role: StaffRole;
};

export type ManualPaymentInput = {
  amount: Scalars['Float'];
  paymentDate: Scalars['DateTime'];
  paymentMethodId?: InputMaybe<Scalars['Int']>;
};

export type ManualPaymentMethodInput = {
  channels: Array<Scalars['Int']>;
  description?: InputMaybe<Scalars['String']>;
  hasOneoffSupport: Scalars['Boolean'];
  hasSubscriptionSupport: Scalars['Boolean'];
  instructions?: InputMaybe<Scalars['String']>;
  label: Scalars['String'];
};

export type Media = {
  __typename?: 'Media';
  alt: Scalars['String'];
  createDate: Scalars['String'];
  height: Scalars['Int'];
  id: Scalars['Int'];
  medium: Scalars['String'];
  name: Scalars['String'];
  size: Scalars['Int'];
  small: Scalars['String'];
  square: Scalars['String'];
  url: Scalars['String'];
  width: Scalars['Int'];
};

export type MediaConnection = {
  __typename?: 'MediaConnection';
  edges: Array<MediaEdge>;
  pageInfo: PageInfo;
};

export type MediaEdge = {
  __typename?: 'MediaEdge';
  cursor: Scalars['String'];
  node: Media;
};

export type Menu = {
  __typename?: 'Menu';
  handle: Scalars['String'];
  id: Scalars['Int'];
  items: Array<MenuItem>;
  name: Scalars['String'];
};

export type MenuInput = {
  handle: Scalars['String'];
  items: Array<MenuItemInput>;
  name: Scalars['String'];
};

export type MenuItem = {
  __typename?: 'MenuItem';
  id: Scalars['Int'];
  label: Scalars['String'];
  link: Scalars['String'];
  type: MenuItemType;
};

export type MenuItemInput = {
  label: Scalars['String'];
  link?: InputMaybe<Scalars['String']>;
};

export enum MenuItemType {
  Article = 'ARTICLE',
  Blog = 'BLOG',
  Campaign = 'CAMPAIGN',
  External = 'EXTERNAL',
  Homepage = 'HOMEPAGE',
  Page = 'PAGE',
  Project = 'PROJECT'
}

export type MenuResponse = {
  __typename?: 'MenuResponse';
  menu?: Maybe<Menu>;
  userErrors?: Maybe<Array<UserError>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  applicationUninstall: Application;
  articlesCreate: ArticlesResponse;
  articlesDelete: ArticlesResponse;
  articlesUpdate: ArticlesResponse;
  assetCreate: Asset;
  assetDelete: Asset;
  assetUpdate: Asset;
  billingCreateCheckoutSession: CheckoutSession;
  billingSelectPlan: PendingSubscription;
  blogsCreate: BlogsResponse;
  blogsDelete: BlogsResponse;
  blogsUpdate: BlogsResponse;
  campaignCreate: CampaignResponse;
  campaignDelete: CampaignResponse;
  campaignUpdate: CampaignResponse;
  checkoutCreate: CheckoutResponse;
  checkoutRegisterPayment: CheckoutResponse;
  checkoutUpdate: CheckoutResponse;
  commentCreate: CommentResponse;
  commentDelete: CommentResponse;
  commentUpdate: CommentResponse;
  domainsCheckStatus: DomainsResponse;
  domainsConnectExisting: DomainsResponse;
  domainsSetPrimary: DomainsResponse;
  donationDelete: Donation;
  donationExport: Scalars['String'];
  donationImport: Task;
  donationReceiptSend: Scalars['Boolean'];
  donationRegisterPayment: DonationResponse;
  donationRevoke: Donation;
  donationUpdate: Donation;
  formCreate: Form;
  formDelete: Form;
  formUpdate: Form;
  inviteCreate: Invite;
  inviteResend: Invite;
  inviteRevoke: Invite;
  manualPaymentMethodCreate: PaymentMethodResponse;
  manualPaymentMethodDelete: PaymentMethodResponse;
  manualPaymentMethodUpdate: PaymentMethodResponse;
  mediaCreate: Media;
  menuCreate: MenuResponse;
  menuDelete: MenuResponse;
  menuUpdate: MenuResponse;
  notificationSend: Notification;
  notificationUpdate: Notification;
  organizationUpdate: OrganizationResponse;
  organizationUpdateLegalData: OrganizationResponse;
  pagesCreate: PagesResponse;
  pagesDelete: PagesResponse;
  pagesUpdate: PagesResponse;
  paperDocumentUpdate: PaperDocument;
  paymentExport: Scalars['String'];
  paymentRefund: PaymentResponse;
  paymentUpdate: PaymentResponse;
  projectCreate: ProjectResponse;
  projectDelete: ProjectResponse;
  projectRemoveItem: ProjectResponse;
  projectUpdate: ProjectResponse;
  projectUpdateItems: ProjectResponse;
  segmentCreate: SegmentResponse;
  segmentDelete: SegmentResponse;
  segmentUpdate: SegmentResponse;
  staffUpdate: StaffResponse;
  storeThemeInstall: Theme;
  stripeActivate: StripeAccount;
  stripeCheckoutIntentCreate: StripeCheckoutResponse;
  stripeGenerateDashboardLink: StripeLink;
  stripeGenerateOnboardingLink: StripeLink;
  stripeTerminalCheckoutIntentCreate: StripeCheckoutResponse;
  supporterBulkTags: Scalars['Boolean'];
  supporterCreate: Supporter;
  supporterDelete: Supporter;
  supporterExport: Scalars['String'];
  supporterImport: Task;
  supporterSendTaxCertificate: Supporter;
  supporterUpdate: Supporter;
  terminalConnectionTokenCreate: Scalars['String'];
  terminalDelete: Scalars['String'];
  terminalLocationCreate: StripeTerminalLocation;
  terminalLocationDelete?: Maybe<Scalars['Void']>;
  terminalLocationUpdate: StripeTerminalLocation;
  terminalRegister: StripeTerminal;
  terminalUpdateLabel: StripeTerminal;
  themeCreate: Theme;
  themeDelete: Theme;
  themeDownload: Theme;
  themeDuplicate: Theme;
  themeInitDevelopment: Theme;
  themePublish: Theme;
  themePublishDevelopment: Theme;
  themeUpdate: Theme;
  themeUpgrade: Theme;
  totemDelete: TotemResponse;
  totemRegister: TotemResponse;
  webhooksCreate: Webhook;
  webhooksDelete: Webhook;
  webhooksUpdate: Webhook;
  websiteUpdate: Website;
};


export type MutationApplicationUninstallArgs = {
  id: Scalars['Int'];
};


export type MutationArticlesCreateArgs = {
  data: ArticleInput;
};


export type MutationArticlesDeleteArgs = {
  id: Scalars['Int'];
};


export type MutationArticlesUpdateArgs = {
  data: ArticleInput;
  id: Scalars['Int'];
};


export type MutationAssetCreateArgs = {
  data: AssetInput;
};


export type MutationAssetDeleteArgs = {
  id: Scalars['Int'];
};


export type MutationAssetUpdateArgs = {
  data: AssetInput;
  id: Scalars['Int'];
};


export type MutationBillingCreateCheckoutSessionArgs = {
  cycle: BillingCycle;
  planType: BillingPlanType;
};


export type MutationBillingSelectPlanArgs = {
  cycle: BillingCycle;
  planType: BillingPlanType;
};


export type MutationBlogsCreateArgs = {
  data: BlogInput;
};


export type MutationBlogsDeleteArgs = {
  id: Scalars['Int'];
};


export type MutationBlogsUpdateArgs = {
  data: BlogInput;
  id: Scalars['Int'];
};


export type MutationCampaignCreateArgs = {
  data: CampaignInput;
};


export type MutationCampaignDeleteArgs = {
  id: Scalars['Int'];
};


export type MutationCampaignUpdateArgs = {
  data: CampaignInput;
  id: Scalars['Int'];
};


export type MutationCheckoutCreateArgs = {
  data: CheckoutInput;
};


export type MutationCheckoutRegisterPaymentArgs = {
  data: CheckoutPaymentInput;
  id: Scalars['Int'];
};


export type MutationCheckoutUpdateArgs = {
  data: CheckoutInput;
  id: Scalars['Int'];
};


export type MutationCommentCreateArgs = {
  data: CommentCreateInput;
};


export type MutationCommentDeleteArgs = {
  id: Scalars['Int'];
};


export type MutationCommentUpdateArgs = {
  data: CommentUpdateInput;
  id: Scalars['Int'];
};


export type MutationDomainsCheckStatusArgs = {
  id: Scalars['Int'];
};


export type MutationDomainsConnectExistingArgs = {
  data: ExistingDomainInput;
};


export type MutationDomainsSetPrimaryArgs = {
  id: Scalars['Int'];
};


export type MutationDonationDeleteArgs = {
  id: Scalars['Int'];
};


export type MutationDonationExportArgs = {
  domain: DonationDomain;
  format: ExportFormat;
};


export type MutationDonationImportArgs = {
  createMissingCampaigns: Scalars['Boolean'];
  createMissingPaymentMethod: Scalars['Boolean'];
  fallbackCampaignId?: InputMaybe<Scalars['Int']>;
  file: Scalars['Upload'];
  importAnonymousPayments: Scalars['Boolean'];
};


export type MutationDonationReceiptSendArgs = {
  id: Scalars['Int'];
};


export type MutationDonationRegisterPaymentArgs = {
  data: DonationPaymentInput;
  id: Scalars['Int'];
};


export type MutationDonationRevokeArgs = {
  id: Scalars['Int'];
};


export type MutationDonationUpdateArgs = {
  data: DonationInput;
  id: Scalars['Int'];
};


export type MutationFormCreateArgs = {
  data: FormInput;
};


export type MutationFormDeleteArgs = {
  id: Scalars['Int'];
};


export type MutationFormUpdateArgs = {
  data: FormInput;
  id: Scalars['Int'];
};


export type MutationInviteCreateArgs = {
  data: InviteInput;
};


export type MutationInviteResendArgs = {
  id: Scalars['Int'];
};


export type MutationInviteRevokeArgs = {
  id: Scalars['Int'];
};


export type MutationManualPaymentMethodCreateArgs = {
  data: ManualPaymentMethodInput;
};


export type MutationManualPaymentMethodDeleteArgs = {
  id: Scalars['Int'];
};


export type MutationManualPaymentMethodUpdateArgs = {
  data: ManualPaymentMethodInput;
  id: Scalars['Int'];
};


export type MutationMediaCreateArgs = {
  file: Scalars['Upload'];
};


export type MutationMenuCreateArgs = {
  data: MenuInput;
};


export type MutationMenuDeleteArgs = {
  id: Scalars['Int'];
};


export type MutationMenuUpdateArgs = {
  data: MenuInput;
  id: Scalars['Int'];
};


export type MutationNotificationSendArgs = {
  code: NotificationCode;
  data: NotificationSendInput;
};


export type MutationNotificationUpdateArgs = {
  code: NotificationCode;
  data: NotificationInput;
};


export type MutationOrganizationUpdateArgs = {
  data: OrganizationInput;
};


export type MutationOrganizationUpdateLegalDataArgs = {
  data: OrganizationLegalInput;
};


export type MutationPagesCreateArgs = {
  data: PageInput;
};


export type MutationPagesDeleteArgs = {
  id: Scalars['Int'];
};


export type MutationPagesUpdateArgs = {
  data: PageInput;
  id: Scalars['Int'];
};


export type MutationPaperDocumentUpdateArgs = {
  code: PaperDocumentCode;
  data: PaperDocumentInput;
};


export type MutationPaymentExportArgs = {
  domain: PaymentDomain;
  format: ExportFormat;
};


export type MutationPaymentRefundArgs = {
  id: Scalars['Int'];
};


export type MutationPaymentUpdateArgs = {
  data: ManualPaymentInput;
  id: Scalars['Int'];
};


export type MutationProjectCreateArgs = {
  data: ProjectInput;
};


export type MutationProjectDeleteArgs = {
  id: Scalars['Int'];
};


export type MutationProjectRemoveItemArgs = {
  campaignId: Scalars['Int'];
  id: Scalars['Int'];
};


export type MutationProjectUpdateArgs = {
  data: ProjectInput;
  id: Scalars['Int'];
};


export type MutationProjectUpdateItemsArgs = {
  campaignIds: Array<Scalars['Int']>;
  id: Scalars['Int'];
};


export type MutationSegmentCreateArgs = {
  data: SegmentInput;
};


export type MutationSegmentDeleteArgs = {
  id: Scalars['Int'];
};


export type MutationSegmentUpdateArgs = {
  data: SegmentInput;
  id: Scalars['Int'];
};


export type MutationStaffUpdateArgs = {
  data: StaffInput;
  id: Scalars['Int'];
};


export type MutationStoreThemeInstallArgs = {
  uuid: Scalars['String'];
};


export type MutationStripeCheckoutIntentCreateArgs = {
  checkoutToken: Scalars['String'];
  paymentTypes: StripePaymentTypeInput;
};


export type MutationStripeTerminalCheckoutIntentCreateArgs = {
  checkoutToken: Scalars['String'];
};


export type MutationSupporterBulkTagsArgs = {
  action: SupporterBulkTagAction;
  filters: SupporterFiltersInput;
  tags: Array<Scalars['String']>;
};


export type MutationSupporterCreateArgs = {
  data: SupporterInput;
};


export type MutationSupporterDeleteArgs = {
  id: Scalars['Int'];
};


export type MutationSupporterExportArgs = {
  domain: SupporterDomain;
  format: ExportFormat;
};


export type MutationSupporterImportArgs = {
  file: Scalars['Upload'];
  overrideSupporters: Scalars['Boolean'];
};


export type MutationSupporterSendTaxCertificateArgs = {
  id: Scalars['Int'];
  method: NotificationMethods;
};


export type MutationSupporterUpdateArgs = {
  data: SupporterInput;
  id: Scalars['Int'];
};


export type MutationTerminalConnectionTokenCreateArgs = {
  locationId: Scalars['String'];
};


export type MutationTerminalDeleteArgs = {
  id: Scalars['String'];
};


export type MutationTerminalLocationCreateArgs = {
  data: TerminalLocationInput;
};


export type MutationTerminalLocationDeleteArgs = {
  id: Scalars['String'];
};


export type MutationTerminalLocationUpdateArgs = {
  data: TerminalLocationInput;
  id: Scalars['String'];
};


export type MutationTerminalRegisterArgs = {
  data: TerminalRegisterInput;
};


export type MutationTerminalUpdateLabelArgs = {
  id: Scalars['String'];
  label: Scalars['String'];
};


export type MutationThemeCreateArgs = {
  data: ThemeInput;
};


export type MutationThemeDeleteArgs = {
  uuid: Scalars['String'];
};


export type MutationThemeDownloadArgs = {
  uuid: Scalars['String'];
};


export type MutationThemeDuplicateArgs = {
  uuid: Scalars['String'];
};


export type MutationThemeInitDevelopmentArgs = {
  uuid: Scalars['String'];
};


export type MutationThemePublishArgs = {
  uuid: Scalars['String'];
};


export type MutationThemePublishDevelopmentArgs = {
  devUuid: Scalars['String'];
  themeUuid: Scalars['String'];
};


export type MutationThemeUpdateArgs = {
  data: ThemeInput;
  uuid: Scalars['String'];
};


export type MutationThemeUpgradeArgs = {
  uuid: Scalars['String'];
};


export type MutationTotemDeleteArgs = {
  deviceId: Scalars['String'];
};


export type MutationTotemRegisterArgs = {
  data: TotemInput;
};


export type MutationWebhooksCreateArgs = {
  data: WebhookInput;
};


export type MutationWebhooksDeleteArgs = {
  id: Scalars['Int'];
};


export type MutationWebhooksUpdateArgs = {
  data: WebhookInput;
  id: Scalars['Int'];
};


export type MutationWebsiteUpdateArgs = {
  data: WebsiteInput;
};

export type Notification = {
  __typename?: 'Notification';
  code: NotificationCode;
  description?: Maybe<Scalars['String']>;
  emailBody?: Maybe<Scalars['String']>;
  emailDesign: Scalars['JSON'];
  emailSubject?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  sendByEmail: Scalars['Boolean'];
  sendBySms: Scalars['Boolean'];
  smsBody?: Maybe<Scalars['String']>;
};

export enum NotificationCode {
  CheckoutSendLink = 'CHECKOUT_SEND_LINK',
  DonationReceived = 'DONATION_RECEIVED',
  DonationRefunded = 'DONATION_REFUNDED',
  P2PDonationReceived = 'P2P_DONATION_RECEIVED',
  P2PWelcome = 'P2P_WELCOME',
  StaffDonationReceived = 'STAFF_DONATION_RECEIVED',
  StaffDonationRefunded = 'STAFF_DONATION_REFUNDED',
  TaxCertificate = 'TAX_CERTIFICATE'
}

export type NotificationInput = {
  emailBody: Scalars['String'];
  emailDesign: Scalars['String'];
  emailSubject: Scalars['String'];
  sendByEmail: Scalars['Boolean'];
  sendBySms: Scalars['Boolean'];
  smsBody: Scalars['String'];
};

export enum NotificationMethods {
  Email = 'EMAIL',
  Sms = 'SMS'
}

export type NotificationSendInput = {
  checkoutId?: InputMaybe<Scalars['Int']>;
  donationId?: InputMaybe<Scalars['Int']>;
  message?: InputMaybe<Scalars['String']>;
  recipient: Scalars['String'];
  subject: Scalars['String'];
  supporterId: Scalars['Int'];
};

export enum OnboardingStatus {
  Active = 'ACTIVE',
  Expired = 'EXPIRED',
  FreePlan = 'FREE_PLAN',
  MissingData = 'MISSING_DATA'
}

export type Organization = {
  __typename?: 'Organization';
  addressLine1?: Maybe<Scalars['String']>;
  addressLine2?: Maybe<Scalars['String']>;
  baseSitefrontUrl: Scalars['String'];
  city?: Maybe<Scalars['String']>;
  consentScopes: Array<Scalars['String']>;
  contactEmail?: Maybe<Scalars['String']>;
  contactPhone?: Maybe<Scalars['String']>;
  country?: Maybe<Country>;
  currency: Currencies;
  domain: Scalars['String'];
  id: Scalars['Int'];
  isInvoiceRequired?: Maybe<Scalars['Boolean']>;
  jwtPassKey: Scalars['String'];
  legalName?: Maybe<Scalars['String']>;
  logo?: Maybe<Media>;
  name: Scalars['String'];
  onboardingStatus: OnboardingStatus;
  owner: User;
  planType?: Maybe<BillingPlanType>;
  postalCode?: Maybe<Scalars['String']>;
  privacyPolicy?: Maybe<Scalars['String']>;
  senderEmail?: Maybe<Scalars['String']>;
  senderEmailStatus: OrganizationSenderEmailStatus;
  sitefrontUrl: Scalars['String'];
  state?: Maybe<Scalars['String']>;
  taxIdentificationNumber?: Maybe<Scalars['String']>;
  tos?: Maybe<Scalars['String']>;
  vat?: Maybe<Scalars['String']>;
  vatExchange?: Maybe<Scalars['String']>;
};

export type OrganizationInput = {
  addressLine1?: InputMaybe<Scalars['String']>;
  addressLine2?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  contactEmail?: InputMaybe<Scalars['String']>;
  contactPhone?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  currency: Currencies;
  isInvoiceRequired?: InputMaybe<Scalars['Boolean']>;
  legalName?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<Scalars['Int']>;
  name: Scalars['String'];
  postalCode?: InputMaybe<Scalars['String']>;
  senderEmail?: InputMaybe<Scalars['String']>;
  state?: InputMaybe<Scalars['String']>;
  taxIdentificationNumber?: InputMaybe<Scalars['String']>;
  vat?: InputMaybe<Scalars['String']>;
  vatExchange?: InputMaybe<Scalars['String']>;
};

export type OrganizationLegalInput = {
  consentScopes: Array<Scalars['String']>;
  privacyPolicy: Scalars['String'];
  tos: Scalars['String'];
};

export type OrganizationResponse = {
  __typename?: 'OrganizationResponse';
  organization?: Maybe<Organization>;
  userErrors?: Maybe<Array<UserError>>;
};

export type OrganizationSenderEmailStatus = {
  __typename?: 'OrganizationSenderEmailStatus';
  dkim: Scalars['Boolean'];
  dkimValue?: Maybe<Scalars['String']>;
  spf: Scalars['Boolean'];
  spfValue?: Maybe<Scalars['String']>;
  verificationString?: Maybe<Scalars['String']>;
  verified: Scalars['Boolean'];
};

export type Page = {
  __typename?: 'Page';
  content?: Maybe<Scalars['String']>;
  cover?: Maybe<Media>;
  createDate: Scalars['DateTime'];
  id: Scalars['Int'];
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  sitefrontUrl: Scalars['String'];
  slug: Scalars['String'];
  template?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  updateDate: Scalars['DateTime'];
  url: Scalars['String'];
  visibility: WebDocumentVisibility;
};

export type PageConnection = {
  __typename?: 'PageConnection';
  edges: Array<PageEdge>;
  pageInfo: PageInfo;
};

export type PageEdge = {
  __typename?: 'PageEdge';
  cursor: Scalars['String'];
  node: Page;
};

export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
  total: Scalars['Int'];
};

export type PageInput = {
  content?: InputMaybe<Scalars['String']>;
  coverId?: InputMaybe<Scalars['Int']>;
  seoDescription?: InputMaybe<Scalars['String']>;
  seoTitle?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  template?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  visibility?: WebDocumentVisibility;
};

export type PagesFiltersInput = {
  q?: InputMaybe<Scalars['String']>;
};

export type PagesResponse = {
  __typename?: 'PagesResponse';
  page?: Maybe<Page>;
  userErrors?: Maybe<Array<UserError>>;
};

export type PaginationInput = {
  after?: InputMaybe<Scalars['String']>;
  before?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  last?: InputMaybe<Scalars['Int']>;
};

export type PaperDocument = {
  __typename?: 'PaperDocument';
  code: PaperDocumentCode;
  content?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  group: Scalars['String'];
  name: Scalars['String'];
  style?: Maybe<Scalars['String']>;
};

export enum PaperDocumentCode {
  DonationReceipt = 'DONATION_RECEIPT'
}

export type PaperDocumentInput = {
  content?: InputMaybe<Scalars['String']>;
  style?: InputMaybe<Scalars['String']>;
};

export type Payment = {
  __typename?: 'Payment';
  amount: Scalars['Float'];
  createDate: Scalars['DateTime'];
  donation?: Maybe<Donation>;
  id: Scalars['Int'];
  paymentDate?: Maybe<Scalars['DateTime']>;
  paymentMethod?: Maybe<PaymentMethod>;
  state: PaymentState;
  stripeIntentId?: Maybe<Scalars['String']>;
  supporter?: Maybe<Supporter>;
  updateDate: Scalars['DateTime'];
};

export type PaymentConnection = {
  __typename?: 'PaymentConnection';
  edges: Array<PaymentEdge>;
  pageInfo: PageInfo;
};

export type PaymentDomain = {
  filters?: InputMaybe<PaymentFiltersInput>;
  ids?: InputMaybe<Array<Scalars['Int']>>;
};

export type PaymentEdge = {
  __typename?: 'PaymentEdge';
  cursor: Scalars['String'];
  node: Payment;
};

export type PaymentFiltersInput = {
  donation?: InputMaybe<Scalars['Int']>;
  order?: InputMaybe<Scalars['String']>;
  payemntDate?: InputMaybe<DateRange>;
  paymentMethod?: InputMaybe<Scalars['Int']>;
  q?: InputMaybe<Scalars['String']>;
  supporter?: InputMaybe<Scalars['Int']>;
};

export type PaymentMethod = {
  __typename?: 'PaymentMethod';
  channels: Array<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  hasOneoffSupport: Scalars['Boolean'];
  hasSubscriptionSupport: Scalars['Boolean'];
  id: Scalars['Int'];
  instructions?: Maybe<Scalars['String']>;
  label?: Maybe<Scalars['String']>;
  processor: PaymentProcessor;
};

export type PaymentMethodResponse = {
  __typename?: 'PaymentMethodResponse';
  paymentMethod?: Maybe<PaymentMethod>;
  userErrors?: Maybe<Array<UserError>>;
};

export enum PaymentProcessor {
  Manual = 'MANUAL',
  Stripe = 'STRIPE'
}

export type PaymentResponse = {
  __typename?: 'PaymentResponse';
  payment?: Maybe<Payment>;
  userErrors?: Maybe<Array<UserError>>;
};

export enum PaymentState {
  Failed = 'FAILED',
  Paid = 'PAID',
  Pending = 'PENDING',
  Refunded = 'REFUNDED'
}

export type PendingSubscription = {
  __typename?: 'PendingSubscription';
  clientSecret: Scalars['String'];
  status: SubscriptionStatus;
  subscriptionId: Scalars['String'];
};

export type Plan = {
  __typename?: 'Plan';
  interval: Scalars['String'];
  nextPaymentAt: Scalars['Int'];
  paymentMethod?: Maybe<PlanPaymentMethod>;
};

export type PlanPaymentMethod = {
  __typename?: 'PlanPaymentMethod';
  brand?: Maybe<Scalars['String']>;
  last4: Scalars['String'];
  type: PlanPaymentMethodType;
};

export enum PlanPaymentMethodType {
  Card = 'CARD',
  Sdd = 'SDD'
}

export type Project = {
  __typename?: 'Project';
  campaignsOrder: ProjectCampaignsOrder;
  content?: Maybe<Scalars['String']>;
  cover?: Maybe<Media>;
  createDate: Scalars['DateTime'];
  id: Scalars['Int'];
  items: Array<ProjectCampaignItem>;
  rules: Array<ProjectRule>;
  rulesMatch: ProjectRuleMatchType;
  seoDescription?: Maybe<Scalars['String']>;
  seoTitle?: Maybe<Scalars['String']>;
  sitefrontUrl: Scalars['String'];
  slug: Scalars['String'];
  template?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  type: ProjectType;
  updateDate: Scalars['DateTime'];
  url: Scalars['String'];
  visibility: WebDocumentVisibility;
};

export type ProjectCampaignItem = {
  __typename?: 'ProjectCampaignItem';
  campaign: Campaign;
  id: Scalars['Int'];
  position: Scalars['Int'];
};

export enum ProjectCampaignsOrder {
  AlphaAz = 'ALPHA_AZ',
  AlphaZa = 'ALPHA_ZA',
  Manual = 'MANUAL',
  Newer = 'NEWER',
  Older = 'OLDER'
}

export type ProjectConnection = {
  __typename?: 'ProjectConnection';
  edges: Array<ProjectEdge>;
  pageInfo: PageInfo;
};

export type ProjectEdge = {
  __typename?: 'ProjectEdge';
  cursor: Scalars['String'];
  node: Project;
};

export type ProjectFilters = {
  order?: InputMaybe<Scalars['String']>;
  q?: InputMaybe<Scalars['String']>;
};

export type ProjectInput = {
  campaignsOrder?: ProjectCampaignsOrder;
  content?: InputMaybe<Scalars['String']>;
  coverId?: InputMaybe<Scalars['Int']>;
  rules: Array<ProjectRuleInput>;
  rulesMatch?: ProjectRuleMatchType;
  seoDescription?: InputMaybe<Scalars['String']>;
  seoTitle?: InputMaybe<Scalars['String']>;
  slug?: InputMaybe<Scalars['String']>;
  template?: InputMaybe<Scalars['String']>;
  title: Scalars['String'];
  type?: ProjectType;
  visibility?: WebDocumentVisibility;
};

export type ProjectResponse = {
  __typename?: 'ProjectResponse';
  project?: Maybe<Project>;
  userErrors?: Maybe<Array<UserError>>;
};

export type ProjectRule = {
  __typename?: 'ProjectRule';
  field: ProjectRuleField;
  operator: ProjectRuleOperator;
  uuid: Scalars['String'];
  value: Scalars['String'];
};

export enum ProjectRuleField {
  Tags = 'TAGS',
  Title = 'TITLE'
}

export type ProjectRuleInput = {
  field: ProjectRuleField;
  operator: ProjectRuleOperator;
  uuid: Scalars['String'];
  value: Scalars['String'];
};

export enum ProjectRuleMatchType {
  All = 'ALL',
  Any = 'ANY'
}

export enum ProjectRuleOperator {
  Contains = 'CONTAINS',
  EndsWith = 'ENDS_WITH',
  EqualsTo = 'EQUALS_TO',
  NotContains = 'NOT_CONTAINS',
  NotEqualsTo = 'NOT_EQUALS_TO',
  StartsWith = 'STARTS_WITH'
}

export enum ProjectType {
  Dynamic = 'DYNAMIC',
  Manual = 'MANUAL'
}

export type Query = {
  __typename?: 'Query';
  application: Application;
  applications: Array<Application>;
  applicationsAvailable: Array<Application>;
  article: Article;
  articles: ArticleConnection;
  asset?: Maybe<Asset>;
  assetLayout?: Maybe<Asset>;
  assets: Array<Asset>;
  blog: Blog;
  blogs: BlogConnection;
  campaign: Campaign;
  campaignTags: StrConnection;
  campaigns: CampaignConnection;
  checkout: Checkout;
  checkouts: CheckoutConnection;
  checkoutsAbandoned: CheckoutConnection;
  checkoutsAdminGenerated: CheckoutConnection;
  countries: CountryResponse;
  customerPortal: CustomerPortal;
  domain?: Maybe<Domain>;
  domains: Array<Domain>;
  donation: Donation;
  donationTags: StrConnection;
  donations: DonationConnection;
  form: Form;
  forms: FormConnection;
  invites: Array<Invite>;
  manualPaymentMethod: PaymentMethod;
  manualPaymentMethods: Array<PaymentMethod>;
  media: MediaConnection;
  mediaSingle: Media;
  menu: Menu;
  menuByHandle: Menu;
  menus: Array<Menu>;
  notification: Notification;
  organization: Organization;
  organizations: Array<Organization>;
  owner: Staff;
  page: Page;
  pages: PageConnection;
  paperDocument: PaperDocument;
  payment: Payment;
  payments: PaymentConnection;
  plan?: Maybe<Plan>;
  project: Project;
  projects: ProjectConnection;
  segment: Segment;
  segments: SegmentConnection;
  staff: Staff;
  staffs: Array<Staff>;
  storeTheme: StoreTheme;
  storeThemes: Array<StoreTheme>;
  stripe?: Maybe<StripeAccount>;
  stripeCustomerCards: Array<StripeCard>;
  supporter: Supporter;
  supporterSavedCards: Array<StripeCard>;
  supporterTags: StrConnection;
  supporters: SupporterConnection;
  terminal: StripeTerminal;
  terminalLocation: StripeTerminalLocation;
  terminalLocations: Array<StripeTerminalLocation>;
  terminals: Array<StripeTerminal>;
  terminalsByLocation: Array<StripeTerminal>;
  theme: Theme;
  themeCurrent: Theme;
  themeSections: Array<SectionSchemaItem>;
  themeSettings: Array<SectionSchemaItem>;
  themes: Array<Theme>;
  timeline: EventsConnection;
  totem: Totem;
  totems: TotemConnection;
  unsplash: UnsplashResults;
  user: Staff;
  webhook: Webhook;
  webhooks: Array<Webhook>;
  website: Website;
};


export type QueryApplicationArgs = {
  id: Scalars['Int'];
};


export type QueryApplicationsArgs = {
  filters?: InputMaybe<ApplicationFilters>;
};


export type QueryArticleArgs = {
  id: Scalars['Int'];
};


export type QueryArticlesArgs = {
  filters?: InputMaybe<ArticlesFiltersInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryAssetArgs = {
  key: Scalars['String'];
  themeUuid: Scalars['String'];
};


export type QueryAssetLayoutArgs = {
  templateKey: Scalars['String'];
  themeUuid: Scalars['String'];
};


export type QueryAssetsArgs = {
  filters: AssetsFiltersInput;
};


export type QueryBlogArgs = {
  id: Scalars['Int'];
};


export type QueryBlogsArgs = {
  filters?: InputMaybe<BlogsFiltersInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryCampaignArgs = {
  id: Scalars['Int'];
};


export type QueryCampaignTagsArgs = {
  pagination?: InputMaybe<PaginationInput>;
  q?: InputMaybe<Scalars['String']>;
};


export type QueryCampaignsArgs = {
  filters?: InputMaybe<CampaignFilters>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryCheckoutArgs = {
  id: Scalars['Int'];
};


export type QueryCheckoutsArgs = {
  filters?: InputMaybe<CheckoutFilters>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryCheckoutsAbandonedArgs = {
  filters?: InputMaybe<CheckoutFilters>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryCheckoutsAdminGeneratedArgs = {
  filters?: InputMaybe<CheckoutFilters>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryCountriesArgs = {
  filters?: InputMaybe<CountryFilters>;
};


export type QueryDomainArgs = {
  id: Scalars['Int'];
};


export type QueryDonationArgs = {
  id: Scalars['Int'];
};


export type QueryDonationTagsArgs = {
  pagination?: InputMaybe<PaginationInput>;
  q?: InputMaybe<Scalars['String']>;
};


export type QueryDonationsArgs = {
  filters?: InputMaybe<DonationFiltersInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryFormArgs = {
  id: Scalars['Int'];
};


export type QueryFormsArgs = {
  filters?: InputMaybe<FormFilters>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryManualPaymentMethodArgs = {
  id: Scalars['Int'];
};


export type QueryMediaArgs = {
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryMediaSingleArgs = {
  id: Scalars['Int'];
};


export type QueryMenuArgs = {
  id: Scalars['Int'];
};


export type QueryMenuByHandleArgs = {
  handle: Scalars['String'];
};


export type QueryNotificationArgs = {
  code: NotificationCode;
};


export type QueryPageArgs = {
  id: Scalars['Int'];
};


export type QueryPagesArgs = {
  filters?: InputMaybe<PagesFiltersInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryPaperDocumentArgs = {
  code: PaperDocumentCode;
};


export type QueryPaymentArgs = {
  id: Scalars['Int'];
};


export type QueryPaymentsArgs = {
  filters?: InputMaybe<PaymentFiltersInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryProjectArgs = {
  id: Scalars['Int'];
};


export type QueryProjectsArgs = {
  filters?: InputMaybe<ProjectFilters>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QuerySegmentArgs = {
  id: Scalars['Int'];
};


export type QuerySegmentsArgs = {
  filters?: InputMaybe<SegmentFiltersInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryStaffArgs = {
  id: Scalars['Int'];
};


export type QueryStaffsArgs = {
  filters?: InputMaybe<StaffFiltersInput>;
};


export type QueryStoreThemeArgs = {
  uuid: Scalars['String'];
};


export type QueryStripeCustomerCardsArgs = {
  stripeCustomerId: Scalars['String'];
};


export type QuerySupporterArgs = {
  id: Scalars['Int'];
};


export type QuerySupporterSavedCardsArgs = {
  id: Scalars['Int'];
  limit?: InputMaybe<Scalars['Int']>;
};


export type QuerySupporterTagsArgs = {
  pagination?: InputMaybe<PaginationInput>;
  q?: InputMaybe<Scalars['String']>;
};


export type QuerySupportersArgs = {
  filters?: InputMaybe<SupporterFiltersInput>;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryTerminalArgs = {
  id: Scalars['String'];
};


export type QueryTerminalLocationArgs = {
  id: Scalars['String'];
};


export type QueryTerminalLocationsArgs = {
  filters?: InputMaybe<TerminalLocationFilters>;
};


export type QueryTerminalsByLocationArgs = {
  locationId: Scalars['String'];
};


export type QueryThemeArgs = {
  uuid: Scalars['String'];
};


export type QueryThemeSectionsArgs = {
  themeUuid: Scalars['String'];
};


export type QueryThemeSettingsArgs = {
  themeUuid: Scalars['String'];
};


export type QueryThemesArgs = {
  filters?: InputMaybe<ThemesFiltersInput>;
};


export type QueryTimelineArgs = {
  filters: TimelineFilterInput;
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryTotemArgs = {
  deviceId: Scalars['String'];
};


export type QueryTotemsArgs = {
  pagination?: InputMaybe<PaginationInput>;
};


export type QueryUnsplashArgs = {
  page?: Scalars['Int'];
  perPage?: Scalars['Int'];
  query: Scalars['String'];
};


export type QueryWebhookArgs = {
  id: Scalars['Int'];
};

export type Section = {
  __typename?: 'Section';
  blockOrder: Array<Scalars['String']>;
  blocks: Array<BlockItem>;
  disabled: Scalars['Boolean'];
  settings: Scalars['JSON'];
  type: Scalars['String'];
};

export type SectionItem = {
  __typename?: 'SectionItem';
  key: Scalars['String'];
  section: Section;
};

export type SectionSchema = {
  __typename?: 'SectionSchema';
  blocks?: Maybe<Array<BlockSchema>>;
  cssClass?: Maybe<Scalars['String']>;
  limit?: Maybe<Scalars['Int']>;
  maxBlocks?: Maybe<Scalars['Int']>;
  name: Scalars['String'];
  presets?: Maybe<SectionSchemaPresets>;
  settings?: Maybe<Array<Field>>;
  tag?: Maybe<Scalars['String']>;
  templates?: Maybe<Array<Scalars['String']>>;
};

export type SectionSchemaItem = {
  __typename?: 'SectionSchemaItem';
  key: Scalars['String'];
  schema: SectionSchema;
};

export type SectionSchemaPresets = {
  __typename?: 'SectionSchemaPresets';
  blocks?: Maybe<Array<Block>>;
  settings?: Maybe<Scalars['JSON']>;
};

export type Segment = {
  __typename?: 'Segment';
  createDate: Scalars['DateTime'];
  entity: SegmentEntity;
  filters: Scalars['JSON'];
  id: Scalars['Int'];
  name: Scalars['String'];
  updateDate: Scalars['DateTime'];
};

export type SegmentConnection = {
  __typename?: 'SegmentConnection';
  edges: Array<SegmentEdge>;
  pageInfo: PageInfo;
};

export type SegmentEdge = {
  __typename?: 'SegmentEdge';
  cursor: Scalars['String'];
  node: Segment;
};

export enum SegmentEntity {
  Supporter = 'SUPPORTER'
}

export type SegmentFiltersInput = {
  entity: SegmentEntity;
  order?: InputMaybe<Scalars['String']>;
  q?: InputMaybe<Scalars['String']>;
};

export type SegmentInput = {
  entity: SegmentEntity;
  filters: Scalars['String'];
  name: Scalars['String'];
};

export type SegmentResponse = {
  __typename?: 'SegmentResponse';
  segment?: Maybe<Segment>;
  userErrors?: Maybe<Array<UserError>>;
};

export enum Sex {
  Female = 'FEMALE',
  Male = 'MALE'
}

export type Staff = {
  __typename?: 'Staff';
  bio?: Maybe<Scalars['String']>;
  createDate?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  id: Scalars['Int'];
  isOwner: Scalars['Boolean'];
  lastLoginDate?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  partnerId?: Maybe<Scalars['Int']>;
  role: StaffRole;
  state: StaffStatus;
  userId?: Maybe<Scalars['Int']>;
};

export type StaffFiltersInput = {
  state?: InputMaybe<StaffStatus>;
  type?: InputMaybe<StaffType>;
};

export type StaffInput = {
  bio?: InputMaybe<Scalars['String']>;
  role?: InputMaybe<StaffRole>;
  state?: InputMaybe<StaffStatus>;
};

export enum StaffInvitationStatus {
  Accepted = 'ACCEPTED',
  Canceled = 'CANCELED',
  Pending = 'PENDING',
  Rejected = 'REJECTED'
}

export type StaffResponse = {
  __typename?: 'StaffResponse';
  staff?: Maybe<Staff>;
  userErrors?: Maybe<Array<UserError>>;
};

export enum StaffRole {
  Admin = 'ADMIN',
  User = 'USER'
}

export enum StaffStatus {
  Active = 'ACTIVE',
  Deleted = 'DELETED',
  Suspended = 'SUSPENDED'
}

export enum StaffType {
  Internal = 'INTERNAL',
  Partner = 'PARTNER'
}

export type StoreTheme = {
  __typename?: 'StoreTheme';
  desktopScreenshot?: Maybe<Scalars['String']>;
  documentationUrl?: Maybe<Scalars['String']>;
  mobileScreenshot?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  partnerName?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  supportUrl?: Maybe<Scalars['String']>;
  tagline?: Maybe<Scalars['String']>;
  uuid: Scalars['String'];
  version: Scalars['String'];
};

export type StrConnection = {
  __typename?: 'StrConnection';
  edges: Array<StrEdge>;
  pageInfo: PageInfo;
};

export type StrEdge = {
  __typename?: 'StrEdge';
  cursor: Scalars['String'];
  node: Scalars['String'];
};

export type StripeAccount = {
  __typename?: 'StripeAccount';
  accountId?: Maybe<Scalars['String']>;
  chargesEnabled?: Maybe<Scalars['Boolean']>;
  detailsSubmitted?: Maybe<Scalars['Boolean']>;
  hasOneoffSupport: Scalars['Boolean'];
  hasSubscriptionSupport: Scalars['Boolean'];
  pubKey: Scalars['String'];
};

export type StripeCard = {
  __typename?: 'StripeCard';
  brand: StripeCardBrand;
  country: Scalars['String'];
  expMonth: Scalars['Int'];
  expYear: Scalars['Int'];
  fingerprint: Scalars['String'];
  funding: StripeCardFunding;
  id: Scalars['String'];
  last4: Scalars['String'];
};

export enum StripeCardBrand {
  Amex = 'AMEX',
  Diners = 'DINERS',
  Discover = 'DISCOVER',
  Jcb = 'JCB',
  Mastercard = 'MASTERCARD',
  Unionpay = 'UNIONPAY',
  Unknown = 'UNKNOWN',
  Visa = 'VISA'
}

export enum StripeCardFunding {
  Credit = 'CREDIT',
  Debit = 'DEBIT',
  Prepaid = 'PREPAID',
  Unknown = 'UNKNOWN'
}

export type StripeCheckoutIntent = {
  __typename?: 'StripeCheckoutIntent';
  clientSecret: Scalars['String'];
};

export type StripeCheckoutResponse = {
  __typename?: 'StripeCheckoutResponse';
  checkout?: Maybe<StripeCheckoutIntent>;
  userErrors?: Maybe<Array<UserError>>;
};

export type StripeLink = {
  __typename?: 'StripeLink';
  url: Scalars['String'];
};

export enum StripePaymentType {
  CreditCard = 'CREDIT_CARD',
  Pos = 'POS',
  SepaDirectDebit = 'SEPA_DIRECT_DEBIT'
}

export type StripePaymentTypeInput = {
  types: Array<StripePaymentType>;
};

export type StripeTerminal = {
  __typename?: 'StripeTerminal';
  id: Scalars['String'];
  label: Scalars['String'];
  location: StripeTerminalLocation;
  serialNumber: Scalars['String'];
  status: Scalars['String'];
};

export type StripeTerminalLocation = {
  __typename?: 'StripeTerminalLocation';
  addressCity: Scalars['String'];
  addressCountry: Scalars['String'];
  addressLine1: Scalars['String'];
  addressLine2?: Maybe<Scalars['String']>;
  addressPostalCode: Scalars['String'];
  addressState: Scalars['String'];
  displayName: Scalars['String'];
  id: Scalars['String'];
  terminalCount: Scalars['Int'];
};

export enum SubscriptionStatus {
  Active = 'ACTIVE',
  Canceled = 'CANCELED',
  Incomplete = 'INCOMPLETE',
  IncompleteExpired = 'INCOMPLETE_EXPIRED',
  PastDue = 'PAST_DUE',
  Trialing = 'TRIALING',
  Unpaid = 'UNPAID'
}

export type Supporter = {
  __typename?: 'Supporter';
  activeRegularDonations: Array<Donation>;
  address?: Maybe<Scalars['String']>;
  address2?: Maybe<Scalars['String']>;
  averageDonation: Scalars['String'];
  businessName?: Maybe<Scalars['String']>;
  certificationUrl?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  code: Scalars['String'];
  country?: Maybe<Scalars['String']>;
  createDate: Scalars['DateTime'];
  dateOfBirth?: Maybe<Scalars['Date']>;
  email?: Maybe<Scalars['String']>;
  emailMarketing?: Maybe<Scalars['Boolean']>;
  firstName?: Maybe<Scalars['String']>;
  fullName?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  image?: Maybe<Scalars['String']>;
  job?: Maybe<Scalars['String']>;
  lastName?: Maybe<Scalars['String']>;
  lastOneoffDonation?: Maybe<Donation>;
  locality?: Maybe<Scalars['String']>;
  mobile?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  phone?: Maybe<Scalars['String']>;
  phoneMarketing?: Maybe<Scalars['Boolean']>;
  placeOfBirth?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  postalMarketing?: Maybe<Scalars['Boolean']>;
  privacy?: Maybe<Scalars['Boolean']>;
  savedCards: Array<StripeCard>;
  sex?: Maybe<Sex>;
  smsMarketing?: Maybe<Scalars['Boolean']>;
  ssn?: Maybe<Scalars['String']>;
  stripeCustomerId?: Maybe<Scalars['String']>;
  supporterType?: Maybe<SupporterType>;
  tags: Array<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  totalDonated: Scalars['String'];
  totalDonations: Scalars['Int'];
  vat?: Maybe<Scalars['String']>;
};

export enum SupporterBulkTagAction {
  Add = 'ADD',
  Remove = 'REMOVE'
}

export type SupporterConnection = {
  __typename?: 'SupporterConnection';
  edges: Array<SupporterEdge>;
  pageInfo: PageInfo;
};

export type SupporterDomain = {
  filters?: InputMaybe<SupporterFiltersInput>;
  ids?: InputMaybe<Array<Scalars['Int']>>;
};

export type SupporterEdge = {
  __typename?: 'SupporterEdge';
  cursor: Scalars['String'];
  node: Supporter;
};

export type SupporterFiltersInput = {
  campaigns?: InputMaybe<Array<Scalars['Int']>>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  createDate?: InputMaybe<DateRange>;
  dateOfBirth?: InputMaybe<Scalars['Date']>;
  emailMarketing?: InputMaybe<Scalars['Boolean']>;
  firstDonationDate?: InputMaybe<DateRange>;
  haveEmail?: InputMaybe<Scalars['Boolean']>;
  havePhone?: InputMaybe<Scalars['Boolean']>;
  ids?: InputMaybe<Array<Scalars['Int']>>;
  isOneoffSupporter?: InputMaybe<Scalars['Boolean']>;
  isRegularSupporter?: InputMaybe<Scalars['Boolean']>;
  lastDonationDate?: InputMaybe<DateRange>;
  order?: InputMaybe<Scalars['String']>;
  phoneMarketing?: InputMaybe<Scalars['Boolean']>;
  postalMarketing?: InputMaybe<Scalars['Boolean']>;
  q?: InputMaybe<Scalars['String']>;
  query?: InputMaybe<Scalars['String']>;
  smsMarketing?: InputMaybe<Scalars['Boolean']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  tagsNot?: InputMaybe<Array<Scalars['String']>>;
  totalDonated?: InputMaybe<IntRange>;
  totalDonations?: InputMaybe<IntRange>;
  type?: InputMaybe<Scalars['String']>;
};

export type SupporterInput = {
  address?: InputMaybe<Scalars['String']>;
  address2?: InputMaybe<Scalars['String']>;
  businessName?: InputMaybe<Scalars['String']>;
  certificationUrl?: InputMaybe<Scalars['String']>;
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  dateOfBirth?: InputMaybe<Scalars['Date']>;
  email?: InputMaybe<Scalars['String']>;
  emailMarketing?: InputMaybe<Scalars['Boolean']>;
  externalRef?: InputMaybe<Scalars['String']>;
  firstName?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['String']>;
  job?: InputMaybe<Scalars['String']>;
  lastName?: InputMaybe<Scalars['String']>;
  locality?: InputMaybe<Scalars['String']>;
  mobile?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
  phone?: InputMaybe<Scalars['String']>;
  phoneMarketing?: InputMaybe<Scalars['Boolean']>;
  placeOfBirth?: InputMaybe<Scalars['String']>;
  postalCode?: InputMaybe<Scalars['String']>;
  postalMarketing?: InputMaybe<Scalars['Boolean']>;
  sex?: InputMaybe<Sex>;
  smsMarketing?: InputMaybe<Scalars['Boolean']>;
  ssn?: InputMaybe<Scalars['String']>;
  supporterType?: InputMaybe<SupporterType>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  title?: InputMaybe<Scalars['String']>;
  vat?: InputMaybe<Scalars['String']>;
};

export enum SupporterType {
  Company = 'COMPANY',
  Family = 'FAMILY',
  Group = 'GROUP',
  Individual = 'INDIVIDUAL',
  Organization = 'ORGANIZATION'
}

export type Task = {
  __typename?: 'Task';
  taskId: Scalars['String'];
};

export enum TemplateType {
  Blog = 'BLOG',
  Campaign = 'CAMPAIGN',
  Homepage = 'HOMEPAGE',
  Page = 'PAGE'
}

export type TerminalLocationFilters = {
  q?: InputMaybe<Scalars['String']>;
};

export type TerminalLocationInput = {
  addressCity: Scalars['String'];
  addressCountry: Scalars['String'];
  addressLine1: Scalars['String'];
  addressLine2?: InputMaybe<Scalars['String']>;
  addressPostalCode: Scalars['String'];
  addressState: Scalars['String'];
  displayName: Scalars['String'];
};

export type TerminalRegisterInput = {
  label: Scalars['String'];
  locationId: Scalars['String'];
  registrationCode: Scalars['String'];
};

export type Theme = {
  __typename?: 'Theme';
  createDate: Scalars['String'];
  documentationUrl?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  isCurrent: Scalars['Boolean'];
  isDevelopment?: Maybe<Scalars['Boolean']>;
  isPublished?: Maybe<Scalars['Boolean']>;
  name: Scalars['String'];
  parent?: Maybe<Theme>;
  shouldUpgrade: Scalars['Boolean'];
  slug: Scalars['String'];
  supportUrl?: Maybe<Scalars['String']>;
  themeData?: Maybe<ThemeData>;
  updateDate: Scalars['String'];
  uuid: Scalars['String'];
  version: Scalars['String'];
};

export type ThemeData = {
  __typename?: 'ThemeData';
  sections: Array<SectionItem>;
  settings: Scalars['JSON'];
};

export type ThemeInput = {
  isDevelopment: Scalars['Boolean'];
  name: Scalars['String'];
  slug: Scalars['String'];
  version: Scalars['String'];
};

export type ThemesFiltersInput = {
  isDevelopment?: Scalars['Boolean'];
  isPublished?: Scalars['Boolean'];
};

export type TimelineBasicEvent = {
  __typename?: 'TimelineBasicEvent';
  createDate: Scalars['DateTime'];
  id: Scalars['Int'];
  type: EventTopic;
};

export type TimelineCommentAuthor = {
  __typename?: 'TimelineCommentAuthor';
  avatar?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  name?: Maybe<Scalars['String']>;
};

export type TimelineCommentEvent = {
  __typename?: 'TimelineCommentEvent';
  author: TimelineCommentAuthor;
  comment?: Maybe<Comment>;
  createDate: Scalars['DateTime'];
  id: Scalars['Int'];
  message: Scalars['String'];
  type: EventTopic;
};

export enum TimelineEventSubject {
  Checkout = 'CHECKOUT',
  Donation = 'DONATION',
  Supporter = 'SUPPORTER'
}

export type TimelineFilterInput = {
  subject: TimelineEventSubject;
  subjectId: Scalars['Int'];
};

export type Totem = {
  __typename?: 'Totem';
  campaignId?: Maybe<Scalars['Int']>;
  cover?: Maybe<Media>;
  deviceId: Scalars['String'];
  id: Scalars['Int'];
  name: Scalars['String'];
  terminal?: Maybe<StripeTerminal>;
  terminalId: Scalars['String'];
};

export type TotemConnection = {
  __typename?: 'TotemConnection';
  edges: Array<TotemEdge>;
  pageInfo: PageInfo;
};

export type TotemEdge = {
  __typename?: 'TotemEdge';
  cursor: Scalars['String'];
  node: Totem;
};

export type TotemInput = {
  campaignId?: InputMaybe<Scalars['Int']>;
  coverId?: InputMaybe<Scalars['Int']>;
  deviceId: Scalars['String'];
  name: Scalars['String'];
  terminalId: Scalars['String'];
};

export type TotemResponse = {
  __typename?: 'TotemResponse';
  totem?: Maybe<Totem>;
  userErrors?: Maybe<Array<UserError>>;
};

export type UnsplashPhoto = {
  __typename?: 'UnsplashPhoto';
  description?: Maybe<Scalars['String']>;
  downloadLink: Scalars['String'];
  full: Scalars['String'];
  id: Scalars['String'];
  raw: Scalars['String'];
  regular: Scalars['String'];
  small: Scalars['String'];
  thumb: Scalars['String'];
};

export type UnsplashResults = {
  __typename?: 'UnsplashResults';
  page: Scalars['Int'];
  results: Array<UnsplashPhoto>;
  total: Scalars['Int'];
  totalPages: Scalars['Int'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['Int'];
  name?: Maybe<Scalars['String']>;
  verificationToken?: Maybe<Scalars['String']>;
};

export type UserError = {
  __typename?: 'UserError';
  code: ErrorCode;
  field?: Maybe<Scalars['String']>;
  message?: Maybe<Scalars['String']>;
};

export enum WebDocumentVisibility {
  Archived = 'ARCHIVED',
  Published = 'PUBLISHED',
  Unpublished = 'UNPUBLISHED'
}

export type Webhook = {
  __typename?: 'Webhook';
  id: Scalars['Int'];
  topics: Array<EventTopic>;
  url: Scalars['String'];
};

export type WebhookInput = {
  topics: Array<EventTopic>;
  url: Scalars['String'];
};

export type Website = {
  __typename?: 'Website';
  description: Scalars['String'];
  facebookPixel?: Maybe<Scalars['String']>;
  googleAnalytics?: Maybe<Scalars['String']>;
  limitWithPassword: Scalars['Boolean'];
  password: Scalars['String'];
  passwordMessage: Scalars['String'];
  title: Scalars['String'];
};

export type WebsiteInput = {
  description: Scalars['String'];
  facebookPixel: Scalars['String'];
  googleAnalytics: Scalars['String'];
  limitWithPassword: Scalars['Boolean'];
  password: Scalars['String'];
  passwordMessage: Scalars['String'];
  title: Scalars['String'];
};

export type CampaignCreateMutationVariables = Exact<{
  data: CampaignInput;
}>;


export type CampaignCreateMutation = { __typename?: 'Mutation', campaignCreate: { __typename?: 'CampaignResponse', campaign?: { __typename?: 'Campaign', id: number, title: string, type: CampaignType, content?: string | null, note?: string | null } | null, userErrors?: Array<{ __typename?: 'UserError', code: ErrorCode, field?: string | null, message?: string | null }> | null } };

export type CampaignsListQueryVariables = Exact<{
  pagination?: InputMaybe<PaginationInput>;
  filters?: InputMaybe<CampaignFilters>;
}>;


export type CampaignsListQuery = { __typename?: 'Query', campaigns: { __typename?: 'CampaignConnection', pageInfo: { __typename?: 'PageInfo', total: number, startCursor?: string | null, endCursor?: string | null, hasNextPage: boolean, hasPreviousPage: boolean }, edges: Array<{ __typename?: 'CampaignEdge', cursor: string, node: { __typename?: 'Campaign', id: number, title: string, type: CampaignType, visibility: WebDocumentVisibility, cover?: { __typename?: 'Media', square: string } | null } }> } };

export type GetOrganizationInfoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetOrganizationInfoQuery = { __typename?: 'Query', organization: { __typename?: 'Organization', name: string, logo?: { __typename?: 'Media', square: string } | null }, user: { __typename?: 'Staff', name?: string | null } };

export type CampaignQueryVariables = Exact<{
  campaignId: Scalars['Int'];
}>;


export type CampaignQuery = { __typename?: 'Query', campaign: { __typename?: 'Campaign', id: number, title: string, content?: string | null, visibility: WebDocumentVisibility, slug: string, type: CampaignType, createDate: any, cover?: { __typename?: 'Media', id: number, small: string, url: string } | null } };

export type CampaignUpdateDetailMutationVariables = Exact<{
  id: Scalars['Int'];
  data: CampaignInput;
}>;


export type CampaignUpdateDetailMutation = { __typename?: 'Mutation', campaignUpdate: { __typename?: 'CampaignResponse', campaign?: { __typename?: 'Campaign', id: number } | null, userErrors?: Array<{ __typename?: 'UserError', code: ErrorCode, field?: string | null, message?: string | null }> | null } };


export const CampaignCreateDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CampaignCreate"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CampaignInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"campaignCreate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"campaign"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"note"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userErrors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<CampaignCreateMutation, CampaignCreateMutationVariables>;
export const CampaignsListDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"CampaignsList"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"PaginationInput"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"filters"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"CampaignFilters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"campaigns"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"pagination"},"value":{"kind":"Variable","name":{"kind":"Name","value":"pagination"}}},{"kind":"Argument","name":{"kind":"Name","value":"filters"},"value":{"kind":"Variable","name":{"kind":"Name","value":"filters"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"pageInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"startCursor"}},{"kind":"Field","name":{"kind":"Name","value":"endCursor"}},{"kind":"Field","name":{"kind":"Name","value":"hasNextPage"}},{"kind":"Field","name":{"kind":"Name","value":"hasPreviousPage"}}]}},{"kind":"Field","name":{"kind":"Name","value":"edges"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"cursor"}},{"kind":"Field","name":{"kind":"Name","value":"node"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"visibility"}},{"kind":"Field","name":{"kind":"Name","value":"cover"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"square"}}]}}]}}]}}]}}]}}]} as unknown as DocumentNode<CampaignsListQuery, CampaignsListQueryVariables>;
export const GetOrganizationInfoDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOrganizationInfo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"organization"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"logo"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"square"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetOrganizationInfoQuery, GetOrganizationInfoQueryVariables>;
export const CampaignDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Campaign"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"campaignId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"campaign"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"campaignId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"content"}},{"kind":"Field","name":{"kind":"Name","value":"visibility"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"type"}},{"kind":"Field","name":{"kind":"Name","value":"cover"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"small"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}},{"kind":"Field","name":{"kind":"Name","value":"createDate"}}]}}]}}]} as unknown as DocumentNode<CampaignQuery, CampaignQueryVariables>;
export const CampaignUpdateDetailDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CampaignUpdateDetail"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CampaignInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"campaignUpdate"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}},{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"campaign"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userErrors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"code"}},{"kind":"Field","name":{"kind":"Name","value":"field"}},{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<CampaignUpdateDetailMutation, CampaignUpdateDetailMutationVariables>;