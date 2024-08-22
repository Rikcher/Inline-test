import { Outlet, useNavigate, useParams } from "react-router-dom"
import { useEffect } from "react";
import ProductPageNav from "../components/product-page/ProductPageNav";

const Product = () => {
    const { productId } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        navigate(`/store/${productId}/description`);
    }, [productId]);

    return (
        <div className="flex flex-col">
            <ProductPageNav />
            <Outlet />
        </div>
    )
}

export default Product