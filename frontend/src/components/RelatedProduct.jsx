import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';

const RelatedProduct = ({category, subCategory}) => {
    const {products} = useContext(ShopContext);
    const [related, setRelated] = useState([]);
    
    useEffect(() => {
        if(products && products.length > 0) {
            // Debug: Log the incoming props and products
            console.log("Category:", category, "SubCategory:", subCategory);
            console.log("Total products:", products.length);
            
            let productsCopy = products.slice();
            
            // Try less strict filtering - case insensitive comparison
            productsCopy = productsCopy.filter((item) => {
                return category && item.category && 
                       category.toLowerCase() === item.category.toLowerCase();
            });
            console.log("After category filter:", productsCopy.length);
            
            if(subCategory) {
                productsCopy = productsCopy.filter((item) => {
                    return item.subCategory && 
                           subCategory.toLowerCase() === item.subCategory.toLowerCase();
                });
                console.log("After subcategory filter:", productsCopy.length);
            }
            
            setRelated(productsCopy.slice(0, 5));
        }
    }, [products, category, subCategory]);
    
    // Add conditional rendering to show feedback when no products
    return (
        <div className='my-24'>
            <div className='text-center text-3xl py-2'>
                <Title text1={'Related'} text2={'Products'}/>
            </div>
            
            {related.length > 0 ? (
                <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                    {related.map((item, index) => (
                        <ProductItem 
                            key={index} 
                            id={item._id} 
                            name={item.name} 
                            price={item.price} 
                            image={item.image} 
                        />
                    ))}
                </div>
            ) : (
                <div className='text-center py-8 text-gray-500'>
                    No related products found
                </div>
            )}
        </div>
    )
}

export default RelatedProduct