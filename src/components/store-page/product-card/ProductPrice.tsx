import { Product } from "../../../contexts/CartContext"

interface ProductPriceProps {
    product: Product;
    styles?: string;
    priceStyles?: string;
    unitStyles?: string;
}

const ProductPrice: React.FC<ProductPriceProps> = ({ product, styles, priceStyles, unitStyles }) => {
    return (
        <div className={`flex gap-1 items-baseline mb-3 ${styles}`}>
            <span className={`text-xl text-gray-superdark font-semibold ${priceStyles}`}>{`${product.price} ₽`}</span>
            <span className={`text-xs text-gray-superlight ${unitStyles}`}>/</span>
            <span className={`text-xs text-gray-superlight ${unitStyles}`}>{product.pricePerUnit}</span>
        </div>
    )
}

export default ProductPrice