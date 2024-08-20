import { useParams } from "react-router-dom"
import { CartContext } from "../contexts/CarContext";
import { useContext } from "react";

const Product = () => {
    const { productId } = useParams();
    const { products } = useContext(CartContext)!
    const product = products.find((product) => product.id === productId);
    console.log(product)

    return (
        <div>Product</div>
    )
}

export default Product