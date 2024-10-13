import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { wixClientServer } from '@/app/lib/WixClientServer';

const CategoryProduct = async() => {
  const wixClient = await wixClientServer();

  // Fetch all categories
  const cat = await wixClient.collections.queryCollections().find();

  // Filter out 'Bestseller' and 'Trending' categories
  const filteredCategories = cat.items.filter(item => 
    item.name !== 'Bestseller' && item.name !== 'All Products'
  );

  return (
    <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
      {filteredCategories.map((item) => (
        <div key={item._id} className="relative group">
          {/* Category Image with width and height */}
          <Image
            src={item.media?.mainMedia?.image?.url || "/cat.png"}
            alt={item.name || ""}
            width={500} 
            height={600} 
            className="w-full h-52 xl:h-72 object-cover"
          />

          {/* Overlay with text */}
          <Link 
            href={`/list?cat=${item.slug}`} 
            className="absolute inset-0 flex items-center justify-center text-white text-2xl font-semibold opacity-0 group-hover:opacity-100 bg-black bg-opacity-50 transition-opacity duration-300"
          >
            {item.name}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default CategoryProduct;
