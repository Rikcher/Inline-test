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

interface CartItemType {
    id: string;
    name: string;
    sellerName: string;
    price: number;
    pricePerUnit: string;
    quantity: number;
    rating: number;
    image: string;
}

type ProductType = Omit<CartItemType, 'quantity'>

interface CartContextType {
    cartItems: CartItemType[];
    addToCart: (item: CartItemType) => void;
    removeFromCart: (itemId: string) => void;
    clearCart: () => void;
    getCartTotal: () => number;
    products: ProductType[];
}

export const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cartItems, setCartItems] = useState<CartItemType[]>([]);
    const [products, setProducts] = useState<ProductType[]>(ProductsData);

    const addToCart = (item: CartItemType) => {
        const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
        if (existingItem) {
        setCartItems(cartItems.map((cartItem) =>
            cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
        ));
        } else {
        setCartItems([...cartItems, { ...item, quantity: 1 }]);
        }
    };

    const removeFromCart = (itemId: string) => {
        setCartItems(cartItems.filter(item => item.id !== itemId));
    };

    const clearCart = () => {
        setCartItems([]);
    };

    const getCartTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    useEffect(() => {
        localStorage.setItem('cartItems', JSON.stringify(cartItems));
    }, [cartItems]);

    useEffect(() => {
        const savedCartItems = localStorage.getItem('cartItems');
        if (savedCartItems) {
        setCartItems(JSON.parse(savedCartItems));
        }
    }, []);

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart, getCartTotal, products }}>
        {children}
        </CartContext.Provider>
    );
};
