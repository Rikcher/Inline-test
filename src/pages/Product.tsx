import { NavLink, Outlet, useParams } from "react-router-dom"
import { CartContext } from "../contexts/CarContext";
import { useContext } from "react";

const Product = () => {
    const { productId } = useParams();
    const { products } = useContext(CartContext)!
    const product = products.find((product) => product.id === productId);
    console.log(product)

    return (
        <div>
            <nav>
                <NavLink to="#">ОПИСАНИЕ</NavLink>
                <NavLink to="#">ОТЗЫВЫ</NavLink>
                <NavLink to="#">ОТКУДА?</NavLink>
            </nav>
            <Outlet />
        </div>
    )
}

export default Product