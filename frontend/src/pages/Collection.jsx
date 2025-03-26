import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import Title from '../components/Title';
import ProductItem from '../components/ProductItem';

const Collection = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [filterProducts, setFilterProducts] = useState(products);

  const [selectedCategories, setSelectedCategories] = useState({
    Men: false,
    Women: false,
    Kids: false
  });

  const [selectedTypes, setSelectedTypes] = useState({
    Topwear: false,
    Bottomwear: false,
    Winterwear: false
  });

  useEffect(() => {
    // Filter products based on selected categories and types
    const filteredProducts = products.filter(product => {
      const categoryMatch = !Object.keys(selectedCategories).some(category => 
        selectedCategories[category]) || 
        selectedCategories[product.category];
      
      const typeMatch = !Object.keys(selectedTypes).some(type => 
        selectedTypes[type]) || 
        selectedTypes[product.type];
      
      return categoryMatch && typeMatch;
    });

    setFilterProducts(filteredProducts);
  }, [products, selectedCategories, selectedTypes]);

  const handleCategoryToggle = (category) => {
    setSelectedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const handleTypeToggle = (type) => {
    setSelectedTypes(prev => ({
      ...prev,
      [type]: !prev[type]
    }));
  };

  const handleSort = (sortOption) => {
    let sortedProducts = [...filterProducts];
    switch(sortOption) {
      case 'low-high':
        sortedProducts.sort((a, b) => a.price - b.price);
        break;
      case 'high-low':
        sortedProducts.sort((a, b) => b.price - a.price);
        break;
      default:
        // Keep original order or implement relevant sorting
        break;
    }
    setFilterProducts(sortedProducts);
  };

  return (
    <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t'>
      <div className='min-w-60'>
        <p 
          className='my-2 text-xl flex items-center cursor-pointer gap-2'
          onClick={() => setShowFilter(!showFilter)}
        >
          FILTERS
          <img 
            src={assets.dropdown_icon} 
            alt="Filter toggle" 
            className={`h-3 sm:hidden ${showFilter ? 'rotate-180' : ''}`}
          />
        </p>

        {/* Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>CATEGORIES</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            {Object.keys(selectedCategories).map((category) => (
              <label key={category} className='flex gap-2 items-center'>
                <input
                  type='checkbox'
                  className='w-3'
                  checked={selectedCategories[category]}
                  onChange={() => handleCategoryToggle(category)}
                />
                {category}
              </label>
            ))}
          </div>
        </div>

        {/* Sub Category Filter */}
        <div className={`border border-gray-300 pl-5 py-3 mt-6 ${showFilter ? '' : 'hidden'} sm:block`}>
          <p className='mb-3 text-sm font-medium'>TYPE</p>
          <div className='flex flex-col gap-2 text-sm font-light text-gray-700'>
            {Object.keys(selectedTypes).map((type) => (
              <label key={type} className='flex gap-2 items-center'>
                <input
                  type='checkbox'
                  className='w-3'
                  checked={selectedTypes[type]}
                  onChange={() => handleTypeToggle(type)}
                />
                {type}
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Right side */}
      <div className='flex-1'>
        <div className='flex justify-between text-base sm:text-2xl mb-4'>
          <Title text1={'ALL'}  text2={'COLLECTIONS'}/>
          {/* Sort the products */}
          <select 
            className='border-2 border-gray-300 text-sm px-2'
            onChange={(e) => handleSort(e.target.value)}
          >
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Low to High</option>
            <option value="high-low">Sort by: High to Low</option>
          </select>
        </div>
        {/* Map Products */}
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
          {filterProducts.map((item, index) => (
            <ProductItem 
              key={item._id} 
              name={item.name} 
              id={item._id} 
              price={item.price} 
              image={item.image}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Collection