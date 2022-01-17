/**
 * The data we get from fortnite api.
 */
declare interface StoreProduct {
  id: string;
  name: string;
  description: string;
  type: {
    value: string;
    displayValue: string;
    backendValue: string;
  };

  rarity: {
    value: string;
    displayValue: string;
  };
  series: any;
  set?: {
    value: string;
    text: string;
    backendValue: string;
  };

  introduction: {
    chapter: string;
    season: string;
    text: string;
    backendValue: number;
  };
  images: {
    smallIcon: string;
    icon: string;
    featured: string;
    other: any;
  };

  gameplayTags: string[];
  metaTags: any;
  showcaseVideo: string;
  dynamicPakId: any;
  displayAssetPath: any;
  definitionPath: string;
  path: string;
  added: string;
  shopHistory: string[];
}


declare interface Product {
  name: string;
  price: number;
  image: string;
  attribution?: string;
  type: string;
  rarity: string;
  intrudction: { chapter: number; season: number; comment: string };
}

declare interface Entry {
  regularPrice: number;
  finalPrice: number;
  bundle: {
    name: string;
    info: string;
    image: string;
  } | null;

  banner: {
    value: string;
    intensity: string;
    backendValue: string;
  };

  giftable: boolean;
  refundable: boolean;
  sortPriority: number;
  categories: string[];
  sectionId: any;
  section: object;
  devName: string;
  offerId: string;
  displayAssetPath: string;
  tileSize: string;
  newDisplayAssetPath: string;
  newDisplayAsset: object;
  items: StoreProduct[];
}


