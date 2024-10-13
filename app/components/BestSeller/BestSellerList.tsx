import React from 'react';
import BestSellerListSwiper from './BestSellerSwiper';
import BestSellerListSSR from './BestSellerSSR';

const BestSellerList = async ({
  categoryId,
  limit,
}: {
  categoryId: string;
  limit?: number;
}) => {
  const products = await BestSellerListSSR({ categoryId, limit });

    
  return (
    <div>
        <BestSellerListSwiper
        
        products={products} />
    </div>
  );
};

export default BestSellerList;
