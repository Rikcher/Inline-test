import { Link } from "react-router-dom";
import { Product } from "../../../contexts/CarContext"

interface ProductSellerInfoProps {
    product: Product;
}

const ProductSellerInfo: React.FC<ProductSellerInfoProps> = ({product}) => {
    return (
        <div className="flex flex-col min-h-20">
            <Link to="#" className="max-w-full text-wrap font-semibold mb-2 text-gray-dark hover:underline">{product.name}</Link>
            <p className="text-xs text-gray-light">{`от ${product.sellerName}`}</p> {/* Тоже может быть ссылкой на профиль продавца */}
        </div>
    )
}

export default ProductSellerInfo