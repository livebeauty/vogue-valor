
import { wixClientServer } from '@/app/lib/WixClientServer';

const PRODUCT_PER_PAGE = 20;

const BestSellerListSSR = async ({
  categoryId,
  limit,
}: {
  categoryId: string;
  limit?: number;
}) => {
  const wixClient = await wixClientServer();

  const res = await wixClient.products
    .queryProducts()
    .eq("collectionIds", categoryId)
    .limit(limit || PRODUCT_PER_PAGE)
    .find();
    
  return res.items;
}


export default BestSellerListSSR;
