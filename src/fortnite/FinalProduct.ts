import { StoreProduct } from "./types/IProduct";

export class FinalProduct {
    name;
    description;
    type;
    rarity;
    attribution;
    intrudction;
    image;
    
    constructor(storeProduct: StoreProduct) {
      this.name = storeProduct.name;
      this.description = storeProduct.description;
      this.type = storeProduct.type.value;
      this.rarity = storeProduct.rarity.value;
      this.attribution = storeProduct.set?.text;
      this.intrudction = (({backendValue, ...o}) => o)(storeProduct.introduction);
      this.image = storeProduct.images.icon;
    }
  }
  