import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

/**
 * LatestCollection component displays the newest products in the shop
 * @returns {JSX.Element} LatestCollection component
 */
const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (products && products.length > 0) {
      // Get the 10 most recent products
      setLatestProducts(products.slice(0, 10));
      setIsLoading(false);
    }
  }, [products]);

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <Title text1={"Latest"} text2={"Collections"} />
        <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-sm md:text-base leading-relaxed">
          Discover our newest arrivals, carefully curated to bring you the latest trends and timeless essentials. 
          Each piece in our latest collection reflects our commitment to quality, design, and sustainability.
        </p>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-pulse text-gray-500">Loading collections...</div>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {latestProducts.map((item, index) => (
            <div key={item.id || index} className="transform hover:-translate-y-1 transition-transform duration-300">
              <ProductItem 
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price}
              />
            </div>
          ))}
        </div>
      )}
      
      <div className="text-center mt-12">
        <button className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200">
          View All Collections
        </button>
      </div>
    </section>
  );
};

export default LatestCollection;