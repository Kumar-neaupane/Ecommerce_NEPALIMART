import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

/**
 * ProductItem component displays individual product with image, name and price
 * 
 * @param {Object} props Component props
 * @param {string} props.id Unique product identifier
 * @param {Array} props.image Array of product images
 * @param {string} props.name Product name
 * @param {number} props.price Product price
 * @returns {JSX.Element} ProductItem component
 */
const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  
  return (
    <Link 
      className="group block rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300" 
      to={`/product/${id}`}
      aria-label={`View ${name} details`}
    >
      <div className="overflow-hidden aspect-square bg-gray-50">
        <img
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 ease-in-out"
          src={image[0]}
          alt={name}
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-sm font-medium text-gray-900 truncate">{name}</h3>
        <p className="mt-1 text-sm font-bold text-gray-800">
          {currency}{typeof price === 'number' ? price.toFixed(2) : price}
        </p>
      </div>
    </Link>
  );
};

export default ProductItem;