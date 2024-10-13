import { wixClientServer } from "@/app/lib/WixClientServer";
import { products } from "@wix/stores";
import DOMPurify from "isomorphic-dompurify";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Pagination from "../Pagination/Pagination";


const PRODUCT_PER_PAGE = 1;

const ProductList = async ({
  categoryId,
  limit,
  searchParams
}: {
  categoryId: string;
  limit?: number;
  searchParams:any;
}) => {
  const wixClient = await wixClientServer();

  const productQuery =  wixClient.products
    .queryProducts()
    .startsWith("name",searchParams?.name || "")
    .eq("collectionIds", categoryId)
    .hasSome("productType",[searchParams?.type || "physical", "digital"])
    .gt("priceData.price", searchParams?.min || 0)
    .lt("priceData.price", searchParams?.max || 999999)
    .limit(limit || PRODUCT_PER_PAGE)
    .skip(searchParams?.page ? parseInt(searchParams.page) * (limit || PRODUCT_PER_PAGE): 0)
    // .find();

    if (searchParams?.sort) {
      const [sortType, sortBy] = searchParams.sort.split(" ")

      if (sortType === "asc") {
        productQuery.ascending(sortBy)
      }

      if (sortType === "desc") {
        productQuery.descending(sortBy)
      }
    }

    const res = await productQuery.find()

    console.log(res);
    

    return (
      <div
      className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap"
    >
      {res.items.map((product: products.Product) => (
        <div key={product._id}>
          <Link href={"/" + product.slug}>
            <div className="relative w-64 h-48 sm:h-56 md:h-64 lg:h-72 xl:h-72">
              <Image
                src={product.media?.mainMedia?.image?.url || "/product.png"}
                alt={product.name || ""}
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity duration-500"
              />
              {product.media?.items && (
                <Image
                  src={product.media?.items[1]?.image?.url || "/product.png"}
                  alt={product.name || ""}
                  fill
                  className="absolute object-cover rounded-md"
                />
              )}
            </div>
            <div className="flex justify-between mt-2">
              <span className="font-medium">{product.name}</span>
              <span className="font-semibold">${product.price?.price}</span>
            </div>
        
        
            {product.additionalInfoSections && (
              <div className='text-sm text-gray-500 mt-1' dangerouslySetInnerHTML={{__html:DOMPurify.sanitize(
                product.additionalInfoSections.find(
                  (section: any) => section.title === "Helo"
                )?.description || "No description available"
              )}}>
                {}
              </div>
            )}
            <button className="rounded-2xl ring-1 ring-lama text-lama w-max py-2 px-4 text-xs hover:bg-[#f35c7a] hover:text-white mt-2">
              Add to Cart
            </button>
          </Link>
        </div>
      ))}
      {searchParams?.cat || searchParams?.name ? (
      <Pagination
      currentPage={res.currentPage || 0}
      hasPrev={res.hasPrev()}
      hasNext={res.hasNext()}
      />
      ) : null}
    </div>
    )
    
}


export default ProductList;




