export interface CartItemType {
  id: number;
  name: string;
  descriptionEn: string;
  descriptionRu: string;
  blockQuoteEn: string;
  blockQuoteRu: string;
  url: string;
  chain: string;
  installationComplexity: string;
  status: string;
  rating: string;
  fieldOfActivity: string;
  valid: boolean;
  monthlyPrice: number;
  walletAddress: string;
  imageUrl: string;
  logo: string;
  twitter: string;
  telegram: string;
  discord: string;
  reddit: string;
  medium: string;
  github: string;
}

export interface CountedCartItemType extends CartItemType {
  amount: number;
  totalPrice: number;
}

export type Project = {
  id: number;
  name: string;
  descriptionEn: string;
  descriptionRu: string;
  blockQuoteEn: string;
  blockQuoteRu: string;
  url: string;
  chain: string;
  installationComplexity: string;
  status: string;
  rating: string;
  fieldOfActivity: string;
  valid: boolean;
  monthlyPrice: number;
  walletAddress: string;
  imageUrl: string;
  logo: string;
  twitter: string;
  telegram: string;
  discord: string;
  reddit: string;
  medium: string;
  github: string;
};

export type ProjectResponse = {
  data: Project[];
  totalCount: number;
};

export type InitDataObject = {
  auth_date: string;
  hash: string;
  query_id: string;
  user: string;
};
