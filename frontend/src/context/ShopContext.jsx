import { createContext, useState } from "react";
import { products } from "../assets/assets";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
    const currency = "Rs. ";
    const delivery_fee = 60;
    const [search,setSearch] = useState('');
    const [showSearch,setShowSearch] = useState(false);
    
    // Include currency and delivery_fee in the value object
    const value = {
        products,
        currency,
        delivery_fee,
        search,
        setSearch,
        showSearch,
        setShowSearch
    }

    return (
        <ShopContext.Provider value={value}>
            {props.children}
        </ShopContext.Provider>
    )
}

export default ShopContextProvider;