import React, { createContext, useState, useEffect } from 'react';
import ProductsData from '../products.json'

//* Тут я вытягиваю продукты из json файла просто в качесвте упрощённой версии. В реальном приложении я бы сделал отдельный ProductsContext, в котором фетчил бы продукты из базы данных
//* Ниже простенький контекст просто для примера  

//* const ProductsContext = createContext();

//* export const useProductsContext = () => useContext(ProductsContext);

//* export const ProductsProvider = ({ children }) => {
//*     const [products, setProducts] = useState([]);

//*    const fetchProducts = async () => {
//*         const response = await fetch('https://api-endpoint/products');
//*         const data = await response.json();
//*         setProducts(data);
//*     };

//*     useEffect(() => {
//*         fetchProducts();
//*     }, []);

//*     return (
//*         <ProductContext.Provider value={products}>
//*             {children}
//*         </ProductContext.Provider>
//*     );
//* };


export interface Product {
    id: string;
    name: string;
    sellerName: string;
    price: number;
    pricePerUnit: string;
    rating: number;
    image: string;
    description: string;
    secondDescription?: string;
    specifications: {label: string, value: string}[]
    storageConditions: {label: string, value: string}[]
    nutritions: {label: string, value: string}[]
}

interface CartContextType {
    itemsCount: number;
    addToCart: () => void;
    products: Product[];
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [itemsCount, setItemsCount] = useState<number>(0);
    const [products, setProducts] = useState<Product[]>(ProductsData);

    const addToCart = () => {
        setItemsCount(prevCount => prevCount + 1);
    };

    useEffect(() => {
        localStorage.setItem('cartItemCount', JSON.stringify(itemsCount));
    }, [itemsCount]);

    useEffect(() => {
        const savedItemCount = localStorage.getItem('cartItemCount');
        if (savedItemCount) {
            setItemsCount(Number(savedItemCount));
        }
    }, []);

    return (
        <CartContext.Provider value={{ itemsCount, addToCart, products }}>
        {children}
        </CartContext.Provider>
    );
};
