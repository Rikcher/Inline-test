import { CartContext } from "../../../contexts/CarContext";
import { useContext } from "react";

const ProductButton = () => {
    const { addToCart } = useContext(CartContext)!

    return (
        <button onClick={() => addToCart()} className="w-16 h-9 bg-main mb-2 rounded-s-full flex justify-center items-center hover:bg-main-dark">
            <span className="material-symbols-outlined text-white">
            shopping_cart
            </span>
        </button>
    )
}

export default ProductButton