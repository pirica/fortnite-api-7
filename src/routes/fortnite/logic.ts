import axios from "axios";
import { FinalProduct } from "../../fortnite/FinalProduct";
import { StoreProduct, Entry } from "../../fortnite/types/IProduct";

export async function getStoreInfo(): Promise<FinalProduct[]> {
  const response: any = await axios.get("https://fortnite-api.com/v2/shop/br");
  const products: FinalProduct[] = [];
  const featuredProducts: Entry[] = response.data.data.featured.entries;

  featuredProducts.forEach((entry) => {
    entry.items.forEach((item: StoreProduct) => {
      products.push(new FinalProduct(item));
    });
  });

  return products;
}
