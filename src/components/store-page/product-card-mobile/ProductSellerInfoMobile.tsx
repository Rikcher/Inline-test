import { Link } from "react-router-dom";
import { Product } from "../../../contexts/CartContext"

interface ProductSellerInfoMobileProps {
    product: Product;
}

const ProductSellerInfoMobile: React.FC<ProductSellerInfoMobileProps> = ({product}) => {
    return (
        <div className="flex flex-col min-h-20">
            <Link to="#" className="max-w-[9.5rem] truncate text-[0.9375rem] text-black font-semibold text-nowrap mb-2 hover:underline">{product.name}</Link>
            <p className="text-[0.6875rem] text-black">{`от ${product.sellerName}`}</p> 
        </div>
    )
}

export default ProductSellerInfoMobile