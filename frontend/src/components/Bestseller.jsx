import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

/**
 * Bestseller component displays top-selling products
 * @returns {JSX.Element} Bestseller section
 */
const Bestseller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Determine best sellers, prioritizing items marked as bestseller
    const bestProduct = products
      .filter((item) => item.bestseller)
      .slice(0, 5);
    
    setBestSeller(bestProduct);
    setIsLoading(false);
  }, [products]);

  return (
    <section className="py-16 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <Title text1={"Best"} text2={"Sellers"} />
        <p className="mt-6 max-w-2xl mx-auto text-gray-600 text-sm md:text-base leading-relaxed">
          Discover our most sought-after products that have captured the hearts 
          of our customers. These bestsellers represent the perfect blend of 
          quality, style, and customer satisfaction.
        </p>
      </div>

      {isLoading ? (
        <div className="flex justify-center items-center h-64">
          <div className="animate-pulse text-gray-500">Loading bestsellers...</div>
        </div>
      ) : bestSeller.length > 0 ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {bestSeller.map((item) => (
            <div 
              key={item._id} 
              className="transform hover:-translate-y-2 transition-transform duration-300 ease-in-out"
            >
              <ProductItem 
                id={item._id} 
                name={item.name} 
                image={item.image} 
                price={item.price} 
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 py-12">
          No bestsellers found at the moment.
        </div>
      )}

      <div className="text-center mt-12">
        <button className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 shadow-sm text-base font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200">
          View All Products
        </button>
      </div>
    </section>
  );
};

export default Bestseller;